function Tapa(){

THREE.Object3D.call(this);

this.canon=new THREE.Mesh(new THREE.BoxGeometry(4,4,1));
this.sujetador=new THREE.Mesh(new THREE.BoxGeometry(1,6,1));

this.canon.position.y=0;
this.sujetador.position.y=3;

this.add(this.canon);
this.add(this.sujetador);
}

Tapa.prototype=new THREE.Object3D();

function setup(){
var abajo=new THREE.Mesh(new THREE.BoxGeometry(6,6,1));
var llanta1=new THREE.Mesh(new THREE.CylinderGeometry(2,2,1,10));
var llanta2=new THREE.Mesh(new THREE.CylinderGeometry(2,2,1,10));

arriba=new Tapa();
abajo.position.z=-1;
llanta1.rotation.z=1.57;
llanta2.rotation.z=1.57;
llanta1.position.z=-1;
llanta2.position.z=-1;
llanta1.position.x=-3;
llanta2.position.x=3;
step=.01;
escena=new THREE.Scene();
escena.add(arriba);
escena.add(abajo);
escena.add(llanta1);
escena.add(llanta2);

camara=new THREE.PerspectiveCamera();
camara.position.z=20;
camara.position.x=2;
camara.position.y=5;

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame(loop);
renderer.render(escena,camara);

if(Math.abs(arriba.rotation.z)>.5)
step=-step;

arriba.rotation.z+=step;
}

var escena,camara,renderer;
var step,arriba;

setup();
loop();

