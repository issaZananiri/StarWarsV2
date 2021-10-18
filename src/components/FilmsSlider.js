import { Swiper } from "swiper/react";
import { useFilmsSlider } from "./FilmsSliderApi";
import "swiper/swiper.scss";
const FilmsSlider = () => {
  const { slides } = useFilmsSlider();
//swiper Slider Attributes
  return (
    <div >
    <Swiper
    direction={'vertical'}
      spaceBetween={10}
      slidesPerView={
        window.innerWidth < 400 ? 1.5 : window.innerWidth < 780 ? 3 : 5
      }
    >
      {slides}
    </Swiper>

    </div>
  );
};

export default FilmsSlider;
