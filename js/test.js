function hideElement() {
    const image = document.getElementById('hello');
    image.style.display = 'none'
}



function displayMinute() {
    const minuteDiv = document.getElementById('minute');
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const totalMinutes = hours * 60 + minutes;
    minuteDiv.innerText = `It has been ${totalMinutes} minutes since midnight.`;
  }
  
function showPrompt() {
    const name = prompt("What's your name?");
    if (name !== null && name !== "") {
      alert(`Thank you! Welcome to my website, ${name}!`);
    }
}

function sortArray() {
    const input = prompt('Enter a few numbers separated by commas:');
    const sortedArray = parseArray(input);
    alert(sortedArray);
}

function parseArray(input) {
    const arr = input.split(',').map(Number);
    arr.sort(function (a,b) {return a - b });
    return arr;
}