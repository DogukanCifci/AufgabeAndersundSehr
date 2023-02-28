import Greeting from "./components/GreetingPart/Greeting";
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
        <Greeting />
        <Hello />
        <Projects />
        <Solutions />
        <Testimonials />
      </AuthContextProvider>
    </div>
  );
}

export default App;
