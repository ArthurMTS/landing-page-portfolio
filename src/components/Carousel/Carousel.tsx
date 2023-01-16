import { Icon } from "components/Icon";
import React from "react";
import styles from "./Carousel.styles";

interface CarouselItemProps {
  img: string;
}

interface CarouselProps {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
  width: string;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ img }) => {
  const { CarouselImage } = styles();

  return (
    <CarouselImage src={img} />
  );
};

export const Carousel: React.FC<CarouselProps> = ({
  children,
  width
}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const { CarouselStyled, CarouselInner, Navigate, CircleButton } = styles();

  React.useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0)
      newIndex = React.Children.count(children) - 1;
    else if (newIndex > React.Children.count(children) - 1)
      newIndex = 0;

    setActiveIndex(newIndex);
  }

  const onLeftChevronClick = () => 
    updateIndex(activeIndex - 1);

  const onRightChevronClick = () =>
    updateIndex(activeIndex + 1);

  return (
    <CarouselStyled style={{ width }}>
      <CarouselInner style={{ transform: `translateX(-${activeIndex * 100}%)` }} >
        {children}
      </CarouselInner>
      <Navigate>
        <Icon onClick={onLeftChevronClick} className="left" name="chevronLeft" />
        {children.map((_, index) => {
          return (
            <CircleButton key={index} className={activeIndex === index ? "active" : ""} onClick={() => updateIndex(index)}></CircleButton>
          );
        })}
        <Icon onClick={onRightChevronClick} className="right" name="chevronRight" />
      </Navigate>
    </CarouselStyled>
  );
};
