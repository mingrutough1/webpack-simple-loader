import text from './example.txt';
function component() {
    var element = document.createElement('div');
  
    element.innerHTML = text;
    return element;
}
document.body.appendChild(component());