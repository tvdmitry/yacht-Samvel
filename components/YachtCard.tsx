"use client"

import {useState} from "react";
import CharterYachtButton from "./CharterYachtButton";
import { YachtProps } from "@/types";
import Image from "next/image";
import YachtDetails from "./YachtDetails";
import YachtFeedback from "./YachtFeedback";
import {AiFillSetting} from "react-icons/ai";

const YachtCard = ({ yacht }: YachtProps) => {
  const { name, price, imageSrc } = yacht;

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {name}
        </h2>

        <button
          onClick={() => setIsOpen(true)}
        >
        <AiFillSetting
          size={24}
        />
        </button>
      </div>

      <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
        {price}
        <span className='self-start text-[14px] leading-[17px] font-extrabold ml-1'>&#8381; / час</span>
      </p>


      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={imageSrc} alt='yacht model' fill priority className='object-contain' />
      </div>

      <div className='relative flex w-full mt-2 h-7'>
        <div className="car-card__btn-container">
          <CharterYachtButton
            title='АРЕНДОВАТЬ'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold tracking-[.02em]'
            onHandleClick={() => setIsOpenForm(true)}
          />
        </div>
      </div>

    <YachtDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} yacht={yacht} />
    <YachtFeedback isOpenForm={isOpenForm} closeModal={() => setIsOpenForm(false)} />
    </div>
  )
}

export default YachtCard
