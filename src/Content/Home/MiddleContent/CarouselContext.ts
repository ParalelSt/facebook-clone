import { createContext } from "react";
import { carouselDataType } from "./MiddleContent";

export interface CarouselContextProps {
  carouselData: carouselDataType[];
  setCarouselData: (carouselData: carouselDataType[]) => void;
}

const CarouselContext = createContext<CarouselContextProps | undefined>(
  undefined
);

export default CarouselContext;
