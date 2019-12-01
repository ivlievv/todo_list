'use strict';

let list = document.querySelector('ul');
list.addEventListener('click', function (add) {
    if(add.target.tagName === "li") {
        add.target.classList.toggle('checked');
    } else if(add.target.tagName === "SPAN") {
        var div = add.target.parentNode;
        div.remove();
    }
}, false);

function newElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('inputTodoList').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == "") {
        alert("Введите ваше дело!");
    } else {
        document.getElementById('UlListElement').appendChild(li);
    }
    document.getElementById('inputTodoList').value = "";
    let span = document.createElement('SPAN');
    let txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
}