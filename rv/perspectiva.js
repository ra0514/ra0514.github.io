function setup(){
THREE.ImageUtils.crossOrigin='';
var textura = THREE.ImageUtils.loadTexture('mosaico.jpg');
var material=new THREE.MeshBasicMaterial({map:textura});
var forma=new THREE.BoxGeometry(1,1,0.1);
malla=new THREE.Mesh(forma,material);

escena=new THREE.Scene();
escena.add(malla);

camara=new THREE.PerspectiveCamera();
camara.position.z=5;

camara2 = new THREE.OrthographicCamera( 5 / - 2, 5 / 2, 5 / 2, 5 / - 2, 1, 1000 );
camara2.position.z=5;
camara2.position.x=5;

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame(loop);
renderer.render(escena,camara2);
}

var camara,camara2,escena,renderer,malla;
setup();
loop();
