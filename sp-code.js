// Put your shader park code inside the spCode function

console.log("Hello I am just a noisy boi");

export function spCode() {
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(fxrand()* (max - min + 1) + min)
  }
  
  let scale = randomIntFromInterval(2.0, 4.0);
  let a = randomIntFromInterval(0, 3.0);
  let b = randomIntFromInterval(0, 5.0);
  let e = randomIntFromInterval(0, 5.0);
  let f = randomIntFromInterval(0.0, 5.0);
  let g = randomIntFromInterval(1.0, 1.2);
  let h = randomIntFromInterval(1.2, 2.5);
  
  let red = randomIntFromInterval(0.5, 2.0);
  let green = randomIntFromInterval(0.5, 2.3);
  let blue = randomIntFromInterval(0.5, 5.5);
  
  let wings = shape(() => {
    let s = getSpace();
    let r = getRayDirection();
    let n = noise(noise(s*scale+vec3(0, 9.0,time*b)));
    let nn = noise(s*scale+vec3(0, 9.0,b));
    setStepSize(.2);
  
    rotateX(PI/2 + (sin(a + time)) + a);
  
    color(vec3(nn)+vec3(red, green, blue)* fresnel(h));
    box(vec3(f+time, f+time, .2));
  
    mirrorN(g, 0.3);
    mixGeo(0.2);

    rotateZ(r.x * e);
    torus(.4+.1*nn, .1);
  });
  
  wings();
}



