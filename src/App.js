import Events from "./components/EventsPart/Events";
import Footer from "./components/Footer";
import Greeting from "./components/GreetingPart/Greeting";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Solutions from "./components/SolutionsPart/Solutions";
import Testimonials from "./components/TestimonialsPart/Testimonials";
import AuthContextProvider from "./context/AuthContextProvider";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Header />
        <Greeting />
        <Hello />
        <Projects />
        <Solutions />
        <Testimonials />
        <Events />
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
