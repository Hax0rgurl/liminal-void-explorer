import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import * as THREE from "three";

// Shader for fluid simulation
const fragmentShader = `
  uniform float time;
  uniform vec2 resolution;
  varying vec2 vUv;
  
  void main() {
    vec2 position = vUv * 2.0 - 1.0;
    float red = abs(sin(position.x * position.y + time / 5.0));
    float green = abs(sin(position.x * position.y + time / 4.0));
    float blue = abs(sin(position.x * position.y + time / 3.0));
    gl_FragColor = vec4(red * 0.3, green * 0.2, blue * 0.5, 1.0);
  }
`;

const vertexShader = `
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const Basement = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightOn, setLightOn] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Fluid plane
    const geometry = new THREE.PlaneGeometry(20, 20, 32, 32);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      fragmentShader,
      vertexShader,
      transparent: true,
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -2;
    scene.add(plane);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff0000, 1, 100);
    pointLight.position.set(0, 5, 0);
    scene.add(pointLight);

    // Fog - explicitly typed as FogExp2
    const fog = new THREE.FogExp2(0x000000, 0.15);
    scene.fog = fog;

    camera.position.z = 5;
    camera.position.y = 2;

    // Random floating debris
    const debris: THREE.Mesh[] = [];
    for (let i = 0; i < 50; i++) {
      const size = Math.random() * 0.2;
      const debrisGeometry = new THREE.BoxGeometry(size, size, size);
      const debrisMaterial = new THREE.MeshPhongMaterial({
        color: 0x333333,
        transparent: true,
        opacity: 0.6,
      });
      const debrisMesh = new THREE.Mesh(debrisGeometry, debrisMaterial);
      debrisMesh.position.set(
        Math.random() * 10 - 5,
        Math.random() * 4 - 2,
        Math.random() * 10 - 5
      );
      debris.push(debrisMesh);
      scene.add(debrisMesh);
    }

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.05;

      material.uniforms.time.value = time;

      debris.forEach((d, i) => {
        d.rotation.x += 0.01;
        d.rotation.y += 0.01;
        d.position.y += Math.sin(time * 0.5 + i) * 0.003;
      });

      pointLight.intensity = lightOn ? 2 : 0.5;
      if (scene.fog instanceof THREE.FogExp2) {
        scene.fog.density = lightOn ? 0.05 : 0.15;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [lightOn]);

  const handleLightSwitch = () => {
    setLightOn(!lightOn);
    if (!lightOn) {
      toast("The shadows seem to move...");
    }
  };

  return (
    <div className="relative min-h-screen">
      <div ref={containerRef} className="absolute inset-0" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl md:text-6xl mb-8 liminal-text font-serif animate-float">
          The basement holds many secrets...
        </h1>
        
        <div className="max-w-md text-center">
          <p className="text-liminal-muted text-lg mb-4 animate-pulse">
            Something moves in the dark water below
          </p>
          
          <button
            onClick={handleLightSwitch}
            className="px-6 py-3 bg-liminal-light/10 rounded-lg hover:bg-liminal-light/20 transition-all duration-500 transform hover:scale-105"
          >
            {lightOn ? "Turn Off Light" : "Turn On Light"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Basement;
