/*var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';

var additem = document.getElementsByClassName('title');
additem[0].style.color = 'Green';
additem[0].style.fontWeight = 'bold';

var additem = document.getElementsById('#main.h2');
additem.style.color = 'Green';
additem.style.fontWeight = 'bold';*/
 


var items = document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor = 'green';


for(var i=0;i< items.length; i++){
    items[i].style.fontWeight = 'bold';
}