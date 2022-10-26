// Put your shader park code inside the spCode function

export function spCode() {
    rotateX(PI/2 + sin(time));
    sphere(0.2);
    box(vec3(.5, .5, .2));
    //difference();
    //intersect();
    mixGeo(cos(time) + 0.4);
    displace(0, 0, 0);

      //displace(xPosition, yPosition, zPositio
    metal(0.4);
    torus(.4, .1);
  
  sphere(.1);
}

// Hola

//hiiii
