import { servicesData } from "../../data/services";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="services w-full grid grid-cols-3 gap-4">
      {servicesData.map((service) => (
        <div key={service.id}>
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
};

export default Services;
