import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../styles/Event.css';

const Event = () => {
    return (
        <main className="event-page" lang="fr">
            <Helmet>
                <title>Événements de Tatouage en Bretagne | Valkyr Ink</title>
                <meta name="description" content="Retrouvez mes événements de tatouage en Bretagne - Soirées tapas à Paimpol, flash days à Plévin, et afterworks tatouage à Saint-Brieuc. Flashs uniques disponibles et moments conviviaux." />
                <meta name="keywords" content="tatoueur Bretagne, événements tatouage, soirée tapas tatouage, tatouage Plévin, flash tattoo Paimpol, tattoo Saint-Brieuc, Valkyr Ink" />
                <link rel="canonical" href="https://valkyrink-tattoo.com/event" />
                <html lang="fr" />
                <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Event",
                        "name": "Événements de Tatouage Valkyr Ink",
                        "description": "Événements de tatouage en Bretagne - Soirées tapas à Paimpol, flash days à Plévin, et afterworks tatouage à Saint-Brieuc",
                        "organizer": {
                            "@type": "Organization",
                            "name": "Valkyr Ink",
                            "url": "https://valkyrink-tattoo.com"
                        },
                        "subEvents": [
                            {
                                "@type": "Event",
                                "name": "Soirée Tapas Tatouage",
                                "startDate": "2025-04-04T18:00:00+02:00",
                                "endDate": "2025-04-04T23:00:00+02:00",
                                "url": "https://valkyrink-tattoo.com/event/hauts-de-kerano"
                                "location": {
                                    "@type": "Place",
                                    "name": "Les Hauts de Kerano",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "addressLocality": "Paimpol",
                                        "addressRegion": "Bretagne",
                                        "addressCountry": "FR"
                                    }
                                }
                            }
                        ]
                    }
                `}
                </script>
            </Helmet>
            <NavBar />
            <div className="event-container">
                <h1>Evenements</h1>
                <section className="event-grid">
                    <article className="event-card">
                        <div className="event-date">
                            <span>04</span>
                            <span>AVR</span>
                        </div>
                        <div className="event-content">
                            <h3>Soirée Tapas</h3>
                            <p>Retrouvez-moi aux Hauts de Kerano à la soirée tapas sur Paimpol pour des créations uniques.</p>
                            <div className="event-details">
                                <div className="event-info">
                                    <span>Lieu:</span>
                                    <span>Paimpol</span>
                                </div>
                                <div className="event-info">
                                    <span>Horaires:</span>
                                    <span>18:00 - 23:00</span>
                                </div>
                            </div>
                            <Link to="/event/hauts-de-kerano">
                                <button className="event-button" aria-label="Voir les détails de la soirée tatouage à Paimpol">Plus d'infos</button>
                            </Link>
                        </div>
                    </article>

                    <article className="event-card">
                        <div className="event-date">
                            <span>À</span>
                            <span>VENIR</span>
                        </div>
                        <div className="event-content">
                            <h3>THE STAMP - SAINT-BRIEUC</h3>
                            <p>Afterwork, flashs tatouage à Saint-Brieuc. Designs uniques et ambiance conviviale.</p>
                            <div className="event-details">
                                <div className="event-info">
                                    <span>Lieu:</span>
                                    <span>Saint-Brieuc</span>
                                </div>
                                <div className="event-info">
                                    <span>Horaires:</span>
                                    <span></span>
                                </div>
                            </div>
                            <Link to="/event/stamp-saint-brieuc">
                                <button className="event-button" aria-label="Voir les détails de l'after work à Saint-Brieuc">Plus d'infos</button>
                            </Link>
                        </div>
                    </article>

                    <article className="event-card">
                        <div className="event-date">
                            <span>À</span>
                            <span>VENIR</span>
                        </div>
                        <div className="event-content">
                            <h3>Flash Day</h3>
                            <p>Journée spéciale avec des designs exclusifs à prix unique. Réservation recommandée.</p>
                            <div className="event-details">
                                <div className="event-info">
                                    <span>Lieu:</span>
                                    <span>Plévin</span>
                                </div>
                                <div className="event-info">
                                    <span>Horaires:</span>
                                    <span></span>
                                </div>
                            </div>
                            <Link to="/event/flash-day-plevin">
                                <button className="event-button" aria-label="Voir les détails du Flash day à Plévin">Plus d'infos</button>
                            </Link>
                        </div>
                    </article>
                </section>
            </div>
            <Footer />
        </main>
    );
};

export default Event;