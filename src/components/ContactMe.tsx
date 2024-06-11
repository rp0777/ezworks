import axios, { AxiosError } from "axios";
import { useState } from "react";

const ContactMe = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter an Email Address!");
      return;
    }

    try {
      const response = await axios.post("http://34.225.132.160:8002/api", {
        email,
      });

      console.log("Response :- ", response.data);
    } catch (e) {
      const error = e as AxiosError;
      console.error("Error submitting form", error);
      setEmailError(`Error : ${error.message}`);
    }
  };
  return (
    <form
      className=" flex flex-col justify-between items-center gap-4"
      onSubmit={handleSubmit}
    >
      <div className=" w-full flex flex-col lg:flex-row justify-center items-center gap-4">
        <input
          className=" w-full p-2 border border-gray-400 rounded-md"
          type="text"
          value={email}
          onChange={async (e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />

        <button
          className=" w-4/12 bg-[#EA7B2C] p-2 rounded-md text-white"
          type="submit"
        >
          Contact Me
        </button>
      </div>

      {emailError && <p>{emailError}</p>}
    </form>
  );
};

export default ContactMe;
