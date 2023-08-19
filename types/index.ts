import {MouseEventHandler} from "react";

export interface CharterYachtButtonProps {
  title: string;
  containerStyles?: string;
  onHandleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
  textStyles?: string;
  isDisabled?: boolean;
}

export interface YachtProps {
  name: string;
  price: number;
  imageSrc: string;
  imageDescriptionOne: string;
  imageDescriptionTwo: string;
  imageDescriptionThree: string;
  imageDescriptionFour: string;
  description: any[];
}

export interface YachtDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  yacht: YachtProps;
}

export interface ShowMoreProps {
  onHandleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface YachtFeedbackProps {
  isOpenForm: boolean;
  closeModal: () => void;
}
