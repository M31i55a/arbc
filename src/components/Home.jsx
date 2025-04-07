import React, { useState, useEffect} from 'react'
import DynamicBackground from './DynamicBackground';
import { div } from 'three/tsl';

const Home = () => {

  const [headerVisible, setHeaderVisible] = useState(false); // State to control header visibility

  useEffect(() => {
    // Set a timeout to make the header visible after 7 seconds
    const timer = setTimeout(() => {
      setHeaderVisible(true);
    }, 10000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const [clickedLink, setClickedLink] = useState("home"); // State to track clicked link

  const handleLinkClick = (link) => {
    setClickedLink(link);
  }

  return (
    <div id='home' className="bg-[#191919] bg-[url('/src/assets/Background-rOK.png')] bg-cover bg-center text-gray-300 text-1xl text-center w-full h-[100vh] pl-12 pr-16 pt-4">
      <DynamicBackground />
      <div
        className={`header min-w-full flex justify-between sticky transition-opacity duration-1000 ${
          headerVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="logo m-2"></div>
        <div className="about_section m-2 font-bold text-xl flex flex-col justify-center items-center">
          <div className="about">About</div>
          <div className="bottom_bar border-4 w-[75%] border-[#7C7C7C] rounded-md"></div>
        </div>
      </div>

      <div className="content min-w-full h-[81%] mt-2 grid grid-cols-12 flex-grow z-30">
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
        <div className={`aside text-gray-300 fixed right-[-70px] top-[323px] transition-all ease-in-out duration-1000 transform rotate-90 col-span-1 ${headerVisible ? 'opacity-100' : 'opacity-0'}`}>
          <nav className=''>
            <ul className='flex uppercase'>
            <li className="m-1">
                <a
                  href="#home"
                  onClick={() => handleLinkClick('home')}
                  className={clickedLink === 'home' ? 'transform scale-10 bg-orange-600 text-xs text-orange-600 rounded-md border-none transition-all ease-in-out duration-500' : ''}
                >
                  Home
                </a>
              </li>
            <li className="m-1">
                <a
                  href="#service1"
                  onClick={() => handleLinkClick('service1')}
                  className={clickedLink === 'service1' ? 'lowercase border-2 bg-orange-600 text-sm text-orange-600 rounded-md border-none transition-all ease-in-out duration-500' : ''}
                >
                  Service1
                </a>
              </li>
            <li className="m-1">
                <a
                  href="#service2"
                  onClick={() => handleLinkClick('service2')}
                  className={clickedLink === 'service2' ? 'lowercase border-2 bg-orange-600 text-sm text-orange-600 rounded-md border-none transition-all ease-in-out duration-500' : ''}
                >
                  Service2
                </a>
              </li>
            <li className="m-1">
                <a
                  href="#portofolio"
                  onClick={() => handleLinkClick('portofolio')}
                  className={clickedLink === 'portofolio' ? 'lowercase border-2 bg-orange-600 text-sm text-orange-600 rounded-md border-none transition-all ease-in-out duration-500' : ''}
                >
                  Portofolio
                </a>
              </li>
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