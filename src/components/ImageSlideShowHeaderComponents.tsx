import React, { useEffect, useState } from "react";
import { portfolio } from "../pages/DataSupport";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./dist/SlideShowComponent.css";
import withDataSlideShow from "./utils/withDataSlideShow";

function ImageSlideShowHeaderComponents(props: any) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoScroll = true;
  let slideInterval: any;
  let slideLength: any;
  let intervalTime = 3000;
  let dynamicNumberIdOpenSlide = 0;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  // if (dynamicNumberIdOpenSlide !== prop.getValueNumber) {
  //   dynamicNumberIdOpenSlide = Number(prop.getValueNumber);
  // }

  const HandleIdPortfolioSlid = (e: any) => {
    if (dynamicNumberIdOpenSlide !== 0) {
      console.log(props.getValueNumber);
    } else {
      console.log(props.getValueNumber);
      dynamicNumberIdOpenSlide = props.getValueNumber;
      setCurrentSlide(dynamicNumberIdOpenSlide);
    }
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const imageSlide = portfolio.map((val, key) => {
    slideLength = portfolio.length;
    return (
      <>
        <div
          className={`${
            key === currentSlide ? "slide current" : "slide"
          } w-full`}
          key={key}
        >
          {key === currentSlide && (
            <div className="h-full flex justify-center items-center object-contain ">
              <img
                src={`${process.env.PUBLIC_URL}/portfolio/mockup/${portfolio[key]}`}
                alt="slide"
                className="h-full object-contain"
              />
            </div>
          )}
        </div>
      </>
    );
  });

  return (
    <>
      <section className={` ${props.className} self-end right-10`}>
        <div className="w-full h-fit bg-fuchsia-500">
          <div className="flex flex-row justify-center items-end h-fit md:h-[50%] w-32 md:w-40 lg:w-96 snap-x bg-black bg-opacity-70 lg:items-center">
            <div className=" ">{imageSlide}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default withDataSlideShow(ImageSlideShowHeaderComponents);
