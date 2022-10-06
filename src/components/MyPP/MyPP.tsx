import { useEffect } from 'react';
import './MyPP.module.css';

function MyPP() {
  useEffect(() => {
    const parallax = (e: any) => {
      document.querySelectorAll('.parallax').forEach((img: any) => {
        const speed: number = img.getAttribute('data-speed');
        console.log('speed', speed);
        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        img.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
    };

    document.addEventListener('mousemove', parallax);

    return () => {
      document.removeEventListener('mousemove', parallax);
    };
  }, []);

  return (
    <div>
      <img src="body-fixed.png" alt="body-fixed" width={562} height={750} className="body-fixed" />
      <img src="head-left.png" alt="head-left" width={150} height={150} className="parallax head-left" data-speed="1.2" />
      <img src="head-right.png" alt="head-right" width={150} height={150} className="parallax head-right" data-speed="-1.9" />
      <img src="body-left.png" alt="body-left" width={225} height={225} className="parallax body-left" data-speed="-1.4" />
      <img src="body-right.png" alt="body-right" width={225} height={225} className="parallax body-right" data-speed="1" />
    </div>
  );
}

export default MyPP;
