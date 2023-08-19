"use client"
import CharterYachtButton from "./CharterYachtButton";
import {useState} from "react";
import YachtFeedback from "@/components/YachtFeedback";
import Image from "next/image";

const Hero = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Отплывите к незабываемому приключению с нашей <span className="text-blue-600/100"> эксклюзивной арендой яхт </span>  и насладитесь роскошью и свободой на водных горизонтах
        </h1>

        <p className="hero__subtitle">
          Откройте для себя истинное удовольствие яхтинга
        </p>

        <CharterYachtButton
          title="АРЕНДОВАТЬ ЯХТУ"
          textStyles={'tracking-[.03em]'}
          containerStyles="bg-primary-blue text-white rounded-full mt-10 text-xl font-bold"
          onHandleClick={ () => setIsOpenForm(true) }
        />

        <YachtFeedback isOpenForm={isOpenForm} closeModal={() => setIsOpenForm(false)} />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/yacht-bg.png" alt="hero" fill className="object-contain h-48" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero
