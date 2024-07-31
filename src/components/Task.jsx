import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Iphone } from './Iphone'
import { Html, OrbitControls, useGLTF } from '@react-three/drei'

const Task = () => {
    const {scene} = useGLTF('./untitled.glb')
  return (
    <div className='w-screen h-screen bg-blue-400'>
    <Canvas
     camera={{
       position:[0,0,-25],fov:3.8
    }}
     >
        <OrbitControls 
        enableRotate={false}
        />
<ambientLight intensity={1.5}/>

<Iphone     scale={[1.5, 1.5, 1.5]} metalness={1} roghness={0}>
{/* <Html
  wrapperClass='pc'
  position={[0, 0,-0.1]}
  // distanceFactor={}
  transform
  rotation-x={18}
  rotation-y={10}

  depthTest={false} // Prevents content from showing through the back of the object
>
  <iframe src='http://localhost:5174/'/>
</Html>  */}
</Iphone>




    </Canvas>
    </div>
    
  )
}

export default Task