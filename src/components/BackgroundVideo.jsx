import "../styles/BackgroundVideo.css";

const BackgroundVideo = () => {
  return (
    <div className="video-background">
    <video autoPlay muted loop className="background-video">
      <source src="/src/assets/galerie/vid4.mp4" type="video/mp4" />
      <source src="/src/assets/galerie/vid4.webm" type="video/webm" />
      Votre navigateur ne supporte pas la lecture des vidéos.
    </video>
    <img
        src="/src/assets/galerie/fallback.png"
        alt="Image de fallback"
        className="fallback-image"
      />
    </div>
  );
};

export default BackgroundVideo;