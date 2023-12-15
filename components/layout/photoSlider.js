import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import class1 from "@/public/images/class1.jpg";
import class2 from "@/public/images/class2.png";
import class3 from "@/public/images/class3.png";
import class4 from "@/public/images/class4.png";
import class5 from "@/public/images/class5.png";
import class6 from "@/public/images/class6.png";
import class7 from "@/public/images/class7.png";
import class8 from "@/public/images/class8.png";
import class9 from "@/public/images/class9.png";
import class10 from "@/public/images/class10.jpg";
import classes from "@/components/layout/photoSlider.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  const updatedStyle = {
    ...style,
    display: "block",
    background: "transparent",
    padding: "3px",
    borderRadius: "50%",
    width: "25px",
    height: "25px",
    zIndex: 2,
    marginRight: "50px",
  };
  return <div className={className} style={updatedStyle} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  const updatedStyle = {
    ...style,
    display: "block",
    background: "transparent",
    padding: "3px",
    // borderRadius: "50%",
    width: "25px",
    height: "25px",
    marginLeft: "50px",
    zIndex: 2,
  };

  return <div className={className} style={updatedStyle} onClick={onClick} />;
}

export default function PhotoSlider() {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    variableWidth: true,
    zIndex: 4,
    centerMode: true,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div class={classes.slide}>
        <h3>
          <Image src={class1} width={350} height={300} />
        </h3>
      </div>
      <div class={classes.slide}>
        <h3>
          <Image src={class2} width={300} height={300} />
        </h3>
      </div>
      <div class={classes.slide}>
        <h3>
          <Image src={class3} width={350} height={300} />
        </h3>
      </div>
      <div class={classes.slide}>
        <h3>
          <Image src={class4} width={350} height={300} />
        </h3>
      </div>
      <div class={classes.slide}>
        <h3>
          <Image src={class5} width={350} height={300} />
        </h3>
      </div>
      <div class={classes.slide}>
        <h3>
          <Image src={class6} width={350} height={300} />
        </h3>
      </div>
      <div class={classes.slide}>
        <h3>
          <Image src={class7} width={350} height={300} />
        </h3>
      </div>
      <div class={classes.slide}>
        <h3>
          <Image src={class8} width={350} height={300} />
        </h3>
      </div>
      <div class={classes.slide}>
        <h3>
          <Image src={class9} width={300} height={300} />
        </h3>
      </div>
      <div class={classes.slide}>
        <h3>
          <Image src={class10} width={300} height={300} />
        </h3>
      </div>
    </Slider>
  );
}
