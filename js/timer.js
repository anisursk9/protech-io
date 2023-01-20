function createTimer(time) {
  var counter = document.getElementById('cycleTimer').getContext('2d');
  var no = time;
  var pointToFill = 4.72;
  var cw = counter.canvas.width;
  var ch = counter.canvas.height;
  var diff;

  function fillCounter() {
    diff = ((no / time) * Math.PI * 2 * 10);
    counter.clearRect(0, 0, cw, ch);
    counter.lineWidth = 3;
    counter.fillStyle = '#000';
    counter.strokeStyle = '#F5E0A9';
    counter.textAlign = 'center';
    counter.font = "25px monospace";
    counter.fillText(no + 'sec', 100, 110);
    counter.beginPath();
    counter.arc(110, 110, 70, pointToFill, diff / 10 + pointToFill);
    counter.stroke();

    if (no === 0) {
      clearTimeout(fill);
    }
    no--;
  }

  var fill = setInterval(fillCounter, 1000);
}

createTimer(50);
