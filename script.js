// npm start

// git add .
// git commit -m "blah"
// git push

//import * as THREE from '../node_modules/three/build/three.module.js';
import * as THREE from 'three';
import './style.css'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

function animate()
{
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('body nav h2 a')

function reveal() {
  var reveals = document.querySelectorAll("section");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();
