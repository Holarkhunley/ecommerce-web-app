// MyCarousel.tsx
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function MyCarousel() {
  return (
    <div className=" z-[100] max-w-[85%] mx-auto mt-10 mb-6">
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        <div>
          <img className='h-72' src="/carousel-image/Ramadan Sales.jpeg" alt="Slide 1" />
          {/*<p className="legend">Slide 1</p>*/}
        </div>
        <div>
          <img className='h-72 'src='/carousel-image/david-billings-NID5iadR7RE-unsplash.jpg' alt="Slide 2" />
          {/*<p className="legend">Slide 2</p>*/}
        </div>
        <div>
          <img className='h-72' src='/carousel-image/Grocery.jpg' alt="Slide 3" />
          {/*<p className="legend">Slide 3</p>*/}
        </div>
      </Carousel>
    </div>
  );
}
export default MyCarousel