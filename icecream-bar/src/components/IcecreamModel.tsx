"use client";

import React, { useRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useAnimation } from "framer-motion";

const IcecreamModel = ({
  position = [0, 0, 0],
  scale = 1,
  flavor = "vanilla",
}) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/icecream.glb");
  const { actions } = useAnimation(animations, group);

  // Animation Loop:
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.005;
      group.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.2);
    }
  });

  // Set material based on flavor:
  let materialColor;

  switch (flavor) {
    case "chocolate":
      materialColor = "#5c4033";
      break;
    case "strawberry":
      materialColor = "#ff6b8b";
      break;
    default: //Vanilla
      materialColor = "#f3e5ab";
      break;
  }

  return (
    <>
      <group ref={group} position={position} scale={scale} dispose={null}>
        <mesh
          geometry={nodes.icecream.geometry}
          material={nodes.icecream.matreial}
          material-color={materialColor}
        />

        <mesh geometry={nodes.cone.geometry} material={nodes.cone.material} />
      </group>
    </>
  );
};

export default IcecreamModel;
