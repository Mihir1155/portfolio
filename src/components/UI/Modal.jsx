import React from "react";
import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);

  return (
    <div
      className="w-full h-full fixed top-0 left-0 z-10
     bg-headingColor bg-opacity-40"
    >
      <div className=" w-11/12 md:max-w-[600px] md:w-full absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div>
          <figure>
            <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" />
          </figure>
        </div>

        <div>
          <h2 className="text-2xl text-headingColor font-[700] my-5">
            {portfolio.title}

            <a href={portfolio.siteUrl} target="#">
              <button className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 my-8 rounded-[8px] font-[500] ease-in duration-200">
                Live Site
              </button>
            </a>
          </h2>
        </div>
        <button
          onClick={() => setShowModal(false)}
          className="w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex justify-center items-center rounded-[3px] leading-0"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
