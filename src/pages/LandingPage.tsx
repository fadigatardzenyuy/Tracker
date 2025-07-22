import LandingPageContent from "../components/Landingpage/Landingpage";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <LandingPageContent />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
