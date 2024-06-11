interface ServiceCardProps {
  id: number;
  img: string;
  title: string;
  description: string;
}

const ServiceCard = ({ service }: { service: ServiceCardProps }) => {
  return (
    <article className="bg-[#112949] p-8 rounded-[10px]">
      <div className="container flex flex-start gap-5 items-center">
        <img src={service.img} alt={`${service.title} image`} />

        <p className=" text-[#3CC3F2] text-lg">{service.title}</p>
      </div>

      <p className=" text-white text-lg">{service.description}</p>
    </article>
  );
};

export default ServiceCard;
