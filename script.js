const tableContainer = document.querySelector('.table__container');

class Table {
  constructor(rows = 0, columns = 0){
  this.rows = rows,
  this.columns = columns,
  this.width = 400 + 'px',
  this.theme = 'light',
  this.height = 700 + 'px';
  this.density = 20 + 'px';
  this.headers = 'toggle';
  this.text = `Lorem ipsum`;
  this.editable = true
  }
  



  setRowsColumns() {
    if (this.headers == 'toggle') {
      for (let i = 0; i < this.columns; i++) {
        this.header = document.createElement(`th`);      
        this.particle = document.createElement(`p`);
       this.particle.setAttribute('contenteditable', 'false')
        this.particle.innerHTML = this.text;
        this.header.appendChild(this.particle);
        this.table.appendChild(this.header);
   

      }

    
      for (let i = 0; i < this.rows; i++) {
        this.row = document.createElement(`tr`);
        this.table.appendChild(this.row)
        for (let a = 0; a < this.columns; a++) {
          this.column = document.createElement(`td`);
          this.particleTd = document.createElement(`p`);
          this.particleTd.setAttribute('contenteditable', 'false')
          this.row.appendChild(this.column)
          this.particleTd.innerHTML = this.text;
          this.column.appendChild(this.particleTd)  ;
          
        }
      }
    }
  }

  setEditable() {
    this.article = document.querySelectorAll('p');

    // this.button.addEventListener('click',  () => {
    //   console.log(this.particle.getAttribute('contenteditable'))
    //   console.log(this.particle)
    //   if (this.particle.getAttribute('contenteditable') == 'true' || this.particleTd.getAttribute('contenteditable') == 'true') {
    //     for (let i = 0; i < this.article.length; i++){
    //       this.article[i].setAttribute('contenteditable', 'false');
    //     }
    //   }
      
    //   else if (this.particle.getAttribute('contenteditable') == 'false' || this.particleTd.getAttribute('contenteditable') == 'false') {
    //     for (let i = 0; i < this.article.length; i++){
    //       this.article[i].setAttribute('contenteditable', 'true');
    //     }
    //   }
    // })
  
    this.button.addEventListener('click', () => { 
      if (this.editable == true) {
        for (let i = 0; i < this.article.length; i++) {
          this.article[i].setAttribute('contenteditable', 'true');
          this.button.innerHTML = `<p>save</p>`
        }
        this.editable = false;
      }
        else if (this.editable == false) {
          for (let i = 0; i < this.article.length; i++) {
            this.article[i].setAttribute('contenteditable', 'false');
            this.button.innerHTML = `<p>edit</p>`
          }
          this.editable = true;
        }
    }
    )
    }
      
      
  
  
  init() {
    this.table = document.querySelector('.main__table');
    this.button = document.querySelector('.table__button');
    this.setRowsColumns();
    this.setEditable()
  }

}


let newTable = new Table(3, 5);
newTable.init()