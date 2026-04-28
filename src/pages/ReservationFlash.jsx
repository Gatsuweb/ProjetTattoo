import { useState } from "react";
import NavBar from "../components/NavBar";
import { Helmet } from "react-helmet-async";

import "../styles/ReservationFlash.css";

function ReservationFlash() {
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        flashId: "",
        message: "",
        acceptConditions: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ici, vous pourriez ajouter la logique pour envoyer les données du formulaire
        // par exemple avec un service comme EmailJS ou en les envoyant à votre backend
        console.log("Données du formulaire:", formData);
        alert("Merci pour votre réservation ! Nous vous contacterons rapidement.");
    };

    return (
        <>
            <Helmet>
                <title>Réservation de Flash - Valkyr Ink Tattoo</title>
                <meta
                    name="description"
                    content="Réservez votre flash de tatouage unique créé par Valkyr Ink à Plévin, près de Carhaix. Remplissez le formulaire pour sécuriser votre réservation."
                />
            </Helmet>
            <div className="reservation-container">
                <NavBar />
                <div className="reservation-content">
                    <h1>Réservation de Flash</h1>
                    <p className="reservation-intro">
                        Remplissez ce formulaire pour réserver le flash de votre choix. 
                        Je vous contacterai rapidement pour confirmer la disponibilité et fixer un rendez-vous.
                    </p>

                    <form className="reservation-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nom">Nom *</label>
                            <input
                                type="text"
                                id="nom"
                                name="nom"
                                value={formData.nom}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="prenom">Prénom *</label>
                            <input
                                type="text"
                                id="prenom"
                                name="prenom"
                                value={formData.prenom}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="telephone">Téléphone</label>
                            <input
                                type="tel"
                                id="telephone"
                                name="telephone"
                                value={formData.telephone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="flashId">Référence du flash (si connue)</label>
                            <input
                                type="text"
                                id="flashId"
                                name="flashId"
                                value={formData.flashId}
                                onChange={handleChange}
                                placeholder="Ex: Flash #12"
                            />
                        </div>

                        <div className="form-group full-width">
                            <label htmlFor="message">Message (décrivez le flash que vous souhaitez réserver) *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <div className="form-group checkbox-group">
                            <input
                                type="checkbox"
                                id="acceptConditions"
                                name="acceptConditions"
                                checked={formData.acceptConditions}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="acceptConditions">
                                J'accepte les conditions de réservation et comprends qu'un acompte sera demandé pour confirmer ma réservation *
                            </label>
                        </div>

                        <button type="submit" className="submit-button">
                            Envoyer ma demande
                        </button>
                    </form>

                    <div className="reservation-info">
                        <h2>Informations importantes</h2>
                        <ul>
                            <li>Un acompte de 30% sera demandé pour confirmer votre réservation</li>
                            <li>Les flashs sont réalisés tels qu'ils sont présentés, avec des ajustements mineurs possibles</li>
                            <li>La taille et l'emplacement du tatouage seront discutés lors de la prise de rendez-vous</li>
                            <li>En cas d'annulation moins de 48h avant le rendez-vous, l'acompte ne sera pas remboursé</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReservationFlash;