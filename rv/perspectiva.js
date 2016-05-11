function setup(){
THREE.ImageUtils.crossOrigin='';
var textura = THREE.ImageUtils.loadTexture('http://www.clairvision.org/ckb/ckbr/ckbi/fol_0000_0001/cat_0000_0001/imagfile_0000_0000_0000_2000_0000_0000_0220_0085.gif');
var material=new THREE.MeshBasicMaterial({map:textura});
var forma=new THREE.BoxGeometry(10,10,1);
malla=new THREE.Mesh(forma,material);

escena=new THREE.Scene();
escena.add(malla);

camara=new THREE.PerspectiveCamera();
camara.position.z=5;

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame(loop);

malla.rotation.x +=0.01;
malla.rotation.y +=0.01;

renderer.render(escena,camara);
}

var camara,excena,renderer,malla;
setup();
loop();
