const canvas = document.querySelector('#map');
const renderer = new THREE.WebGLRenderer({ canvas });

// Create a camera and set its position
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.z = 2000;

// Create a scene
const scene = new THREE.Scene();

// Add some lighting to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 1).normalize();
scene.add(directionalLight);

// Load the star data from the JSON file
fetch('stars.json')
  .then(response => response.json())
  .then(data => {
    // Loop through the star data and create a sphere for each star
    data.forEach(star => {
      const geometry = new THREE.SphereGeometry(5, 32, 32);
      const material = new THREE.MeshBasicMaterial({ color: star.color });
      const starSphere = new THREE.Mesh(geometry, material);
      starSphere.position.set(star.x, star.y, star.z);
      scene.add(starSphere);
    });
  })
  .catch(error => console.error(error));

// Render the scene
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
