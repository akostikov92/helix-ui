/** @format */

let css = document.querySelector('.css');
let html = document.querySelector('.html');

function renderContent() {
  console.log('click event');

  let content = document.getElementById('content');
  let el = document.createElement('html-elements');
  content.appendChild(el);
}

let contentHtmlElements = document.getElementById('html-elements');
contentHtmlElements.addEventListener('click', renderContent);
