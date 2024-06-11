import Presentation from "../assets/presentation.png";
import Production from "../assets/production.png";
import Translation from "../assets/translation.png";
import GraphicDesign from "../assets/graphicDesign.png";
import Research from "../assets/research.png";
import Data from "../assets/data.png";

interface Service {
  id: number;
  img: string;
  title: string;
  description: string;
}

export const servicesData: Service[] = [
  {
    id: 1,
    img: Presentation,
    title: "Presentation Design",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    img: Production,
    title: "Audio - Visual Production",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    img: Translation,
    title: "Translation Services",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    id: 4,
    img: GraphicDesign,
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    id: 5,
    img: Research,
    title: "Research & Analytics",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    id: 6,
    img: Data,
    title: "Data Processing",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
];
