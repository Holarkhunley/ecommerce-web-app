//MyCarousel.tsx
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Brandcarousel() {
  return (
    <div className="max-w-[60%]  mx-auto mt-10 mb-6">
      <div className="border-gray-50 border">
        <p className=" text-2xl mb-0 p-2">Official Stores</p>
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          <div>
            <img
              className="block mx-auto max-w-xs w-auto h-auto "
              src="/brand carousel/lg.jpeg"
              alt="Slide 1"
            />
            {/*<p className="legend">Slide 1</p>*/}
          </div>
          <div>
            <img
              className="block mx-auto max-w-xs w-auto h-auto "
              src="/brand carousel/hp.jpeg"
              alt="Slide 2"
            />
            {/*<p className="legend">Slide 2</p>*/}
          </div>
          <div>
            <img
              className="block mx-auto max-w-xs w-auto h-auto"
              src="/brand carousel/pepsi.jpeg"
              alt="Slide 3"
            />
            {/*<p className="legend">Slide 3</p>*/}
          </div>
          <div>
            <img
              className="block mx-auto max-w-xs w-auto h-auto"
              src="/brand carousel/gionee.jpeg"
              alt="Slide 3"
            />
            {/*<p className="legend">Slide 3</p>*/}
          </div>
          <div>
            <img
              className="block mx-auto max-w-xs w-auto h-auto"
              src="/brand carousel/infinix.jpeg"
              alt="Slide 3"
            />
            {/*<p className="legend">Slide 3</p>*/}
          </div>
          <div>
            <img
              className="block mx-auto max-w-xs w-auto h-auto"
              src="/brand carousel/samsung.jpeg"
              alt="Slide 3"
            />
            {/*<p className="legend">Slide 3</p>*/}
          </div>
          <div>
            <img
              className="block mx-auto max-w-xs w-auto h-auto"
              src="/brand carousel/unilever.jpeg"
              alt="Slide 3"
            />
            {/*<p className="legend">Slide 3</p>*/}
          </div>
          <div>
            <img
              className="block mx-auto max-w-xs w-auto h-auto"
              src="/brand carousel/Tecno logo.png"
              alt="Slide 3"
            />
            {/*<p className="legend">Slide 3</p>*/}
          </div>
        </Carousel>
      </div>
    </div>
  );
}
export default Brandcarousel;
