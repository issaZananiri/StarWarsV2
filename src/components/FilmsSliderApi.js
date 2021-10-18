import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import FilmCard from "./FilmCard";
//State Hooks 
export const useFilmsSlider = () => {
  const [films, setFilms] = useState([]);
  const [slides, setSlides] = useState([]);
//Check API Response
  const getFilms = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();
      const films = data.results;
      setFilms(films);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFilms();
  }, []);

  useEffect(() => {

    if (films.length > 0) {
      const slidesToDisplay = films.map((film) => (
        <SwiperSlide  >
          
          <FilmCard
            id={film.episode_id}
            title={film.title}
            description={film.opening_crawl}
          />
        </SwiperSlide>
      ));
      setSlides(slidesToDisplay);
    }
  }, [films]);

  return {
    films,
    slides,
    setSlides,
    setFilms,
  };
};
