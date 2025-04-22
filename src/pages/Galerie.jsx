import { Helmet } from "react-helmet";
import NavBar from "../components/NavBar";
import Test from "../components/Test";

function Galerie() {

  return (
    <>
         <Helmet>
        <title>Galerie de tatouages - Valkyr Ink Tattoo</title>
        <meta 
          name="description" 
          content="Découvrez la galerie des œuvres de Valkyr Ink Tattoo à Plévin. Tatouages et créations uniques en noirs et en couleurs."
        />
      </Helmet>

    <section className="galerieContainer">
        <NavBar />
        <Test />
    </section>
    </>
  );
}

export default Galerie;
