import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import SectionB from "./components/SectionB";
import SectionA from "./components/SectionA";
import SectionC from "./components/SectionC";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Content /> */}
      <SectionA />
      <SectionB />
      <SectionC />
      <Footer />
    </div>
  );
}

export default App;
