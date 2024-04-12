"use client";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";

export default function Slide() {
  const responsive = {
    0: { items: 2 },
    500: { items: 4 },
    1024: { items: 7, itemsFit: "contain" },
  };
  const items = [
    <div>
      <Image src="/cert1.png" width={100} height={30} alt="" />
    </div>,
    <div>
      <Image src="/cert2.png" width={100} height={30} alt="" />
    </div>,
    <div>
      <Image src="/cert3.png" width={100} height={30} alt="" />
    </div>,
    <div>
      <Image src="/cert4.png" width={100} height={30} alt="" />
    </div>,
    <div>
      <Image src="/cert5.png" width={100} height={30} alt="" />
    </div>,
    <div>
      <Image src="/cert6.png" width={100} height={30} alt="" />
    </div>,
  ];
  return (
    <div style={{ maxWidth: "1110px", margin: "auto", padding: "0 20px" }}>
      <AliceCarousel
        responsive={responsive}
        mouseTracking
        items={items}
        autoPlay={true}
        animationDuration={1000}
        autoPlayInterval={5000}
        autoPlayControls={false}
        infinite={true}
        keyboardNavigation={true}
        disableButtonsControls={true}
        disableDotsControls={true}
        itemsFit={"contain"}
      />
    </div>
  );
}
