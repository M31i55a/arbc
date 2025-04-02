import React from 'react'

const Home = () => {
  return (
    <div className="bg-[#191919] bg-[url('/src/assets/Background-rOK.png')] bg-cover bg-center text-gray-300 text-1xl text-center w-full h-[100vh] pl-12 pr-16 pt-4">
      
      <div className="header min-w-full flex justify-between sticky">
        <div className="logo m-2">logo</div>
        <div className="about_section m-2 font-bold text-xl flex flex-col justify-center items-center">
          <div className="about">About</div>
          <div className="bottom_bar border-4 w-[75%] border-[#7C7C7C] rounded-md"></div>
        </div>
      </div>

      <div className="content min-w-full h-[81%] mt-2 grid grid-cols-12 flex-grow">
        <div className="left col-span-4 flex flex-col justify-end">
          <div className="content m-2 flex flex-col text-left">
            <div className="title mb-2 text-2xl">
              <div className="font-rockwell"> AFRICANS RISING{"\n"}BUSINESS CONSULTING</div>
            </div>
            <div className="description text-[#7C7C7C]">
              Aliquam sodales interdum ipsum. Pellentesque 
              egestas tortor eu urna molestie, ac egestas ex 
              dapibus. Etiam mauris felis, malesuada in lacus 
              laoreet, sollicitudin pellentesque ipsum. 
              Phasellus metus tortor, aliquam facilisis metus 
              eu, hendrerit feugiat tortor. 
            </div>
          </div>
          
        </div>
        <div className="center col-span-7 flex justify-center items-center">
          <div className="image_container">
            <img
              src="/src/assets/ARBC_logo.png"
              alt="Example"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
        <div className="aside text-orange-600 fixed right-[-70px] top-[323px] transform rotate-90 col-span-1">
          <nav className=''>
            <ul className='flex'>
              <li className='m-1'>Home</li>
              <li className='m-1'>Service 01</li>
              <li className='m-1'>Service 02</li>
              <li className='m-1'>Portofolio</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="scroll_button">
        SCROLL
      </div>

    </div>
  )
}

export default Home