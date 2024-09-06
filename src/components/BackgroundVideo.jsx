import Vidback from "../assets/galerie/vid4.mov"
import "../styles/BackgroundVideo.css";

const BackgroundVideo = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={Vidback} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;