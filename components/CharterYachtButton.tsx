"use client"

import { CharterYachtButtonProps } from "@/types";

const CharterYachtButton = (props: CharterYachtButtonProps) => {
  const {
    title,
    containerStyles,
    onHandleClick,
    btnType,
    textStyles,
  } = props

  return (
    <button
      disabled={ false }
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={onHandleClick}
    >
      <span className={`flex-1 ${textStyles }`}>
        {title}
      </span>
    </button>
  )
}

export default CharterYachtButton
