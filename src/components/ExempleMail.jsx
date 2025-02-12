import Inspi from "../assets/contact/inspi1.jpeg"
import Inspi2 from "../assets/contact/inspi2.jpeg"
import "../styles/ExempleMail.css"

function ExempleMail () {
    return(
    <div className="exemple-mail">
        <h2>Exemple de demande</h2>
        <p>
        <span>Hello Melanie,</span> <br /><br />
        Je suis vers Carhaix en ce moment et je voudrais savoir si vous êtes disponible pour un rendez-vous entre le 23 et le 27 septembre ?<br />
        J’aimerais me faire tatouer le signe astrologique du bélier sur le devant de ma cuisse droite. <br />
        J’ai déjà 3 tatouages sur cette jambe. En pièce jointe, je vous ai envoyé des inspirations de ce que j’aimerais réaliser. <br />
        Ce sont des designs trouvés sur internet. Pour la taille, j’aimerais environ 15 cm de hauteur et 10 cm de largeur, au milieu de la jambe.<br />
        Je suis ouverte à d’autres suggestions qui pourraient inclure des ajouts ou des modifications du design.<br /><br />
        Faites-moi savoir vos disponibilités et si ce type de projet est dans vos cordes.<br />
        Merci beaucoup par avance.<br /><br />
        Bonne journée,<br /><br />
        Roxana
            <div className="inspi-mail">
                <img src={Inspi} alt="inspirations-mail" width="125px" />
                <img src={Inspi2} alt="inspirations-mail" width="125px"/>
            </div>
        </p>
   </div>
    )
}

export default ExempleMail;