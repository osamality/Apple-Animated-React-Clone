import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from "../../assets/3D-Model/Scene";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
`;

const AnimatedModel = () => {
  return (
    <Container>
      <Canvas camera={{ fox: 14 }}>
        <ambientLight intensity={2.25} />
        <directionalLight position={[1, 1, 0, 0]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Environment preset="night" />

        {/* <OrbitControls /> */}
      </Canvas>
    </Container>
  );
};

export default AnimatedModel;
