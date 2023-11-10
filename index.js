const graphicCanvas = document.getElementById('graphic-canvas');
let ctx = graphicCanvas.getContext('2d');
graphicCanvas.width = 400;
graphicCanvas.height = 400;

let radius = graphicCanvas.height / 2;
ctx.translate(radius, radius);

numThickRadii = 35;
numRadii = 35 * 5;

offWhite = '#FFEAD8';
offBlack = '#211A18';

ctx.strokeStyle = offWhite;
drawOuterCircle();
drawInnerCircles(60);
drawThickRadii(numRadii);
drawColouredCircles();

function drawOuterCircle() {
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.stroke();
}

function drawInnerCircles(numCircles) {
  const maxRadius = radius * 0.9;
  radiusDecrement = maxRadius / numCircles;

  for (let i = 0; i < numCircles - 10; i++) {
    ctx.lineWidth = 1;
    if (i % 10 === 0) {
      ctx.lineWidth = 2;
    }

    radius = maxRadius - radiusDecrement * i;

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

function drawThickRadii(numRadii) {
  angleIncrement = (2 * Math.PI) / numRadii;
  radiiRadius = (graphicCanvas.height / 2) * 0.9;

  for (let i = 0.4; i < numRadii; i++) {
    const angle = i * angleIncrement;
    const xEnd = radiiRadius * Math.cos(angle);
    const yEnd = radiiRadius * Math.sin(angle);

    ctx.lineWidth = 1;
    if ((i - 0.4) % 5 === 0) {
      ctx.lineWidth = 2;
    }

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke();
  }
}

function drawColouredCircles() {
  colours = [
    'yellow',
    'orange',
    'crimson',
    'black',
    'navy',
    'darkblue',
    'lightblue',
    'darkblue',
    'black',
    'red',
    'orange',
  ];

  console.log(33 / 8);
  radiusDecrement = radius / colours.length;

  for (let i = 0; i < colours.length; i++) {
    const colourRadius = radius - radiusDecrement * i;
    if (radius > 0) {
      ctx.beginPath();
      ctx.fillStyle = colours[i];
      ctx.arc(0, 0, colourRadius, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
}

const letterCanvasIDs = ['S', 'O', 'LA', 'R', 'I', 'S2'];

const [sCanvas, oCanvas, laCanvas, rCanvas, iCanvas, s2Canvas] =
  letterCanvasIDs.map((id) => document.getElementById(id));

ctx = sCanvas.getContext('2d');

drawS(sCanvas);

function drawS(canvas) {
  canvas.height = canvas.width;
  radius = canvas.height / 2;
  ctx.translate(radius, radius);
  ctx.fillStyle = offWhite;
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fill();

  ctx.lineWidth = 15;
  ctx.strokeStyle = offBlack;

  ctx.moveTo(0, 30);
  ctx.lineTo(-200, 30);
  ctx.stroke();

  ctx.moveTo(0, -30);
  ctx.lineTo(200, -30);
  ctx.stroke();
}

ctx = oCanvas.getContext('2d');

drawO();

function drawO() {
  oCanvas.height = oCanvas.width;
  radius = oCanvas.height / 2;
  ctx.translate(radius, radius);
  ctx.fillStyle = offWhite;
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fill();

  ctx.lineWidth = 15;
  ctx.strokeStyle = offBlack;

  ctx.moveTo(0, 150);
  ctx.lineTo(0, -150);
  ctx.stroke();
}

ctx = rCanvas.getContext('2d');

drawR();

function drawR() {
  rCanvas.height = rCanvas.width;
  ctx.fillStyle = offWhite;

  ctx.beginPath();
  ctx.rect(0, 0, rCanvas.width / 2, rCanvas.height);
  ctx.fill();

  ctx.translate(radius, radius);
  ctx.beginPath();
  ctx.arc(0, 150, radius, 1.5 * Math.PI, 2 * Math.PI);
  ctx.lineTo(0, 150);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(75, -75, rCanvas.height / 4, 1.5 * Math.PI, 0.5 * Math.PI);
  ctx.lineTo(75, 150);
  ctx.fill();

  ctx.beginPath();
  ctx.rect(0, -150, rCanvas.width / 4, rCanvas.height / 2);
  ctx.fill();

  ctx.lineWidth = 15;
  ctx.strokeStyle = offBlack;

  ctx.beginPath();
  ctx.moveTo(0, 150);
  ctx.lineTo(0, -150);
  ctx.stroke();
}

ctx = iCanvas.getContext('2d');
drawI();

function drawI() {
  iCanvas.height = iCanvas.width * 2;
  ctx.fillStyle = offWhite;
  ctx.beginPath();
  ctx.rect(0, 0, iCanvas.width, iCanvas.height);
  ctx.fill();
}

ctx = s2Canvas.getContext('2d');
drawS(s2Canvas);

ctx = laCanvas.getContext('2d');

drawLA(laCanvas);

function drawLA(canvas) {
  canvas.height = canvas.width;
  const { height, width } = canvas;
  ctx.fillStyle = offWhite;

  ctx.beginPath();
  ctx.rect(0, height / 5, width / 3, height / 3);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(
    canvas.width / 3,
    canvas.height / 2,
    canvas.width / 3,
    0.5 * Math.PI,
    Math.PI
  );
  ctx.lineTo(canvas.width / 3, canvas.height / 2);
  ctx.fill();

  ctx.beginPath();
  ctx.rect(
    canvas.width / 3,
    (canvas.height * 5) / 8,
    canvas.width / 3,
    canvas.height / 4.8
  );
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(canvas.width / 3, canvas.height / 1.7);
  ctx.lineTo((canvas.width / 3) * 2, canvas.height / 1.7);
  ctx.lineTo(
    canvas.width / 3 + canvas.width / 3 / 2,
    canvas.height - canvas.height / 1.45
  );
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(
    canvas.width / 1.55 - canvas.width / 8,
    canvas.height - canvas.height / 1.4
  );
  ctx.lineTo(width / 1.42, 0);
  ctx.lineTo(width, height / 1.7);
  ctx.lineTo(canvas.width / 1.42, canvas.height / 1.7);
  ctx.fill();
}
