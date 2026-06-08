/* eslint-disable react/prop-types */
import { Navigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import LocalSeoContact from "../components/localSeo/LocalSeoContact";
import LocalSeoFaq from "../components/localSeo/LocalSeoFaq";
import LocalSeoGallery from "../components/localSeo/LocalSeoGallery";
import LocalSeoHelmet from "../components/localSeo/LocalSeoHelmet";
import LocalSeoHero from "../components/localSeo/LocalSeoHero";
import LocalSeoSections from "../components/localSeo/LocalSeoSections";
import { getLocalSeoPage, isPagePublished } from "../data/localSeoPages";
import "../styles/LocalSeoPage.css";

function LocalSeoPage({ slug }) {
  const params = useParams();
  const page = getLocalSeoPage(slug || params.slug);

  if (!page || !isPagePublished(page)) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="localSeoPage">
      <LocalSeoHelmet page={page} />
      <NavBar />
      <LocalSeoHero page={page} />
      <LocalSeoSections page={page} />
      <LocalSeoGallery page={page} />
      <LocalSeoFaq page={page} />
      <LocalSeoContact page={page} />
      <Footer />
    </div>
  );
}

export default LocalSeoPage;
