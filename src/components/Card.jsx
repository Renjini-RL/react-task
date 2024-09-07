import React from "react";

let imgs = ["img1.jpg", "img2.jpg", "img3.jpg"];

function Card({ t1, t2, img_i }) {
  return (
    <div className="w-[160px] border-[.5px] border-[#1e79b6] rounded-lg overflow-hidden">
      <img src={imgs[img_i]} alt="" className="" />
      <h1 className="text-center text-sm text-[#1e79b6] p-2">
        {t1} <br /> {t2}
      </h1>
    </div>
  );
}

export default Card;
