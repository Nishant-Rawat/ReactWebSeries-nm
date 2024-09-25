import { Suspense, useRef } from "react";
import Meme from "../LetsSee";
import FlauntSection from "./FlauntSection";
import Skills from "./Skills";
import TopBanner from "./TopBanner";
import { Canvas, useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";
import { BoxGeometry, Mesh } from "three";
// import { OrbitControls } from "@react-three/drei";

extend({ BoxGeometry });

export default function Main() {
  return (
    <>
      <Canvas style={{ height: "500px" }}>
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
      <TopBanner />
      <FlauntSection />
      <Skills />
      <Meme />
    </>
  );
}

function Box() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.1;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
}
