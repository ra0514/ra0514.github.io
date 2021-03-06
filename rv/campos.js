function setup(){
//Escenario
THREE.ImageUtils.crossOrigin='';
var textura = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/brick_diffuse.jpg');

//la habitacion  
cubo1=new THREE.Mesh(new THREE.BoxGeometry(0.5,80,3),new THREE.MeshBasicMaterial({map:textura}));
cubo2=new THREE.Mesh(new THREE.BoxGeometry(0.5,80,3),new THREE.MeshBasicMaterial({map:textura}));
cubo3=new THREE.Mesh(new THREE.BoxGeometry(80,0.5,3),new  THREE.MeshBasicMaterial({map:textura}));
cubo4=new THREE.Mesh(new THREE.BoxGeometry(80,0.5,3),new  THREE.MeshBasicMaterial({map:textura}));


//los obstaculos
pared1= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared2= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared3= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared4= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared5= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));


cubo1.position.x=37;
cubo2.position.x=-37;
cubo3.position.y=-37;
cubo4.position.y=37;

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

pelota.position.x=0;
pelota.position.y=-22;

pelota.scale.x=0.3;
pelota.scale.z=0.3;
pelota.scale.y=0.3;


//+++++++++++++++++++++++++++++
camara=new THREE.PerspectiveCamera();
camara.position.z=80;

raycaster1=new THREE.Raycaster(pelota.position,new THREE.Vector3(1,0,0));
raycaster2=new THREE.Raycaster(pelota.position,new THREE.Vector3(-1,0,0));
raycaster3=new THREE.Raycaster(pelota.position,new THREE.Vector3(0,1,0));
raycaster4=new THREE.Raycaster(pelota.position,new THREE.Vector3(0,-1,0));


//Creo la luz conica-----
var luzconica = new THREE.SpotLight( 0xffffff );
pelota.add(luzconica);
luzconica.position.set(0,5,1);
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

//seleccionar objetivo
//OBJETIVOX=-20;
//OBJETIVOY=20;
OBJETIVOX=10;
OBJETIVOY=20;

stepy=0.2;
stepx=0.2;
c1=0;
c2=0;
c3=0;
c4=0;
c5=0;
a1=0;
a2=0;
a3=0;
a4=0;
a5=0;
b1=0;
b2=0;
b3=0;
b4=0;
b5=0;
ajuste=0;
}

