import { servicesData } from "../../data/services";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="services w-full flex flex-col justify-center items-center lg:grid lg:grid-cols-3 gap-4">
      {servicesData.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </section>
  );
};

export default Services;
