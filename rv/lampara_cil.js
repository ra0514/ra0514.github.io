function setup(){
var forma=new THREE.CylinderGeometry(1,1,2);
var material=new THREE.MeshLambertMaterial({color:'#0000cc'});
malla=new THREE.Mesh(forma,material);

malla.position.y+=2;

var base=new THREE.Mesh(new THREE.BoxGeometry(5,.1,5),new THREE.MeshLambertMaterial({color:'#00cc00'}));
var muro1=new THREE.Mesh(new THREE.BoxGeometry(5,5,.1),new THREE.MeshLambertMaterial({color:'#cccc00'}));
var muro2=new THREE.Mesh(new THREE.BoxGeometry(.1,5,5),new THREE.MeshLambertMaterial({color:'#00cccc'}));

muro1.position.z=2.5;
muro2.position.x=-2.5;

var iluminacion=new THREE.AmbientLight(0xFFFFFF);


var luzPuntual=new THREE.PointLight(0xcc00cc);
luzPuntual.position.x=10;
luzPuntual.position.y=10;
luzPuntual.position.z=10;

escena=new THREE.Scene();
escena.add(malla);
escena.add(base);
escena.add(muro1);
escena.add(muro2);
escena.add(iluminacion);

camara=new THREE.PerspectiveCamera();
camara.position.z=15;
camara.position.y=5;

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame(loop);

malla.rotation.y+=0.01;

renderer.render(escena,camara);
}

var camara,escena,renderer,malla;

setup();
loop();
