import React from "react";

const Footer = () => {

   
   const year = new Date().getFullYear();

  return (
    <footer className="bg-[#12141e] pt-12">
      {/* -----------------footer top-------------- */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautiful websites?
            </h2>
            <a href="#contact">
              <button
                className="bg-primaryColor font-[500] flex items-center gap-2 
                        hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
              >
                <i class="ri-mail-fill"> Hire me</i>
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
           <p className="text-gray-300 leading-7 mt-4 sm:mt-0"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            mollitia repellat eum molestias facere? Mollitia necessitatibus
            facilis nulla ipsum molestiae.</p>
 
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">Follow Me:</span>

              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                 <a target="#" href="https://github.com/Mihir1155" className="text-gray-300 font-[500] text-[10px]">
                 <i class="ri-github-fill"></i>
                 </a>
              </span>

              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                 <a  target="#" href="https://www.linkedin.com/in/mihir-sahoo-483354247" className="text-gray-300 font-[500] text-[10px]">
                 <i class="ri-linkedin-fill"></i>
                 </a>
              </span>

              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                 <a target="#" href="https://instagram.com/mihir._.sahoo?igshid=NGExMmI2YTkyZg==" className="text-gray-300 font-[500] text-[10px]">
                 <i class="ri-instagram-fill"></i>
                 </a>
              </span>

              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                 <a target="#" href="https://twitter.com/mihirsahoo1155?t=jSiLGSuBBmnEDox5hQ7wRg&s=08" className="text-gray-300 font-[500] text-[10px]">
                 <i class="ri-twitter-fill"></i>
                 </a>
              </span>
            </div>

            <div className=" text-gray-400 text-[14px] pt-4">
           <p>@Copyright {year} developed by Mihir - All right reserved</p>
            </div>


          </div>
        </div>
      </div>

      {/* -----------------footer top end------------- */}
    </footer>
  );
};

export default Footer;
