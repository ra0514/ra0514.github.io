function setup(){

//cuarto
pared1=new THREE.Mesh(new THREE.BoxGeometry(60,1,10),new THREE.MeshNormalMaterial());
pared2=new THREE.Mesh(new THREE.BoxGeometry(60,1,10),new THREE.MeshNormalMaterial());
pared3=new THREE.Mesh(new THREE.BoxGeometry(1,60,10),new THREE.MeshNormalMaterial());
pared4=new THREE.Mesh(new THREE.BoxGeometry(1,60,10),new THREE.MeshNormalMaterial());

pared1.position.y=30;
pared2.position.y=-30;
pared3.position.x=30;
pared4.position.x=-30;
pared1.position.z=-5;
pared2.position.z=-5;
pared3.position.z=-5;
pared4.position.z=-5;

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

malla=new THREE.Mesh(forma,new THREE.MeshNormalMaterial());

raycaster3=new THREE.Raycaster(malla.position,new THREE.Vector3(1,0,0));
raycaster4=new THREE.Raycaster(malla.position,new THREE.Vector3(-1,0,0));
raycaster1=new THREE.Raycaster(malla.position,new THREE.Vector3(0,1,0));
raycaster2=new THREE.Raycaster(malla.position,new THREE.Vector3(0,-1,0));

escena=new THREE.Scene();
escena.add(malla);

//agregar cuarto
escena.add(pared1);
escena.add(pared2);
escena.add(pared3);
escena.add(pared4);

escena.add(camara);

camara=new THREE.PerspectiveCamera();
camara.position.z=80;

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
step=0.5;
}



function loop(){
obstaculo1=raycaster1.intersectObject(pared1);
obstaculo2=raycaster2.intersectObject(pared2);
obstaculo3=raycaster3.intersectObject(pared3);
obstaculo4=raycaster4.intersectObject(pared4);
  
if((obstaculo1.length>0 && (obstaculo1[0].distance<=0.5))||(obstaculo2.length>0 && (obstaculo2[0].distance<=0.5))||(obstaculo3.length>0 && (obstaculo3[0].distance<=0.5))||(obstaculo4.length>0 && (obstaculo4[0].distance<=0.5)))
step=-step;
malla.position.x +=step;


raycaster1.set(malla.position,new THREE.Vector3(1,0,0));
raycaster2.set(malla.position,new THREE.Vector3(-1,0,0));
raycaster3.set(malla.position,new THREE.Vector3(0,1,0));
raycaster4.set(malla.position,new THREE.Vector3(0,-1,0));
  
  
renderer.render(escena,camara);
requestAnimationFrame(loop);
}

var escena,camara,renderer;
var malla,pared1,pared2,pared3,pared4;
var raycaster1,raycaster2,raycaster3,raycaster4,step;
var obstaculo1,obstaculo2,obstaculo3,obstaculo4;


setup();
loop();
