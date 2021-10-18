import styles from "./FilmCardStyle.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useFilmCard } from "./FilmCardLikes";
//Card Display that conatins title,description,likes
const FilmCard = ({ title, description, id,producer }) => {
  const {  liked, handleOnLike } = useFilmCard(title, id);

  return (
    <div style={styles.container}>
        <div style={styles.title} >Title: {title}</div>
                <div style={styles.description}>Description: {description}</div>
      <FontAwesomeIcon
        style={
          liked ? { ...styles.likeIcon, ...styles.liked } : styles.likeIcon
        }
        icon={faHeart}
        onClick={() => handleOnLike(id)}
      />
    </div>
  );
};

export default FilmCard;
