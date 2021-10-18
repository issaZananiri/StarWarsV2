const styles = {
  container: {
    height: 220,
    alignItems:'center',
    width: 440,
    backgroundColor: "white",
    borderRadius: 5,
    overflow: "hidden",
    float:"left",
    position: "relative",
    direction: 'vertical',
  },
  
  textWrapper: {
    padding: 12,
  },
  title: {
    marginBottom: 5,
    fontSize:"20px",
  },
  description: {
    height: 150,
    width: "100%",
    wordWrap: "break-word",
    overflow: "auto",
    fontSize:"20px",
  },
  likeIcon: {
    fontSize: 28,
    color: "lightgray",
    position: "absolute",
    bottom: 13,
    right: 13,
  },
  liked: {
    color: "red",
  },
};

export default styles;
