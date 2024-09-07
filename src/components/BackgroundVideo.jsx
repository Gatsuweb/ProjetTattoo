import "../styles/BackgroundVideo.css";

const BackgroundVideo = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src="/src/assets/galerie/vid4.h264" type="video/mp4" />
        <source src="/src/assets/galerie/vid4.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default BackgroundVideo;