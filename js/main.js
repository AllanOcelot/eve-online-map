//import * as THREE from 'three';
//import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


// Setup ThreeJS scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 2000 );

// Axis helper helps me work in 3d space.
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

// Creater renderer and set configs.
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Controls for orbit cam
//const controls = new OrbitControls( camera, renderer.domElement );


//----------------
//  vars
//----------------
let starsData = [];
let starsMeshData = [];
const starTypes = ['Blue', 'Blue-White', 'Yellow','Orange','Red']
const starColors = ['blue', 'white', 'yellow', 'orange', 'red']

const ambientlight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientlight);


camera.position.x = 0.5;
camera.position.y = 0.5;
camera.position.z = 0.5;


getData()




// --------
// Functions
// --------
async function getData() {
  console.log('loading data')
  try {
    const response = await fetch("data/star-map.json", {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    });



    let data = await response.json() 
    starsData = data.solarSystems;
    console.log(starsData)
    if(starsData){
      for(let i = 0; i < starsData.length ; i++){
        console.log('We have a star')
        drawStar(starsData[i], i)
      }
    }
    renderer.render(scene, camera);
  } catch (error) {
    console.error("Error:", error);
  }
}

function drawStar(star, index){
  console.log(star)
  const geometry = new THREE.SphereGeometry( 0.001, 20, 20 );
  const material = new THREE.MeshBasicMaterial( { color: '#ffffff' , opacity: '0.03'} );
  starsMeshData[index] = new THREE.Mesh( geometry, material );
  starsMeshData[index].position.set(star.x, star.y, star.z)
  scene.add( starsMeshData[index] );


  /*

  starsMeshData[i].position.x =stars[i].axisX
  starsMeshData[i].position.y =stars[i].axisY
  starsMeshData[i].position.z =stars[i].axisZ


  scene.add( starsMeshData[i] );





      const light = new THREE.PointLight( '#', 1, 100 );
      light.position.set( 0, 0, 0 );
      scene.add( light );


   // lightObjects[i] = new THREE.PointLight( 0xff0000, 1, 100 );
   // lightObjects[i].position.set( stars[i].axisX, stars[i].axisY, stars[i].axisZ );
   // scene.add( lightObjects[i] );

    //starObjects[i].set(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10))
    scene.add( starObjects[i] );
    */
}



function generateStars(){
  const starObjects = [];
  const lightObjects = [];


  for(let i = 0; i < stars.length; i++){
    const geometry = new THREE.SphereGeometry( stars[i].size, 20, 20 );
    const material = new THREE.MeshBasicMaterial( { color: stars[i].color , opacity: '0.03'} );
    starObjects[i] = new THREE.Mesh( geometry, material );
    starObjects[i].position.x =stars[i].axisX
    starObjects[i].position.y =stars[i].axisY
    starObjects[i].position.z =stars[i].axisZ


      const light = new THREE.PointLight( '#', 1, 100 );
      light.position.set( 0, 0, 0 );
      scene.add( light );


   // lightObjects[i] = new THREE.PointLight( 0xff0000, 1, 100 );
   // lightObjects[i].position.set( stars[i].axisX, stars[i].axisY, stars[i].axisZ );
   // scene.add( lightObjects[i] );

    //starObjects[i].set(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10))
    scene.add( starObjects[i] );
  }
}

function autoZoom(){  
 if(cameraZoomMode === 'out'){
    if(camera.position.z <= 0.85){
      camera.position.z += 0.001;
      camera.position.x += 0.001;
      camera.position.y += 0.001;
    }else{
      cameraZoomMode = 'in'
    }
  }else{
    if(camera.position.z >= 0.5){
      camera.position.z -= 0.001;
      camera.position.x -= 0.001;
      camera.position.y -= 0.001;
    }else
    {
      cameraZoomMode = 'out'
    }
  }
}


let cameraZoomMode = 'out'
// Animation 
function animate() {	
  requestAnimationFrame( animate );
  autoZoom()
  camera.lookAt(0,0,0)
  //controls.update();
	renderer.render( scene, camera );
}
animate();