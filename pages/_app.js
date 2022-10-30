import "../styles/globals.css";
import "../styles/footer.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection"
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <HeroSection/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
