var itemlist = document.querySelector('#items');
itemlist.parentElement.style.backgroundColor = '#f4f4f4'
itemlist.firstChild.style.backgroundColor = '#f4f4f4'
itemlist.firstElementChild.style.textContent = 'Hello 1'
itemlist.lastElementChild.style.textContent ='Hello 4'
itemlist.nextSibling.style.backgroundColor ='#c3c3c3'
itemlist.nextElementSibling.style.backgroundColor ='#c3c3c3'
itemlist.previousSibling.style.color ='yellow'
itemlist.previousElementSibling.style.color ='yellow' 
// add Hello world before item Lister
var newDiv = document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title', 'Hello div');

var newDivText = document.createTextNode('Hello world');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);

// add Hello world before item Lister
var anotherDiv = document.createElement('div');
anotherDiv.className='hello1';
anotherDiv.id='hello2';
anotherDiv.setAttribute('title', 'Hello div');

var anotherDivText = document.createTextNode('Hello world');
anotherDiv.appendChild(anotherDivText);

var container1 = document.querySelector('ul .list-group-item');
var h2 = document.querySelector('ul li');
container1.insertBefore(anotherDiv, h2);

