var keyboard = new THREEx.KeyboardState();

function setup(){
THREE.ImageUtils.crossOrigin='';
//var textura = THREE.ImageUtils.loadTexture('mosaico.jpg');
var textura = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/crate.gif');
var material=new THREE.MeshBasicMaterial({map:textura});
var forma=new THREE.BoxGeometry(1,1,1);
malla=new THREE.Mesh(forma,material);
malla.rotation.z=0.75;


escena=new THREE.Scene();
escena.add(malla);

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
renderer.render(escena,camara);
}
requestAnimationFrame(loop);

}

var camara,camara2,camara3,escena,renderer,malla;
setup();
loop();
