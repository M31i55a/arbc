import  { useEffect } from 'react';
import gsap from 'gsap';

const LoadingPage = () => {
  useEffect(() => {
    const counter3 = document.querySelector('.counter-3');

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 10; j++) {
        const div = document.createElement('div');
        div.className = 'num';
        div.textContent = j;
        counter3.appendChild(div);
      }
    }

    const finalDiv = document.createElement('div');
    finalDiv.className = 'num';
    finalDiv.textContent = '0';
    counter3.appendChild(finalDiv);

    function animate(counter, duration, delay = 0) {
      const numHeight = counter.querySelector('.num').clientHeight;
      const totalDistance = (counter.querySelectorAll('.num').length - 1) * numHeight;

      gsap.to(counter, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: 'power2.inOut',
      });
    }

    animate(counter3, 5);
    animate(document.querySelector('.counter-2'), 5);
    animate(document.querySelector('.counter-1'), 2, 3.5);

    gsap.to('.digit', {
      top: '-150px',
      stagger: {
        amount: 0.25,
      },
      delay: 6,
      duration: 1,
      ease: 'power4.inOut',
    });

    gsap.from('.loader-1', {
      width: 0,
      duration: 6,
      ease: 'power2.inOut',
    });

    gsap.from('.loader-2', {
      width: 0,
      delay: 1.9,
      duration: 2,
      ease: 'power2.inOut',
    });

    gsap.to('.loader', {
      background: 'none',
      delay: 5.5,
      duration: 0.1,
    });

    gsap.to('.loader-1', {
      rotate: 90,
      y: -50,
      duration: 0.7,
      delay: 5.5,
    });

    gsap.to('.loader-2', {
      x: -75,
      y: 75,
      duration: 0.5,
    }, '<');

    gsap.to('.loader', {
      scale: 50,
      duration: 1,
      delay: 6.8,
      ease: 'power2.inOut',
    });

    gsap.to('.loader', {
      rotate: 45,
      y: 500,
      x: 2000,
      duration: 1,
      delay: 6.8,
      ease: 'power2.inOut',
    });

    gsap.to('.loading-screen', {
      opacity: 0,
      duration: 0.5,
      delay: 7.2,
      ease: 'power1.inOut',
    });

    gsap.to('h1', 1.5, {
      delay: 7.2,
      y: -85,
      ease: 'power4.inOut',
      stagger: {
        amount: 0.5,
      },
    });
  }, []);

  return (
    <div className="App">
      <div className="website-content">
        {/* <div className="header">
          <div className="h1">
            <h1>Website</h1>
            <h1>Content</h1>
          </div>
          <div className="header-revealer"></div>
        </div> */}
      </div>

      <div className="loading-screen">
        <div className="loader">
          <div className="loader-1 bar"></div>
          <div className="loader-2 bar"></div>
        </div>

        <div className="counter">
          <div className="counter-1 digit">
            <div className="num">0</div>
            <div className="num num1offset1">1</div>
          </div>
          <div className="counter-2 digit">
            <div className="num">0</div>
            <div className="num num1offset2">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
            <div className="num">0</div>
          </div>
          <div className="counter-3 digit">
            <div className="num">0</div>
            <div className="num">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
            <div className="num">0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;