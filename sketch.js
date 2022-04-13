points = []
let size
let xInp, yInp

function setup(){
  size = 800
  createCanvas(size, size)

  xInp = createInput('');
  xInp.position(10, size + 10);
  xInp.size(100);
  xInp.input(myInputEvent);
  
  yInp = createInput('');
  yInp.position(120, size + 10);
  yInp.size(100);
  yInp.input(myInputEvent);

  button = createButton('Generate point');
  button.position(240, size + 10);
  button.mousePressed(generate);
  
  button2 = createButton('Generate random point');
  button2.position(360, size + 10);
  button2.mousePressed(generateRandom);


}

function draw(){
  background(0)
  stroke(30)
  line(0,0,width,height)
  for(let i=0; i<points.length; i++){
    stroke(255)
    fill(255)
    if(points[i].x > points[i].y){
      noFill()
    }
    ellipse(points[i].x, points[i].y, 10, 10)
  }
}

function generate() {
  let x = xInp.value()
  let y = yInp.value()
  if(!isNaN(x)) x = parseInt(x)
  else document.getElementById("tex").innerHTML = "Please enter a number"
  if(!isNaN(y)) y = parseInt(y)
  document.getElementById("tex").innerHTML = "Please enter a number"
  if(x > 0 && x < size && y > 0 && y < size){
    document.getElementById("tex").innerHTML = "Generated Point!"
    points.push(new point(x,y))
  }
  else
    document.getElementById("tex").innerHTML = "Your number must be between 0 and 800"

  
}

function generateRandom(){
  points.push(new point(random(0,800),random(0,800)))
}

function myInputEvent(){
  //a
}


class point{
  constructor(p1,p2){
    this.set(p1,p2)
  }
  set(p1,p2){
    this.x = p1
    this.y = p2
  }
}