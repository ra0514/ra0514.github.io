function setup(){
THREE.ImageUtils.crossOrigin='';
//var textura = THREE.ImageUtils.loadTexture('http://previews.123rf.com/images/innkey/innkey1302/innkey130200085/18089093-Textura-transparente-lineal-con-la-mano-las-hojas-sin-fin-ornamental-elaborado-plantilla-patr-n-negr-Foto-de-archivo.jpg');
var textura = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/brick_diffuse.jpg');
var forma=new THREE.CylinderGeometry(1,1,2);
var material=new THREE.MeshLambertMaterial({map:textura,reflectivity:0});
malla=new THREE.Mesh(forma,material);

malla.position.y=2;

malla.material.transparent=true;

var base=new THREE.Mesh(new THREE.BoxGeometry(5,.1,5),new THREE.MeshLambertMaterial({color:'#00cc00'}));
var muro1=new THREE.Mesh(new THREE.BoxGeometry(5,5,.1),new THREE.MeshLambertMaterial({color:'#cccc00'}));
var muro2=new THREE.Mesh(new THREE.BoxGeometry(.1,5,5),new THREE.MeshLambertMaterial({color:'#00cccc'}));

muro1.position.z=-2.5;
muro2.position.x=-2.5;
muro1.position.y=2.5;
muro2.position.y=2.5;

var luzPuntual=new THREE.PointLight(0xFFFFFF);
luzPuntual.position.y=2;
luzPuntual.position.z=2.5;

escena=new THREE.Scene();
escena.add(malla);
escena.add(base);
escena.add(muro1);
escena.add(muro2);
escena.add(luzPuntual);

camara=new THREE.PerspectiveCamera();
camara.position.z=15;
camara.position.y=5;

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);


renderer.shadowMapEnabled=true;
malla.castShadow=true;
//base.receiveShadow=true;
muro1.receiveShadow=true;
//muro2.receiveShadow=true;
luzPuntual.castShadow=true;
}

function loop(){
requestAnimationFrame(loop);

malla.rotation.y+=0.01;

renderer.render(escena,camara);
}

var camara,escena,renderer,malla;

setup();
loop();
