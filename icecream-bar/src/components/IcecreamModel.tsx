"use client"

import React, { useRef } from 'react'
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useAnimation } from 'framer-motion';



const IcecreamModel = ({ position = [0, 0, 0], scale = 1, flavor = "vanilla" }) => {
   
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/models/icecream.glb');
    const { actions } = useAnimation(animations, group);


    // Animation Loop
    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y += 0.005;
            group.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.2);
        }
    })
  
  return (
    <div>IcecreamModel</div>
  )
}

export default IcecreamModel