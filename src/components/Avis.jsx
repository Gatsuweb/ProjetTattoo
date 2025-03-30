import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Ornement from '../assets/galerie/ornement.png';
import Ornements from '../assets/galerie/ornements.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/Avis.css';

const Avis = () => {
    const avis = [
        {
            id: 1,
            nom: "Ivan D.",
            commentaire: "J'ai réalisé mon premier tatouage ici et j'ai vraiment adoré. Je retournerais ici pour mes autres projets ça s'est certain ! Mel est une personne attentive, bienveillante et très appliquée dans ce qu'elle fait, je peux que recommander ces services. Elle dispose d'un super site internet en plus, très visuel et a son image",
            note: 5
        },
        {
            id: 2,
            nom: "Vincent B.",
            commentaire: "Mélanie est très professionnelle, de bons conseils, et à l'écoute. Ce n'est pas mon premier tatouage, mais c'est la première fois que je retourne voir la même personne pour autre chose que des retouches ! Les tatouages sont assez fins, ce qui garantit, en tout cas pour ma part, une cicatrisation rapide et sans douleur.",
            note: 5
        },
        {
            id: 3,
            nom: "Maël M.",
            commentaire: "Mélanie est une tatoueuse non seulement très douée, mais également une personne extraordinaire, bienveillante et à l’écoute. Se faire tatouer prend tout son sens quand on le fait avec elle, je recommande vivement à celles et ceux qui ont un projet en tête ! Foncez",
            note: 5
        },
        {
            id: 4,
            nom: "Heloïse G.",
            commentaire: "Incroyable moment, les tatouages sont super beaux et fins. La tatoueuse est géniale !!",
            note: 5
        },
        {
            id: 5,
            nom: "Audrey T.",
            commentaire: "Découverte par hasard pendant un événement et gros coup de coeur pour un flash que j'attendais depuis 10 ans 🤩 Séance incroyable, pleine de douceur et de bienveillance. Mon flash est magnifique, encore plus depuis les petites retouches. Merci à toi et à très vite c'est certain !",
            note: 5
        }
    ];

    const truncateText = (text, lines = 3) => {
        const words = text.split(' ');
        const truncated = words.slice(0, 16).join(' '); // Approximately 3 lines
        return truncated + '...';
    };

    return (
        <div className="avis-container">
            <h2>Avis Clients</h2>
            <div className='avis-content'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="avis-carousel"
            >
                {avis.map((avis) => (
                    <SwiperSlide key={avis.id}>
                        <div className="avis-card">
                            <img className='avis-ornement' src={Ornement} alt="" height={600} width={800}/>
                            <h3>{avis.nom}</h3>
                            <div className="rating">
                                {'✯'.repeat(avis.note)}
                                {'☆'.repeat(5 - avis.note)}
                            </div>
                            <p>{truncateText(avis.commentaire)}</p>                            
                            <div className="google-reviews-button">
                            <a href="https://www.google.com/search?sca_esv=0bc0bb76be1c03af&rlz=1C1VDKB_frFR1088FR1088&sxsrf=AHTn8zpXaQsUqjxyWNzHPxhBzmJg5B1Y7g:1743271264843&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzZxWwm9YLJrpWWvChl9u_wo3zVHheslYi55lt24nYw0tsCdlMSN__01jaLqoN1lkc_6VRXrieejeeuVQALqq5Y3FVuyR&q=Valkyr__Ink+Avis&sa=X&ved=2ahUKEwiP0_PD76-MAxVIQ6QEHSpWPCcQ0bkNegQIOBAE&biw=1536&bih=730&dpr=1.25" target="_blank" rel="noopener noreferrer">
                             Voir plus
                            </a>
                            
                            </div>

                        </div>
                        <img className='avis-ornements' src={Ornements} alt="" height={600} width={800}/>
                    </SwiperSlide>
                ))}
            </Swiper>
     
            </div>
        </div>
    );
};

export default Avis;