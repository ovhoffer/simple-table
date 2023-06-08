import { Table } from './table.js';

document.addEventListener('DOMContentLoaded', appInit);
let template = [];
let columns = [];


async function getData() {
   const response = await fetch('http://universities.hipolabs.com/search?country=United+Kingdom');
   return await response.json();
}

async function setRows() {
   let data = await getData();
   //console.log(data)
   if (data.length != 0) { 
   //onsole.log(data)
   const keysNumber = Object.keys(data[0]);
   //console.log(Object.keys(data[0]))
      let keyArr = [];
   for (let i = 0; i < keysNumber.length; i++) {
      keyArr.push(keysNumber[i]);
      // console.log(keysNums)
   }
   template.push(keyArr);
   for (let i = 0; i < data.length; i++) {
      template.push(data[i]);
   }
      
   const newTable = new Table(data, '.main__table');
   newTable.init();
   newTable.table = document.querySelector('.main__table');
   //console.log(template)
      return template;
}
}

// function setColumns(data, template) {
//    const keysNumber = Object.keys(data[0])
//    //console.log(keysNumber.length)
//    for (let i = 0; i < keysNumber.length; i++) {
//       let sb = keysNumber[i];
//       //console.log(sb)
//       let newObj = {}
//        newObj['title'] = keysNumber[i];
//       for (let a = 0; a < data.length; a++) {
//          //console.log(data[3])
//          newObj['value' + a] = data[a][sb];
         
//          //console.log(newObj)
//       }
//       //console.log(newObj)
//       template.push(newObj)
//    }

//    console.log(template[1].title)

   
   //console.log(setRows())
// }

function appInit() {

   getData();
   setRows();
   //console.log(data);

 
   //console.log('bib')

  
}