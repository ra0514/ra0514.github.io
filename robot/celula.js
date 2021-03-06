function setup(){
uno=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color: 0xff0000}));
dos=new THREE.Mesh(new THREE.BoxGeometry(2,1,1),new THREE.MeshBasicMaterial({color: 0x00ff00}));
tres=new THREE.Mesh(new THREE.BoxGeometry(2,1,1),new THREE.MeshBasicMaterial({color: 0x0000ff}));
posiciones = [0,1,2,3];

dos.position.y=1;
tres.position.y=1;
tres.position.x=2;

escena=new THREE.Scene();
escena.add(uno);
escena.add(dos);
escena.add(tres);

camara=new THREE.PerspectiveCamera();
camara.position.z=30;
camara.position.x=5;
camara.position.y=5;

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame(loop);

//uno.rotation+=0.01;
uno.position.y=posiciones[3];

renderer.render(escena,camara);
}

var escena,camara,renderer;
var incremento;

setup();
loop();
