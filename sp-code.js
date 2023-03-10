// Put your shader park code inside the spCode function

console.log("Hello I am just a noisy boi");
alert("Hello I'm just a noisey boi");

export function spCode() {
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(fxrand()* (max - min + 1) + min)
  }
  
  let scale = randomIntFromInterval(2.0, 5.0);
  let a = randomIntFromInterval(0, 3.0);
  let b = randomIntFromInterval(0, 5.0);
  let e = randomIntFromInterval(0, 5.0);
  let f = randomIntFromInterval(0.0, 5.0);
  let g = randomIntFromInterval(1.0, 1.5);
  let h = randomIntFromInterval(1.2, 2.5);
  
  let red = randomIntFromInterval(0.5, 3.5);
  let green = randomIntFromInterval(0.5, 2.3);
  let blue = randomIntFromInterval(0.5, 5.5);
  
  let wings = shape(() => {
    let s = getSpace();
    let r = getRayDirection();
    let n = noise(s*scale+vec3(2.0,5.9,time*0.1) + noise(s*scale+vec3(0, r.x+9.0,time*b)));
    setStepSize(.2);
  
    rotateX(PI/2 + sin(r.x * sin(a + time)) + a * r.x);
  
    color(vec3(n)+vec3(red, green + r.x, blue)*0.1 * r.y+ fresnel(h + r.x));
    box(vec3(f+time, f+time, .2));
  
    mirrorN(g, 0.3);
    mixGeo(0.2);

    rotateZ(r.x * e);
    shine(noise(s*5)*.8+.2);
    torus(.4+.1*n, .1);
  });
  
  wings();
}