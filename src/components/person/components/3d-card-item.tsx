"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../ui/3d-card";
import FlipWords from "./flip-words-item";

export default function ThreeDCardItem() {
  return (
    <CardContainer className="absolute z-50 top-[270px] w-[400px]">
      <CardBody className="bg-gray-50  group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
        >
          <FlipWords/>
        </CardItem>
        <CardItem   translateZ="100"  rotateX={30}  className="w-full mt-4">
          <Image
            src="/img/temp.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}