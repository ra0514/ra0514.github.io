function setup(){
var uno=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color: 0xff0000}));
var dos=new THREE.Mesh(new THREE.BoxGeometry(2,1,1),new THREE.MeshBasicMaterial({color: 0x00ff00}));
var tres=new THREE.Mesh(new THREE.BoxGeometry(2,1,1),new THREE.MeshBasicMaterial({color: 0x0000ff}));
var posiciones = [0,1,2,3];

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
renderer.render(escena,camara);

uno.position.y=posiciones[3];

}

var escena,camara,renderer;
var incremento;
var uno,dos,tres;

setup();
loop();
