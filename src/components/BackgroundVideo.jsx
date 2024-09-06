import "../styles/BackgroundVideo.css";

const BackgroundVideo = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src="/src/assets/galerie/vid4.mov" type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;