import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Skills from "../components/Skills";

const HomePage = () => {
  return (
    <>
      {/* This is header  */}
      <Header />
      {/* This is main body  */}
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <ContactMe />
      {/* This is main page  */}
      <Footer />
    </>
  );
};

export default HomePage;
