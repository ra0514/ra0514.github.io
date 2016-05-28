function setup(){
//Escenario
THREE.ImageUtils.crossOrigin='';
var textura = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/brick_diffuse.jpg');

//la habitacion  
cubo1=new THREE.Mesh(new THREE.BoxGeometry(0.5,60,3),new THREE.MeshBasicMaterial({map:textura}));
cubo2=new THREE.Mesh(new THREE.BoxGeometry(0.5,60,3),new THREE.MeshBasicMaterial({map:textura}));
cubo3=new THREE.Mesh(new THREE.BoxGeometry(60,0.5,3),new  THREE.MeshBasicMaterial({map:textura}));
cubo4=new THREE.Mesh(new THREE.BoxGeometry(60,0.5,3),new  THREE.MeshBasicMaterial({map:textura}));


//los obstaculos
pared1= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared2= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared3= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared4= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared5= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));


cubo1.position.x=27;
cubo2.position.x=-27;
cubo3.position.y=-27;
cubo4.position.y=27;

pared1.position.x=-15;
pared1.position.y=-10;
pared2.position.x=-15;
pared2.position.y=10;
pared3.position.x=0;
pared3.position.y=0;
pared4.position.x=15;
pared4.position.y=10;
pared5.position.x=15;
pared5.position.y=-20;


//+++++++++++++++++++++++
//MOVIL////
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


//igualar al programa anterior
pelota=new THREE.Mesh(forma,new THREE.MeshNormalMaterial());

pelota.position.x=-22;
pelota.position.y=-22;

pelota.scale.x=0.5;
pelota.scale.z=0.5;
pelota.scale.y=0.5;


//+++++++++++++++++++++++++++++
camara=new THREE.PerspectiveCamera();
camara.position.z=60;

raycaster1=new THREE.Raycaster(pelota.position,new THREE.Vector3(1,0,0));
raycaster2=new THREE.Raycaster(pelota.position,new THREE.Vector3(-1,0,0));
raycaster3=new THREE.Raycaster(pelota.position,new THREE.Vector3(0,1,0));
raycaster4=new THREE.Raycaster(pelota.position,new THREE.Vector3(0,-1,0));

//Creo la luz conica-----
var luzconica = new THREE.SpotLight( 0xffffff );
pelota.add(luzconica);
luzconica.position.set(0,5,0);
luzconica.target = pelota;
luzconica.intensity = 1;
//------------

escena=new THREE.Scene();
escena.add(cubo1);
escena.add(cubo2);
escena.add(cubo3);
escena.add(cubo4);
escena.add(pared1);
escena.add(pared2);
escena.add(pared3);
escena.add(pared4);
escena.add(pared5);
escena.add(pelota);
escena.add(camara);
escena.add(luzconica)

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
stepy=0.2;
stepx=0;
}

function loop(){
renderer.render(escena,camara);
requestAnimationFrame(loop);
}

var pared1,pared2,pared3,pared4,pared5,cubo1,cubo2,cubo3,cubo4,pelota,escena,camara,renderer;
var raycaster1,raycaster2,raycaster3,raycaster4,step;
var obstaculo1,obstaculo2,obstaculo3,obstaculo4;
var luzconica;

setup();
loop();
