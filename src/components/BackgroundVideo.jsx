import "../styles/BackgroundVideo.css";

const BackgroundVideo = () => {
  return (
    <div className="video-background">
<video preload autoPlay muted loop playsInline>
  <source src="/src/assets/galerie/vid4.h264" type="video/mp4" />
  <source src="/src/assets/galerie/vid4.webm" type="video/webm" />
  Votre navigateur ne supporte pas la lecture des vidéos.
</video>
    </div>
  );
};

export default BackgroundVideo;