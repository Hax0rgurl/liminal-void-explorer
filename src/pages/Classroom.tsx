import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { toast } from "sonner";

const Classroom = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Set up scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create floating desks
    const desks: THREE.Mesh[] = [];
    for (let i = 0; i < 20; i++) {
      const geometry = new THREE.BoxGeometry(1, 0.1, 0.7);
      const material = new THREE.MeshPhongMaterial({ 
        color: 0x333333,
        transparent: true,
        opacity: 0.8,
      });
      const desk = new THREE.Mesh(geometry, material);
      desk.position.x = Math.random() * 10 - 5;
      desk.position.y = Math.random() * 5 - 2.5;
      desk.position.z = Math.random() * 5 - 10;
      desks.push(desk);
      scene.add(desk);
    }

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Add point light
    const pointLight = new THREE.PointLight(0xff0000, 1, 100);
    pointLight.position.set(0, 5, 0);
    scene.add(pointLight);

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      desks.forEach((desk, i) => {
        desk.rotation.x += 0.01;
        desk.rotation.y += 0.005;
        desk.position.y += Math.sin(Date.now() * 0.001 + i) * 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <div ref={containerRef} className="absolute inset-0" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl md:text-6xl mb-8 liminal-text font-serif animate-float">
          Class is in session...
        </h1>
        
        <div className="max-w-md text-center">
          <p className="text-liminal-muted text-lg mb-4 animate-pulse">
            The desks remember their students
          </p>
          
          <button
            onClick={() => {
              toast("You hear chalk scratching on the blackboard...");
              setTimeout(() => navigate("/laboratory"), 2000);
            }}
            className="px-6 py-3 bg-liminal-light/10 rounded-lg hover:bg-liminal-light/20 transition-all duration-500 transform hover:scale-105"
          >
            Take your seat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Classroom;