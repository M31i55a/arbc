import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


const CubeWithParallax = () => {
  const meshRef = useRef(); // Reference to the cube mesh

  // Update the cube's rotation based on mouse movement
  useFrame(({ mouse }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = mouse.y * Math.PI *0.05; // Rotate on X-axis
      meshRef.current.rotation.y = mouse.x * Math.PI *0.05;// Rotate on Y-axis
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} /> {/* Cube dimensions: 3x3x3 */}
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const Portofolio = () => {
  return (
<div className="bg-[#191919] bg-[url('/src/assets/Background-rOK.png')] bg-cover bg-center text-gray-300 text-1xl text-center w-full h-[100vh] pl-12 pr-16 pt-4">

<div className="header min-w-full flex justify-between">
 <div className="logo m-2">
 <div className="image_container">
  <img
     src="/src/assets/ARBC_logo.png"
     alt="Example"
     className="max-w-[100px] object-contain"
  />
   </div>
 </div>
 <div className="about_section m-2 font-bold text-xl flex flex-col justify-center items-center">
    <div className="about">About</div>
    <div className="bottom_bar border-4 w-[75%] border-[#7C7C7C] rounded-md"></div>
  </div>
</div>

<div className="content min-w-full h-[81%] mt-2 grid grid-cols-12 flex-grow">
 <div className="left col-span-4 flex flex-col justify-end ">
   <div className="content m-2 flex flex-col text-left ">
     <div className="title mb-2 text-4xl">
       <div className="font-rockwell">PORTOFOLIO</div>
     </div>
     
   </div>
   
 </div>
 <div className="center col-span-7 flex justify-center items-center">
    <Canvas 
      style={{ height: '100%', width: '100%' }}
      camera={{ 
        position: [4, 4, 4],
        fov: 50,
        near: 0.1,
        far: 1000,
      }}
    >
    <ambientLight intensity={0.65} />
    <directionalLight position={[1, 2, 3]} intensity={8} />
    {/* Add orbit controls */}
    <OrbitControls enableZoom={false} />
    <CubeWithParallax />
  </Canvas>
 </div>
 {/* <div className="aside fixed right-[-120px] top-[250px] transform rotate-90 col-span-1 border-2 border-green-500">
   <nav className='border-2 border-white'>
     <ul className='border-2 border-blue-500 flex'>
       <li className='m-1'>Home</li>
       <li className='m-1'>Service 01</li>
       <li className='m-1'>Service 02</li>
       <li className='m-1'>Portofolio</li>
     </ul>
   </nav>
 </div> */}
</div>

{/* <div className="scroll_button">
 Sroll
</div> */}

</div>
)
}

export default Portofolio