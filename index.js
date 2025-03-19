
function alertAlert() {
    alert('I was clicked!');
  }
  
  function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', alertAlert);
  }
  
  module.exports = {addingEventListener};