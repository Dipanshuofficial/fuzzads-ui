import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import PricingCards from "../components/PricingCards";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../styles/main.css";
import ChatBotComponent from "../components/chat/chatBotComponent";

const Homepage = () => {
  return (
    <div>
      <ChatBotComponent />
      <Navbar />
      <Hero />
      <PricingCards />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
