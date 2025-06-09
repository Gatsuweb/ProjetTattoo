
import { Helmet } from "react-helmet-async";
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import conventionImage from '../../assets/event/event-hauts.jpg';
import '../../styles/EventArticle.css';

const HautKerano = () => {
    // Définir des variables pour faciliter la maintenance des informations d'événement
    const eventName = "Soirée Tatouage & Tapas aux Hauts de Kerano";
    const eventDate = "2025-06-06";
    const eventDescription = "Rejoignez-nous chaque premier vendredi du mois aux Hauts de Kerano à Paimpol pour une soirée unique mêlant tatouage et tapas. Flash tattoos et projets personnalisés disponibles dans une ambiance conviviale.";
    
    return (
        <div className="event-article-page" itemScope itemType="https://schema.org/Event">
            <Helmet>
                <title>{eventName} | Valkyr Ink Tattoo Bretagne</title>
                <meta name="description" content={eventDescription} />
                <meta name="keywords" content="tatoueur paimpol, flash tattoo, événement paimpol, les hauts de kerano, valkyr ink, tattoo bretagne, événement tatouage, artiste tatoueur, tatouage Côtes-d'Armor" />
                
                {/* Open Graph Tags for social sharing */}
                <meta property="og:title" content={eventName} />
                <meta property="og:description" content={eventDescription} />
                <meta property="og:image" content={conventionImage} />
                <meta property="og:type" content="event" />
                <meta property="og:url" content="https://valkyrink-tattoo.com/events/hauts-de-kerano" />
                <meta property="og:site_name" content="Valkyr Ink Tattoo" />
                
                {/* Twitter Card data */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={eventName} />
                <meta name="twitter:description" content={eventDescription} />
                <meta name="twitter:image" content={conventionImage} />
                

                <link rel="canonical" href="https://valkyrink-tattoo.com/events/hauts-de-kerano" />
                

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Event",
                        "name": eventName,
                        "description": eventDescription,
                        "image": conventionImage,
                        "startDate": `${eventDate}T18:00`,
                        "endDate": `${eventDate}T23:00`,
                        "eventStatus": "https://schema.org/EventScheduled",
                        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                        "location": {
                            "@type": "Place",
                            "name": "Les Hauts de Kerano",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "2 Chemin de Kergroas",
                                "addressLocality": "Paimpol",
                                "postalCode": "22500",
                                "addressRegion": "Bretagne",
                                "addressCountry": "FR"
                            }
                        },
                        "organizer": {
                            "@type": "Organization",
                            "name": "Valkyr Ink",
                            "url": "https://valkyrink-tattoo.com"
                        },
                        "performer": {
                            "@type": "Person",
                            "name": "Valkyr Ink",
                            "jobTitle": "Artiste Tatoueur"
                        }
                    })}
                </script>
            </Helmet>
            
            <NavBar />
            
            <main className="event-article-container">
                <header className="event-article-header">
                    <div className="event-date-large">
                        <time dateTime={eventDate}>
                            <span>06</span>
                            <span>JUIN</span>
                        </time>
                    </div>
                    <h1 itemProp="name">Soiree Tatouage et Tapas aux Hauts de Kerano</h1>
                </header>
                
                <div className="event-article-content">
                    <div className="event-image-container">
                        <img src={conventionImage} alt="Soirée Tatouage aux Hauts de Kerano - Valkyr Ink" className="event-main-image" itemProp="image" />
                    </div>

                    <section className="event-info-box">
                        <div className="info-item">
                            <h3>Lieu</h3>
                            <p itemProp="location">2 Chem. de Kergroas, 22500 Paimpol</p>
                        </div>
                        <div className="info-item">
                            <h3>Horaires</h3>
                            <p>
                                <time itemProp="startDate" dateTime={`${eventDate}T10:00`}>18:00</time> - 
                                <time itemProp="endDate" dateTime={`${eventDate}T20:00`}>23:00</time>
                            </p>
                        </div>
                        <div className="info-item">
                            <h3>Tarif</h3>
                            <p itemProp="offers" itemScope itemType="https://schema.org/Offer">
                                À partir de: <span itemProp="price">60</span><span itemProp="priceCurrency">€</span>/flash
                            </p>
                        </div>
                    </section>

                    <section className="event-description">
                        <h2>À propos de l&apos;événement</h2>
                        <p itemProp="description">Je serai présente chaque premier vendredi du mois à la soirée tapas des Hauts de Kerano à Paimpol. Une occasion unique de combiner l&apos;art du tatouage avec une ambiance conviviale et une délicieuse expérience culinaire.</p>
                        
                        <h3>Ce qui vous attend</h3>
                        <ul>
                            <li>Dégustation de tapas uniques et délicieux</li>
                            <li>Flash tattoos disponibles parmi un catalogue varié</li>
                            <li>Possibilité de tatouages personnalisés sur demande</li>
                            <li>Ambiance chaleureuse et créative</li>
                            <li>Miroirs gravés à la main disponibles</li>
                        </ul>

                        <h3>Comment réserver</h3>
                        <p>Pas de réservation nécessaire pour les flashs tattoos. Pour tous projets personnalisés, vous pouvez me contacter via Instagram <a href="https://www.instagram.com/Valkyr__ink/" target="_blank" rel="noopener">@Valkyr__ink</a> ou directement sur place pour le mois suivant. Je vous conseille de venir tôt pour avoir plus de chances d'obtenir un créneau.</p>
                    </section>

                    <div className="event-cta">
                        <a href="https://www.instagram.com/Valkyr__ink/" className="primary-button" rel="noopener">Réserver maintenant</a>
                        <a href="mailto:valkyrink@outlook.com" className="secondary-button">Contacter l'artiste</a>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
};

export default HautKerano;