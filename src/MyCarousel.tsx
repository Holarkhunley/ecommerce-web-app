// MyCarousel.tsx
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function MyCarousel() {
  return (
    <div className=" z-[100] w-full max-w-7xl mx-auto px-4  mt-10 mb-6">
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        <div>
          <img className=' h-72 antialiased' src="/carousel-image/Ramadan Sales.jpeg" alt="Slide 1" />
          {/*<p className="legend">Slide 1</p>*/}
        </div>
        <div>
          <img className='h-72 antialiased 'src='/carousel-image/Flash Sales.jpg' alt="Slide 2" />
          {/*<p className="legend">Slide 2</p>*/}
        </div>
        <div>
          <img className='h-72 antialiased' src='/carousel-image/Black Friday.jpg' alt="Slide 3" />
          {/*<p className="legend">Slide 3</p>*/}
        </div>
      </Carousel>
    </div>
  );
}
export default MyCarousel