function loop(){
//todos los posibles obstaculos
obstaculo1D=raycaster1.intersectObject(pared1);
obstaculo1I=raycaster2.intersectObject(pared1);
obstaculo1U=raycaster3.intersectObject(pared1);
obstaculo1DD=raycaster4.intersectObject(pared1);

obstaculo2D=raycaster1.intersectObject(pared2);
obstaculo2I=raycaster2.intersectObject(pared2);
obstaculo2U=raycaster3.intersectObject(pared2);
obstaculo2DD=raycaster4.intersectObject(pared2);

obstaculo3D=raycaster1.intersectObject(pared3);
obstaculo3I=raycaster2.intersectObject(pared3);
obstaculo3U=raycaster3.intersectObject(pared3);
obstaculo3DD=raycaster4.intersectObject(pared3);

obstaculo4D=raycaster1.intersectObject(pared4);
obstaculo4I=raycaster2.intersectObject(pared4);
obstaculo4U=raycaster3.intersectObject(pared4);
obstaculo4DD=raycaster4.intersectObject(pared4);

obstaculo5D=raycaster1.intersectObject(pared5);
obstaculo5I=raycaster2.intersectObject(pared5);
obstaculo5U=raycaster3.intersectObject(pared5);
obstaculo5DD=raycaster4.intersectObject(pared5);

//iluminar cubos
if((obstaculo1D.length>0 && (obstaculo1D[0].distance<=5))||(obstaculo1I.length>0 && (obstaculo1I[0].distance<=5))||(obstaculo1U.length>0 && (obstaculo1U[0].distance<=5))||(obstaculo1DD.length>0 && (obstaculo1DD[0].distance<=5)))
{
pared1.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
c1=1;
};
if((obstaculo2D.length>0 && (obstaculo2D[0].distance<=5))||(obstaculo2I.length>0 && (obstaculo2I[0].distance<=5))||(obstaculo2U.length>0 && (obstaculo2U[0].distance<=5))||(obstaculo2DD.length>0 && (obstaculo2DD[0].distance<=5)))
{
pared2.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
c2=1;
};
if((obstaculo3D.length>0 && (obstaculo3D[0].distance<=5))||(obstaculo3I.length>0 && (obstaculo3I[0].distance<=5))||(obstaculo3U.length>0 && (obstaculo3U[0].distance<=5))||(obstaculo3DD.length>0 && (obstaculo3DD[0].distance<=5)))
{
c3=1;
pared3.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
};
if((obstaculo4D.length>0 && (obstaculo4D[0].distance<=5))||(obstaculo4I.length>0 && (obstaculo4I[0].distance<=5))||(obstaculo4U.length>0 && (obstaculo4U[0].distance<=5))||(obstaculo4DD.length>0 && (obstaculo4DD[0].distance<=5)))
{
c4=1;
pared4.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
};
if((obstaculo5D.length>0 && (obstaculo5D[0].distance<=5))||(obstaculo5I.length>0 && (obstaculo5I[0].distance<=5))||(obstaculo5U.length>0 && (obstaculo5U[0].distance<=5))||(obstaculo5DD.length>0 && (obstaculo5DD[0].distance<=5)))
{
c5=1;
pared5.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
};

//campos de obstaculos
if((((pared1.position.y-pelota.position.y)*(pared1.position.y-pelota.position.y))>3)&&(((pared1.position.x-pelota.position.x)*(pared1.position.x-pelota.position.x))>2))
{
a1=(pared1.position.y-pelota.position.y)/((pared1.position.y-pelota.position.y)*(pared1.position.y-pelota.position.y));
b1=(pared1.position.x-pelota.position.x)/((pared1.position.x-pelota.position.x)*(pared1.position.x-pelota.position.x));
};

if((((pared2.position.y-pelota.position.y)*(pared2.position.y-pelota.position.y))>3)&&(((pared2.position.x-pelota.position.x)*(pared2.position.x-pelota.position.x))>2))
{
a2=(pared2.position.y-pelota.position.y)/((pared2.position.y-pelota.position.y)*(pared2.position.y-pelota.position.y));
b2=(pared2.position.x-pelota.position.x)/((pared2.position.x-pelota.position.x)*(pared2.position.x-pelota.position.x));
};

if((((pared3.position.y-pelota.position.y)*(pared3.position.y-pelota.position.y))>3)&&(((pared3.position.x-pelota.position.x)*(pared3.position.x-pelota.position.x))>2))
{
a3=(pared3.position.y-pelota.position.y)/((pared3.position.y-pelota.position.y)*(pared3.position.y-pelota.position.y));
b3=(pared3.position.x-pelota.position.x)/((pared3.position.x-pelota.position.x)*(pared3.position.x-pelota.position.x));
};

if((((pared4.position.y-pelota.position.y)*(pared4.position.y-pelota.position.y))>4)&&(((pared4.position.x-pelota.position.x)*(pared4.position.x-pelota.position.x))>2))
{
a4=(pared4.position.y-pelota.position.y)/((pared4.position.y-pelota.position.y)*(pared4.position.y-pelota.position.y));
b4=(pared4.position.x-pelota.position.x)/((pared4.position.x-pelota.position.x)*(pared4.position.x-pelota.position.x));
};

if((((pared5.position.y-pelota.position.y)*(pared5.position.y-pelota.position.y))>5)&&(((pared5.position.x-pelota.position.x)*(pared5.position.x-pelota.position.x))>2))
{
a5=(pared5.position.y-pelota.position.y)/((pared5.position.y-pelota.position.y)*(pared5.position.y-pelota.position.y));
b5=(pared5.position.x-pelota.position.x)/((pared5.position.x-pelota.position.x)*(pared5.position.x-pelota.position.x));
};

if(((pared1.position.y-pelota.position.y)*(pared1.position.y-pelota.position.y))>4)
b1=0;
if(((pared2.position.y-pelota.position.y)*(pared2.position.y-pelota.position.y))>4)
b2=0;
if(((pared3.position.y-pelota.position.y)*(pared3.position.y-pelota.position.y))>4)
b3=0;
if(((pared4.position.y-pelota.position.y)*(pared4.position.y-pelota.position.y))>4)
b4=0;
if(((pared5.position.y-pelota.position.y)*(pared5.position.y-pelota.position.y))>4)
b5=0;

if(((pared1.position.x-pelota.position.x)*(pared1.position.x-pelota.position.x))>4)
a1=0;
if(((pared2.position.x-pelota.position.x)*(pared2.position.x-pelota.position.x))>4)
a2=0;
if(((pared3.position.x-pelota.position.x)*(pared3.position.x-pelota.position.x))>4)
a3=0;
if(((pared4.position.x-pelota.position.x)*(pared4.position.x-pelota.position.x))>4)
a4=0;
if(((pared5.position.x-pelota.position.x)*(pared5.position.x-pelota.position.x))>4)
a5=0;

stepy=((OBJETIVOY-pelota.position.y)/100)-(c1*a1)-(c2*a2)-(c3*a3)-(c4*a4)-(c5*a5);
stepx=((OBJETIVOX-pelota.position.x)/100)-(c1*b1)-(c2*b2)-(c3*b3)-(c4*b4)-(c5*b5);

if((((OBJETIVOY-pelota.position.y)*(OBJETIVOY-pelota.position.y))<2)&&(((OBJETIVOY-pelota.position.y)*(OBJETIVOY-pelota.position.y))<2))
pelota.material= new  THREE.MeshBasicMaterial({color:'#0000ff'});

pelota.position.y +=stepy;
pelota.position.x +=stepx;

if(stepx<0)
ajuste=1;

pelota.rotation.z=Math.atan(stepy/stepx)-1.57+(3.14*ajuste);

ajuste=0;

//sensores
raycaster1.set(pelota.position,new THREE.Vector3(1,0,0));
raycaster2.set(pelota.position,new THREE.Vector3(-1,0,0));
raycaster3.set(pelota.position,new THREE.Vector3(0,1,0));
raycaster4.set(pelota.position,new THREE.Vector3(0,-1,0));

renderer.render(escena,camara);
requestAnimationFrame(loop);
}

var pared1,pared2,pared3,pared4,pared5,cubo1,cubo2,cubo3,cubo4,pelota,escena,camara,renderer;
var raycaster1,raycaster2,raycaster3,raycaster4,step;

var obstaculo1D,obstaculo1I,obstaculo1U,obstaculo1DD;
var obstaculo2D,obstaculo2I,obstaculo2U,obstaculo2DD;
var obstaculo3D,obstaculo3I,obstaculo3U,obstaculo3DD;
var obstaculo4D,obstaculo4I,obstaculo4U,obstaculo4DD;
var obstaculo5D,obstaculo5I,obstaculo5U,obstaculo5DD;

var luzconica;

setup();
loop();
