var keyboard = new THREEx.KeyboardState();

function setup(){
THREE.ImageUtils.crossOrigin='';
var textura = THREE.ImageUtils.loadTexture('mosaico.jpg');
//var textura = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/crate.gif');
var material=new THREE.MeshBasicMaterial({map:textura});
var forma=new THREE.BoxGeometry(2,2,0.5);
malla=new THREE.Mesh(forma,material);
malla.rotation.z=0.75;
malla.rotation.x=-0.4;

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

var formac=new THREE.Geometry();

THREE.GeometryUtils.merge(formac,canon);
THREE.GeometryUtils.merge(formac,sujetador);
THREE.GeometryUtils.merge(formac,abajo);
THREE.GeometryUtils.merge(formac,llanta1);
THREE.GeometryUtils.merge(formac,llanta2);

mallat=new THREE.Mesh(formac);
mallat.position.z=1;
mallat.rotation.z=0.75;
mallat.rotation.x=-0.4;
mallat.scale.set( 0.1, 0.1, 0.1 );

escena=new THREE.Scene();
escena.add(malla);
escena.add(mallat);
camara=new THREE.PerspectiveCamera();
camara.position.z=5;

//5 ancho 8 altura
camara2 = new THREE.OrthographicCamera( 8 / - 2, 8 / 2, 5 / 2, 5 / - 2, 1, 1000 );
camara2.position.z=5;
camara2.position.x=1;

//5 sobre 8 es ancho contra altura
//camara3 = new THREE.PerspectiveCamera( 45, 5 / 8, 1, 1000 );
camara3 = new THREE.PerspectiveCamera( 30, 5 / 8, 1, 1000 );
camara3.position.z=10;

escena.add(camara);
escena.add(camara2);
escena.add(camara3);

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}



function loop(){


if (keyboard.pressed("P")) {
renderer.render(escena,camara3);
}
else
{
renderer.render(escena,camara2);
}
requestAnimationFrame(loop);

}

var camara,camara2,camara3,escena,renderer,malla,mallat;
setup();
loop();
