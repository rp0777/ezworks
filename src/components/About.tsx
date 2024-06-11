import Logo from "../assets/fullLogo.png";

const About = () => {
  return (
    <article className="about">
      <img className=" w-[30vww]" src={Logo} alt="Full Logo EZ Works" />

      <header>
        <h2 className=" text-2xl">Suite Of Business Support Services</h2>
      </header>

      <p className=" text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed
      </p>
    </article>
  );
};

export default About;
