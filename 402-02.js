// Get the list element
var list = document.querySelector('.has-children');

// Apply styles to the first child
list.firstElementChild.style.backgroundColor = 'blue';

// Apply styles to the last child
list.lastElementChild.style.backgroundColor = 'palevioletred';

// Apply styles to the 9th child
var ninthChild = list.children[8]; // Index 8 corresponds to the 9th child
ninthChild.style.backgroundColor = 'green';

// Apply styles to even-numbered children
for (var i = 0; i < list.children.length; i++) {
  if ((i + 1) % 2 === 0) {
    list.children[i].style.backgroundColor = 'lime';
  }
}
