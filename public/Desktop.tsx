/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 desktop.glb -t 
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Screen: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
  //animations: GLTFAction[]
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/desktop.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Screen.geometry} position={[0, 2.113, 0.416]} scale={[2.25, 1.309, 0.022]}>
        <meshStandardMaterial color={"blue"}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('/desktop.glb')
