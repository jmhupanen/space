'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Desktop from '../../public/Desktop';
import styles from './Space.module.css';

const Space = () => {
  return (
    <main className={styles.main}>
        <Canvas>
            <ambientLight intensity={2}/>
            <OrbitControls />
            <Mesh />
        </Canvas>
    </main>
  );
};

function Mesh() {
    return (
        <mesh>
            <Desktop />
        </mesh>
    );
};

export default Space;