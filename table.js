export class Table {
  constructor(data, tableClassName) {
      this.data = data,
      this.table = document.querySelector(tableClassName)
   }
   
 
  setData() {
    this.headersContainer = document.createElement(`div`); 
      this.headersContainer.classList.add('headers__container');
      this.table.appendChild(this.headersContainer);
    console.log(this.data);
    for (let i = 0; i < 3; i++) {
      
      this.header = document.createElement(`div`); 
      this.header.classList.add("header");
      this.particle = document.createElement(`p`);
      this.particle.innerHTML = Object.keys(this.data[i])[i];
      //console.log(Object.keys(this.data[1]))
      this.header.appendChild(this.particle);
      this.headersContainer.appendChild(this.header);
    }
    for (let i = 0; i < 100; i++) {
      this.row = document.createElement(`div`);
      this.row.classList.add("row");
      this.table.appendChild(this.row);
      for (let a = 0; a < 3; a++){
        this.column = document.createElement(`div`);
        this.column.classList.add("content");
        this.particleTd = document.createElement(`p`);
        if (typeof (Object.values(this.data[i])[a]) === 'object') {
          this.particleTd.innerHTML = JSON.stringify(Object.values(this.data[i])[a]);
          //console.log(JSON.stringify((Object.values(this.data[i])[a])))
        }
        else {
          this.particleTd.innerHTML = Object.values(this.data[i])[a];
        }
        //console.log(Object.values(this.data[i])[i])
        this.column.appendChild(this.particleTd);
        this.row.appendChild(this.column);
      }
    }

  }
 
  
   init() {
    this.setData()     
   }
 
}
 