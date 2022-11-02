import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Service/Service";
import Charts from "./components/Chart/Charts";
import RingLoader from "react-spinners/RingLoader";
import Team from "./components/Team/Team";
import CoinTable02 from "./components/Market/CoinTable02";
import Faq from "./components/FAQ/Faq";
import ContactUs from "./components/ContactUs/ContactUs";
import Coursel from "./components/Coursel/Coursel";
import { Footer } from "./components/Footer/Footer";
import { Blog } from "./components/Blog/Blog";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <RingLoader color={"#F2CF66"} loading={loading} size={100} />
        </div>
      ) : (
        <>
          <Navbar />
          <Header />
          <Coursel />
          <Service />
          <Charts />
          <CoinTable02 />
          <Team />
          <Faq />
          <Blog />
          <ContactUs />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
