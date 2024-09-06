import VidBack from "../assets/vid4.mp4";
import "../styles/BackgroundVideo.css";

const BackgroundVideo = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={VidBack} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;