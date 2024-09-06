import PropTypes from 'prop-types';
import React from 'react'
import "../styles/About.css"
import "../styles/NavBar.css"
import Mel2 from "../assets/mel2.jpg"
import ImgService from "../assets/cellela.jpg"
import ImgService2 from "../assets/imgmoiservice.jpg"
import Gris5 from "../assets/galerie/cheville.jpg"
import ImgService3 from '../assets/imgServices2.jpg'


const About = React.forwardRef((props, ref) => {
    const { anotherRef } = props;

    return (
        <section className="aboutContain">
            <div className="aboutContent" ref={ref}>
            <h2>Qui se cache derrière Valkyr’Ink ?</h2>
                <div id="quiSuisJe">
                    <img src={Mel2} alt="" />
                    <p>« Hey Mel, tu sais dessiner. Tu veux pas me tatouer ? » voilà comment cette folle aventure a commencé. <br/><br/>

                        Je m’appelle Mélanie, j’ai 25 ans et d’aussi loin que je me souvienne j’ai toujours eu un pinceau ou un crayon entre les mains. <br/>
                        J’ai toujours eu énormément d’inspiration artistique et une grande soif de création. En art plastique j’avais toujours tellement d’idées que la prof m’envoyait les élèves qui étaient en panne d’inspiration.<br/><br/> 
                        Je n’ai pas pu faire mes études dans l’art et me suis donc orientée vers des études littéraires, puis une fac d’anglais. J’ai rapidement arrêté parce que je m’ennuyais. J’ai travaillé dans pleins de domaines différents jusqu’à ce qu’un de mes amis viennent en vacances chez moi avec une machine à tatouer qu’il avait achetée pour le délire et dont il ne savait pas se servir.<br/>
                        Et là, grosse révélation ! J’avais enfin trouvé ma voie. Je me suis donc beaucoup entraînée (merci à toutes ces oranges, à toutes ces fausses peaux mais aussi à mes nombreux cobayes, je ne vous oublie pas) et j’ai passé ma formation hygiène et salubrité en décembre 2023. 
                        J’ai pu bénéficier des précieux conseils et de la connaissance d’excellents tatoueurs avant d’enfin me décider et de me lancer à mon compte.<br/><br/>
                        <span>Pourquoi Valkyr’Ink ? </span><br/><br/>

                        J’ai longuement réfléchi à mon nom d’artiste et le nom m’est venu en tête d’un coup;
                        « Valkyr’Ink ».
                        La Valkyrie, la femme guerrière, pour ne jamais oublié tout ce que j’ai traversé dans ma vie, pour m’inspirer à toujours me battre pour atteindre mes buts et me servir de toutes mes batailles comme d’une force et d’un moteur pour atteindre mes rêves et devenir la meilleure version possible de moi-même. Mais aussi en hommage à chaque guerrier qui sommeil en chacun de nous, en chaque homme, en chaque femme. Pour nous rappeler que peu importe ce qu’on traverse il faut se battre pour avoir la vie qui nous inspire. 
                        <br/><br/>
                        Et quoi de mieux qu’un tatouage pour marquer toutes ces épreuves, toutes ces expériences, tous ces moments de vie afin de ne jamais oublier d’où nous venons et où nous avons envie d’aller. Encrer en vous toutes ces batailles est vraiment un honneur et le plus beau métier dont je pouvais rêver. 
                        <br/><br/>
                        Merci de m’inspirer chaque jour avec vos projets plus beaux les uns que les autres.
                    </p>
                </div>
            </div>
            <div className="containerp">
                <div className="whitep">
                    <div className="insta">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="20px"><path fill='white' d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        <p>Valkyr__ink</p>
                    </div>
                    <div className="insta">
                        <p id='pAnim'>Tattoo Artist.</p>
                    </div>
                    <div className="insta">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="20px"><path fill='white' d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        <p>Valkyr__ink</p>
                    </div>
                </div>
            </div>
            <div className="aboutContent service" ref={anotherRef}>
                <div id="service-txt">
                    <h2>Services</h2>
                    <p>Artiste tatoueuse réalisant des œuvres aux formes et styles variés sur la peau, en déposant de l’encre pigmentée à l’aide d’un dermographe.
                    Cet appareil électrique est composé d’une aiguille qui dépose l’encre entre le derme et l’épiderme, entre 2 et 4 millimètres de profondeur.
                    <br />
                    Je tatoue principalement en noir et gris. Les motifs colorés sont au cas par cas.<br />
                    Je ne pratique pas la pose de piercings.
                    </p>
                    <div className="prez-services">
                        <img src={Gris5} alt=""/>
                        <img src={ImgService2} alt=""/>
                        <img src={ImgService3} alt=""/>
                    </div>
                </div>
                <img src={ImgService} alt="" />
            </div>
        </section>
    );
});
About.propTypes = {
    anotherRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};
About.displayName = "About";
export default (About);