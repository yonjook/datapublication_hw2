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
  