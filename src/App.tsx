import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Services from "./components/services/Services";

function App() {
  return (
    <main className="app h-full lg:h-screen w-screen flex flex-col lg:flex-row justify-center items-center p-10 gap-12">
      <section className="container w-full lg:w-[45vw] flex flex-col gap-5">
        <About />

        <ContactMe />
      </section>

      <Services />
    </main>
  );
}

export default App;
