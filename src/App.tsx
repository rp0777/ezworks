import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Services from "./components/services/Services";

function App() {
  return (
    <main className="app h-screen w-screen flex justify-center items-center p-10 gap-12">
      <section className="container w-[45vw]">
        <About />

        <ContactMe />
      </section>

      <Services />
    </main>
  );
}

export default App;
