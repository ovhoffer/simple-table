export class Table {
  constructor(data, tableClassName, options) {
      this.data = data,
      this.table = document.querySelector(tableClassName)
    this.columns = options.columns
   }
   
 
  setData() {
    this.headersContainer = document.createElement(`div`); 
      this.headersContainer.classList.add('headers__container');
      this.table.appendChild(this.headersContainer);
   // console.log(this.columns.length);
    for (let i = 0; i < this.columns.length; i++) {
      
      this.header = document.createElement(`div`); 
      this.header.classList.add("header");
      this.particle = document.createElement(`p`);
      this.particle.classList.add('header__paragraph')
      this.particle.innerHTML = this.columns[i].label;
      //console.log(Object.keys(this.data[1]))
      this.header.appendChild(this.particle);
      this.headersContainer.appendChild(this.header);
    }
    for (let i = 0; i < 100; i++) {
      this.row = document.createElement(`div`);
      this.row.classList.add("row");
      this.table.appendChild(this.row);
      for (let a = 0; a < this.columns.length; a++){
        this.actual = Object.values(this.columns[a])[1]
        //console.log(this.actual)
        
        // for (let b = 0; b < Object.values(this.columns[a])[1].length; b++) {
        //   if (Object.keys(this.data[i])[a] === Object.values(this.columns[a])[1]) {
        //     //console.log(Object.keys(this.data[i])[a])
        //   }
        // }
        this.column = document.createElement(`div`);
        this.column.classList.add("content");
        this.particleTd = document.createElement(`p`);
        this.particleTd.classList.add('content__paragraph')


        for (let b = 0; b < Object.keys(this.data[1]).length; b++){
         // console.log(Object.keys(this.data[i])[b])
          if (Object.keys(this.data[i])[b] === this.actual) {
            //console.log('pup')
           //if (typeof (Object.values(this.data[i])[b]) === 'object') {
          //    this.particleTd.innerHTML = Object.values(this.data[i])[b]);
              //console.log(JSON.stringify((Object.values(this.data[i])[a])))
          // }
          // else {
              this.particleTd.innerHTML = Object.values(this.data[i])[b];
          //  }
            //console.log(Object.values(this.data[i])[i])
            this.column.appendChild(this.particleTd);
            this.row.appendChild(this.column);
          }
        }
    
      }
    }

  }
 
  
   init() {
    this.setData()     
   }
 
}
 