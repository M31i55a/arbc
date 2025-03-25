import React from 'react'

const Service1 = () => {
         return (
    <div className="relative bg-[#D1D1D1] bg-[url('/src/assets/Background-B_OK.png')] bg-cover bg-center text-gray-900 text-1xl text-center w-full h-[100vh] border-2 border-blue-500">
      
      <div className="header sticky min-w-full mt-2 border-2 border-red-500 flex justify-between">
        <div className="logo m-2 border-2 border-green-500">
        <div className="image_container border-2 border-green-800">
            <img
              src="/src/assets/ARBC_logo.png"
              alt="Example"
              className="max-w-[100px] object-contain"
            />
          </div>
        </div>
        <div className="about m-2 border-2 border-green-500">about</div>
      </div>

      <div className="content min-w-full h-[81%] mt-2 grid grid-cols-12 border-2 border-red-500 flex-grow">
        <div className="left col-span-4 flex flex-col justify-end border-2 border-green-900">
          <div className="content flex flex-col text-left border-2 border-green-500">
            <div className="title m-2 text-4xl">
              <div>Strategic</div>
            </div>
            <div className="description text-gray-900">
         <div className="services text-2xl m-2">Services</div>
         <div className="services_list m-2">
            <ul>
              <li>Gestion de projet</li>
              <li>Conseil en com et marketing</li>
              <li>Marketing digital</li>
              <li>Street marketing</li>
            </ul>
         </div>
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


export default Service1