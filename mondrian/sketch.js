function setup() {
  createCanvas(960, 600);
}
function draw() {
  background(160);
  for(let i = 1; i <= 180; i++) {
    h = random(-10, 950);
    hh = random(5, 550);
    v = random(30, 80);
    vv = random(30, 80);
    strokeWeight(0);
    if (hh>510 || hh<90) al = 130;
    else al = 255;
    if (i < 41 || i > 159)
      fill(250,60,90,al);
    else if (i < 81 || i > 139)
      fill(60,90,250,al);
    else
      fill(255,200,0,al);
    rect(h, hh, v, vv);
    stroke(0, al);
    strokeWeight(random(5,8));
    line(h+random(-30,30), hh, h+v+random(-30,30), hh);
    line(h, hh+random(-30,30), h, hh+vv+random(-30,30));
    line(h+random(-30,30), hh+vv, h+v+random(-30,30), hh+vv);
    line(h+v, hh+random(-30,30), h+v, hh+vv+random(-30,30));
  } 
    noLoop();
}