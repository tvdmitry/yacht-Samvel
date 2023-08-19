"use client";

import {ShowMoreProps} from "@/types";

const ShowMore = ({ onHandleClick }: ShowMoreProps) => {

  return (
    <div className="flex justify-center mt-2">
      <button
        className={`custom-btn bg-primary-blue text-white rounded-full mt-10 text-xl font-bold tracking-[.03em]`}
        onClick={onHandleClick}
      >
      <span className={`flex-1 text-white text-[14px] leading-[17px] font-bold`}>
        ПОКАЗАТЬ ЕЩЕ
      </span>
      </button>
    </div>
  );
};

export default ShowMore;