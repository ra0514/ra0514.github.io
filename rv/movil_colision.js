function setup(){
cubo1=new THREE.Mesh(new THREE.BoxGeometry(1,40,10),new THREE.MeshNormalMaterial());
cubo2=new THREE.Mesh(new THREE.BoxGeometry(1,40,10),new THREE.MeshNormalMaterial());

cubo3=new THREE.Mesh(new THREE.BoxGeometry(50,1,10),new THREE.MeshNormalMaterial());
cubo4=new THREE.Mesh(new THREE.BoxGeometry(40,1,10),new THREE.MeshNormalMaterial());

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

pelota=new THREE.Mesh(forma,new THREE.MeshNormalMaterial());

cubo1.position.x=20;
cubo2.position.x=-20;

cubo3.position.y=20;
cubo4.position.y=-20;

camara=new THREE.PerspectiveCamera();
camara.position.z=60;

raycaster1=new THREE.Raycaster(pelota.position,new THREE.Vector3(1,0,0));
raycaster2=new THREE.Raycaster(pelota.position,new THREE.Vector3(-1,0,0));
raycaster3=new THREE.Raycaster(pelota.position,new THREE.Vector3(0,1,0));
raycaster4=new THREE.Raycaster(pelota.position,new THREE.Vector3(0,-1,0));

escena=new THREE.Scene();
escena.add(cubo1);
escena.add(cubo2);
escena.add(cubo3);
escena.add(cubo4);
escena.add(pelota);
escena.add(camara);

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
stepx=0.2;
stepy=0;
}

function loop(){

obstaculo1=raycaster1.intersectObject(cubo1);
obstaculo2=raycaster2.intersectObject(cubo2);
obstaculo3=raycaster3.intersectObject(cubo3);
obstaculo4=raycaster4.intersectObject(cubo4);

if((obstaculo3.length>0 && (obstaculo3[0].distance<=10)))
{stepy=0;
pelota.rotation.z=-1.57;
stepx=0.2;
};

if((obstaculo1.length>0 && (obstaculo1[0].distance<=10)))
{stepy=-0.2;
pelota.rotation.z=-3.14;
stepx=0;
};

if((obstaculo4.length>0 && (obstaculo4[0].distance<=10)))
{stepy=0;
pelota.rotation.z=1.57;
stepx=-0.2;
};

if((obstaculo2.length>0 && (obstaculo2[0].distance<=10)))
{stepy=0.2;
pelota.rotation.z=0;
stepx=0;
};

pelota.position.y +=stepy;
pelota.position.x +=stepx;

raycaster1.set(pelota.position,new THREE.Vector3(1,0,0));
raycaster2.set(pelota.position,new THREE.Vector3(-1,0,0));
raycaster3.set(pelota.position,new THREE.Vector3(0,1,0));
raycaster4.set(pelota.position,new THREE.Vector3(0,-1,0));

renderer.render(escena,camara);
requestAnimationFrame(loop);
}

var cubo1,cubo2,cubo3,cubo4,pelota,escena,camara,renderer;
var raycaster1,raycaster2,raycaster3,raycaster4,step;
var obstaculo1,obstaculo2,obstaculo3,obstaculo4;

setup();
loop();
