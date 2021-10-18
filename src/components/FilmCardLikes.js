import { useEffect, useState } from "react";
import Cookies from "js-cookie";
//Handle likes
export const useFilmCard = (title, id) => {
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (Cookies.get("likes")) {
      const likesObject = Cookies.getJSON("likes");

      if (likesObject[id]) {
        setLiked(true);
      }
    }
  }, []);
  const handleOnLike = (id) => {
    if (!Cookies.get("likes")) {
      Cookies.set("likes", { [id]: !liked });
      setLiked(!liked);
    } else {
      const likesObject = Cookies.getJSON("likes");
      Cookies.set("likes", { ...likesObject, [id]: !liked });
      setLiked(!liked);
    }
  };
  useEffect(() => {

  }, [title]);

  return {
    liked,
    handleOnLike,
  };
};
