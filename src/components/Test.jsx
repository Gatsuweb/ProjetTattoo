import { useRef, useState } from 'react';
import gsap from 'gsap';
import "../styles/Test.css";
import Floating1 from "../assets/galerie2/tatoo1.jpg";
import Floating2 from "../assets/galerie2/tatoo2.jpg";
import Floating3 from "../assets/galerie2/tatoo3.jpg";
import Floating4 from "../assets/galerie2/tatoo4.jpg";
import Floating5 from "../assets/galerie2/tatoo5.jpg";
import Floating6 from "../assets/galerie2/tatoo6.jpg";
import Floating7 from "../assets/galerie2/tatoo7.jpg";
import Floating8 from "../assets/galerie2/tatoo8.jpg";
import Floating9 from "../assets/galerie2/tatoo9.jpg";
import Floating10 from "../assets/galerie2/tatoo10.jpg";
import Floating11 from "../assets/galerie2/tatoo11.jpg";
import Floating12 from "../assets/galerie2/tatoo12.jpg";
import Floating13 from "../assets/galerie2/tatoo13.jpg";
import Floating14 from "../assets/galerie2/tatoo14.jpg";
import Floating15 from "../assets/galerie2/tattoo15.jpg";
import Modal from '../components/ModalTattoo';

const tattooData = [
    { image: Floating1, alt: "Tattoo 1" },
    { image: Floating2, alt: "Tattoo 2" },
    { image: Floating3, alt: "Tattoo 3" },
    { image: Floating4, alt: "Tattoo 4" },
    { image: Floating5, alt: "Tattoo 5" },
    { image: Floating6, alt: "Tattoo 6" },
    { image: Floating7, alt: "Tattoo 7" },
    { image: Floating8, alt: "Tattoo 8" },
    { image: Floating9, alt: "Tattoo 9" },
    { image: Floating10, alt: "Tattoo 10" },
    { image: Floating11, alt: "Tattoo 11" },
    { image: Floating12, alt: "Tattoo 12" },
    { image: Floating13, alt: "Tattoo 13" },
    { image: Floating14, alt: "Tattoo 14" },
    { image: Floating15, alt: "Tattoo 15" },
];

function Test() {
    const [modalTattoo, setModalTattoo] = useState(null);
    const plane1 = useRef(null);
    let requestAnimationFrameId = null;
    let xForce = 0;
    let yForce = 0;
    const easing = 0.1;
    const speedX = -0.07;
    const speedY = -0.07;

    const manageMouseMove = (e) => {
        const { movementX, movementY } = e;
        xForce += movementX * speedX;
        yForce += movementY * speedY;

        if (requestAnimationFrameId == null) {
            requestAnimationFrameId = requestAnimationFrame(animate);
        }
    };

    const lerp = (start, target, amount) => start * (1 - amount) + target * amount;

    const animate = () => {
        xForce = lerp(xForce, 0, easing);
        yForce = lerp(yForce, 0, easing);
        gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });

        if (Math.abs(xForce) < 0.1) xForce = 0;
        if (Math.abs(yForce) < 0.01) yForce = 0;

        if (xForce !== 0 || yForce !== 0) {
            requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(requestAnimationFrameId);
            requestAnimationFrameId = null;
        }
    };

    const showModal = (tattoo) => {
        setModalTattoo(tattoo);
    };

    const closeModal = () => {
        setModalTattoo(null);
    };

    return (
        <main onMouseMove={manageMouseMove} className="main">
            <div ref={plane1} className="plane">
                <div className="tattoovideo">
            <video autoPlay muted loop width="320" height="240">
    <source src="../assets/galerie2/vidfelix.mp4" type="video/mp4" />
    Your browser does not support the video tag.
</video>
</div>
                {tattooData.map((tattoo, index) => (
                    <img
                        key={index}
                        src={tattoo.image}
                        alt={tattoo.alt}
                        // width={100 + index * 50}
                        onClick={() => showModal(tattoo)}
                        className="tattoo-image"
                    />
                    
                ))}

            </div>
            <div className="title">
                <h1>Galerie.</h1>
            </div>

            {modalTattoo && (
                <Modal
                    image={modalTattoo.image}
                    alt={modalTattoo.alt}
                    onClose={closeModal}
                />
            )}
        </main>
    );
}

export default Test;
