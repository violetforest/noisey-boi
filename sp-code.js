// Put your shader park code inside the spCode function

export function spCode() {
    let waves = shape(() => {
    let scale = input(1., 0.0, 10.);
    let s = getSpace();
    let n = (fractalNoise(s*scale+vec3(0,0,time)) + fractalNoise(s*scale+vec3(0,0,time)));
    let r = getRayDirection();
  
    color(s * vec3(n) * normal + fresnel(3.7));
    rotateX(PI/2 + sin(time));
    sphere(0.2);
  
  
    //intersect();
    box(vec3(.5, .5, .2));
    //difference();
    ///intersect();
    mixGeo(0.4);
    displace(0, 0, 0);

    rotateZ(r.x*15+time*.5);
    rotateY(r.y*15+time*.5);
  
    //displace(xPosition, yPosition, zPosition)
    shine(noise(s*5)*.8+.2);
    metal(noise(s*5)*.8+.2);
  
    torus(.4, .1)
   
  });
  waves();}

// Hola

//hiiii



