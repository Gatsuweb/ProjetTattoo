import VideoMp4 from "../assets/vid4.mp4";
import VideoWebm from "../assets/vid4.webm";
// import FallbackImage from "../assets/fallback.png";
import "../styles/BackgroundVideo.css";

const BackgroundVideo = () => {
  return (
    <div className="video-background">
    <video autoPlay muted loop playsInline className="background-video">
      <source src={VideoMp4} type="video/mp4" />
      <source src={VideoWebm} type="video/webm" />
      Votre navigateur ne supporte pas la lecture des vidéos.
    </video>
    {/* <img
        src={FallbackImage}
        alt="Image de fallback"
        className="fallback-image"
      /> */}
    </div>
  );
};

export default BackgroundVideo;