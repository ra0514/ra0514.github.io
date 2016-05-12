function setup(){
THREE.ImageUtils.crossOrigin='';
var textura = THREE.ImageUtils.loadTexture('mosaico.jpg');
var material=new THREE.MeshBasicMaterial({map:textura});
var forma=new THREE.BoxGeometry(1,1,0.5);
malla=new THREE.Mesh(forma,material);
malla.rotation.z=0.75;


escena=new THREE.Scene();
escena.add(malla);

camara=new THREE.PerspectiveCamera();
camara.position.z=5;

camara2 = new THREE.OrthographicCamera( 5 / - 2, 5 / 2, 8 / 2, 8 / - 2, 1, 1000 );
camara2.position.z=5;
camara2.position.x=1;

//5 sobre 8 es ancho contra altura
camara3 = new THREE.PerspectiveCamera( 45, 5 / 8, 1, 1000 );
camara3.position.z=5;
camara3.position.x=1;

escena.add(camara);
escena.add(camara2);
escena.add(camara3);

var teclado = new THREEx.KeyboardState();

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}



function loop(){
requestAnimationFrame(loop);

if (keyboard.pressed("P")) {
renderer.render(escena,camara3);
}
else
{
renderer.render(escena,camara2);
}


}

var camara,camara2,camara3,escena,renderer,malla;
setup();
loop();
