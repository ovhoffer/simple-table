# simple-table


## Overview
It's a practice that should help me to understand the basics of the architecture of frameworks and help me to learn how components are built. Anyway, you are free to use this table. I'm trying to update it regularly :)


## Usage
There's no need to install anything. You can just downland the folder src that contains *table.js*, *table. scss*, and *script.js*.  Then all you need is to paste the link to your API in
`const response = await fetch('http://universities.hipolabs.com/search?country=United+Kingdom');`.
Then you can change an `options` object.

### **Options** object
There we have something like this: 

`const options = {
   columns: [
      {
         label: 'country name',
         trackBy: 'country'
      },
      {
         label: 'name', 
         trackBy: 'name'
      },
      {
         label: 'domain',
         trackBy: 'domains'
      }
   ]
}`

And I will try to explain why this object is important and what it does:
* **columns** array: It has as many elements as you want to do in the table. Every object in this array shows one column. *Label* contains the name of the column, and *TrackBy* contains a key whose values will be shown under this label.
