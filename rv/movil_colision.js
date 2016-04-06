function setup(){

//cuarto
pared1=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshNormalMaterial());
pared2=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshNormalMaterial());
pared3=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshNormalMaterial());
pared4=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshNormalMaterial());

pared1.position.y=30;
pared2.position.y=-30;
pared3.position.x=30;
pared4.position.x=-30;


var canon=new THREE.Mesh(new THREE.BoxGeometry(4,4,1));
var sujetador=new THREE.Mesh(new THREE.BoxGeometry(1,6,1));

var abajo=new THREE.Mesh(new THREE.BoxGeometry(6,6,1));
var llanta1=new THREE.Mesh(new THREE.CylinderGeometry(2,2,1,10));
var llanta2=new THREE.Mesh(new THREE.CylinderGeometry(2,2,1,10));

canon.position.y=0;
sujetador.position.y=3;

abajo.position.z=-1;
llanta1.rotation.z=1.57;
llanta2.rotation.z=1.57;
llanta1.position.z=-1;
llanta2.position.z=-1;
llanta1.position.x=-3.5;
llanta2.position.x=3.5;

var forma=new THREE.Geometry();

THREE.GeometryUtils.merge(forma,canon);
THREE.GeometryUtils.merge(forma,sujetador);
THREE.GeometryUtils.merge(forma,abajo);
THREE.GeometryUtils.merge(forma,llanta1);
THREE.GeometryUtils.merge(forma,llanta2);

malla=new THREE.Mesh(forma);

escena=new THREE.Scene();
escena.add(malla);

//agregar cuarto
escena.add(pared1);
escena.add(pared2);
escena.add(pared3);
escena.add(pared4);

camara=new THREE.PerspectiveCamera();
camara.position.z=80;
camara.position.x=2;
camara.position.y=5;

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame(loop);

renderer.render(escena,camara);
}

var escena,camara,renderer;
var malla;

setup();
loop();
