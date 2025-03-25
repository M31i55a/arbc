import React from 'react'

const Portofolio = () => {
  return (
<div className="bg-[#191919] bg-[url('/src/assets/Background-rOK.png')] bg-cover bg-center text-gray-300 text-1xl text-center w-full h-[100vh] border-2 border-blue-500">

<div className="header min-w-full mt-2 border-2 border-red-500 flex justify-between">
 <div className="logo m-2 border-2 border-green-500">
 <div className="image_container border-2 border-green-800">

   </div>
 </div>
 <div className="about m-2 border-2 border-green-500">about</div>
</div>

<div className="content min-w-full h-[81%] mt-2 grid grid-cols-12 border-2 border-red-500 flex-grow">
 <div className="left col-span-4 flex flex-col justify-end border-2 border-green-900">
   <div className="content m-2 flex flex-col text-left border-2 border-green-500">
     <div className="title mb-2 text-4xl">
       <div>PORTOFOLIO</div>
     </div>
     
   </div>
   
 </div>
 <div className="center col-span-7 flex justify-center items-center border border-green-500">
   
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