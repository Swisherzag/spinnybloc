// Create a Three.js scene
const scene = new THREE.Scene();

// Create a camera and set its position
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a geometry (in this case, a simple box resembling a sword)
const geometry = new THREE.BoxGeometry(1, 5, 0.1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Set color to green: 0x00ff00

// Create a mesh (sword)
const sword = new THREE.Mesh(geometry, material);
scene.add(sword);

// Define the animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the sword
  sword.rotation.x += 0.01;
  sword.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
}

// Start the animation loop
animate();
