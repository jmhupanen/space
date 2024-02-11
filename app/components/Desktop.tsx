'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import styles from './Desktop.module.css';

const Desktop = () => {
  return (
    <main className={styles.main}>
        <Canvas>
            <ambientLight intensity={2}/>
            <Mesh />
        </Canvas>
    </main>
  );
};

function Mesh() {
    return (
        <mesh>
            <boxGeometry />
        </mesh>
    );
};

export default Desktop;