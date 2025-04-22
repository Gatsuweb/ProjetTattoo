import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Ornement from '../../assets/galerie/ornement.png';
import Ornements from '../../assets/galerie/ornements.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../styles/Avis.css';

const ReviewSection = () => {
    const avis = [
        {
          id: 1,
          nom: "Paul R.",
          ville: "Carhaix",
          commentaire: "Tatoueuse très professionnelle et très talentueuse. Je recommande fortement",
          note: 5
        },
        {
          id: 2,
          nom: "Erwan L.",
          ville: "Cléden-Poher",
          commentaire: "Excellent travail , très satisfais , tatoueuse divertissante et qui met en confiance , je recommande !!",
          note: 5
        },
        {
          id: 3,
          nom: "Héloïse G.",
          ville: "Plounévézel",
          commentaire: "Incroyable moment, les tatouages sont super beaux et fins. La tatoueuse est géniale !!",
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
            <h2>Vos avis</h2>
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
                        <img className='avis-ornements' src={Ornements} alt="décoration ornementals des cards avis" height={600} width={800}/>
                    </SwiperSlide>
                ))}
            </Swiper>
     
            </div>
        </div>
    );
};

export default ReviewSection;