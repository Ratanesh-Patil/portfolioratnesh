import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import "./App.css";
import Certification from "./components/Certification";


function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-gray-100 bg-[url('https://img.freepik.com/free-vector/gradient-purple-waves-background_23-2149108586.jpg?t=st=1735731750~exp=1735735350~hmac=a77163b88b3554ba2f43ddc1da89c00e3746599ec61e972ffde677bc6e3838d5&w=1060')] bg-cover bg-fixed bg-center">
      {/* <div className="min-h-screen bg-gray-900 text-gray-100 bg-[url('https://img.freepik.com/free-vector/colorful-equalizer-wave-wallpaper-design_23-2148437680.jpg?t=st=1734888027~exp=1734891627~hmac=75785abce0f894b6c9c12ce18cae5f2c8d51a6349676e13d3f324eb48c857516&w=1060')] bg-cover bg-fixed bg-center"> */}
        <div className="min-h-screen bg-black bg-opacity-70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Header />
            <main className="py-8">
              <Hero />
              <Experience />
              <Skills />
              <Education />
              <Projects />
              <Certification/>
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
