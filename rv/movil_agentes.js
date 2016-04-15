function Pelota(x=0,y=0){

//var canon=new THREE.Mesh(new THREE.BoxGeometry(4,4,1));
//var sujetador=new THREE.Mesh(new THREE.BoxGeometry(1,6,1));
var abajo=new THREE.Mesh(new THREE.BoxGeometry(6,6,1));
var llanta1=new THREE.Mesh(new THREE.CylinderGeometry(2,2,1,10));
var llanta2=new THREE.Mesh(new THREE.CylinderGeometry(2,2,1,10));

//canon.position.y=0;
//sujetador.position.y=3;
//abajo.position.z=-1;
llanta1.rotation.z=1.57;
llanta2.rotation.z=1.57;
//llanta1.position.z=-1;
//llanta2.position.z=-1;
llanta1.position.x=-3.5;
llanta2.position.x=3.5;

var forma=new THREE.Geometry();
//THREE.GeometryUtils.merge(forma,canon);
//THREE.GeometryUtils.merge(forma,sujetador);
THREE.GeometryUtils.merge(forma,abajo);
THREE.GeometryUtils.merge(forma,llanta1);
THREE.GeometryUtils.merge(forma,llanta2);

Agent.call(this,x,y);
this.add(new THREE.Mesh(forma,new THREE.MeshNormalMaterial()));
this.stepx=0.1;
this.stepy=0;
this.colision=0;
this.sensor=new THREE.Raycaster(this.position,new THREE.Vector3(1,0,0));
this.sensor2=new THREE.Raycaster(this.position,new THREE.Vector3(0,1,0));
}

Pelota.prototype =new Agent();
Pelota.prototype.sense=function(enviroment){
  this.sensor.set(this.position,new THREE.Vector3(1,0,0));
  var obstaculo1=this.sensor.intersectObjects(enviroment.children,true);
  
  this.sensor.set(this.position,new THREE.Vector3(-1,0,0));
  var obstaculo2=this.sensor.intersectObjects(enviroment.children,true);
  
  this.sensor.set(this.position,new THREE.Vector3(0,1,0));
  var obstaculo3=this.sensor.intersectObjects(enviroment.children,true);
  
  this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
  var obstaculo4=this.sensor.intersectObjects(enviroment.children,true);
  
  if((obstaculo1.length>0 && (obstaculo1[0].distance <= 3)) || (obstaculo2.length>0 && (obstaculo2[0].distance <= 3)))
  this.colision=1;
  else
  this.colision=0;
  
  };
  
  Pelota.prototype.act=function(enviroment){
    
  if(this.colision==1)
  {
  this.stepx=-this.stepx;
  }
  
  this.position.x +=this.stepx;
  this.position.y +=this.stepy;
  
  };
  
  function Pared(size,x=0,y=0){
  THREE.Object3D.call(this,x,y);
  this.add(new THREE.Mesh(new THREE.BoxGeometry(size,size,size),
                          new THREE.MeshNormalMaterial()));
  this.size = size;
  this.position.x=x;
  this.position.y=y;
  }
  
  
  Pared.prototype = new THREE.Object3D();
  function setup(){
  entorno=new Enviroment();
  camara= new THREE.PerspectiveCamera();
  camara.position.z=90;
  
  entorno.add(new Pared(20,20,0));
    entorno.add(new Pared(20,-20,0));
      entorno.add(new Pared(20,0,20));
        entorno.add(new Pared(20,0,-20));
              entorno.add(new Pelota());
              entorno.add(camara);
              
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
  document.body.appendChild(renderer.domElement);
  }
  
  function loop(){
  requestAnimationFrame(loop);
  entorno.sense();
  entorno.plan();
  entorno.act();
  renderer.render(entorno,camara);
  }
  
  var entorno,camara,renderer;
  setup();
  loop();
