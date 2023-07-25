/*var item = document.getElementsByClassName('list-group-item');
item[4].style.fontWeight = 'bold';

var item = document.getElementsByTagName('li');
item[4].style.fontWeight = 'bold';
item[4].style.backgroundColor = 'blue';
 */
//var seconditem = document.querySelector('.list-group-item:nth-child(2)');
//seconditem.style.backgroundColor = 'green'

//var thirditem = document.querySelector('.list-group-item:nth-child(3)');
//thirditem.style.display = 'none'

var item = document.querySelectorAll('.list-group-item');
item[1].style.color = 'green'

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i< odd.length; i++){
    odd[i].style.backgroundColor = 'green'
}
