import React from "react";
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            What do I help
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor text-[16px] font-[600] leading-7">
            A frontend web developer is someone who creates the user interface
            of a website or web application. They use HTML, CSS, JavaScript and
            other technologies to design and implement the layout, appearance,
            functionality and interactivity of web pages. A frontend web
            developer helps to make the web more accessible, engaging and
            user-friendly.
          </p>
        </div>

        <div className="flex  justify-center  sm:px-0">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:max-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* ---------vertical line running through the middle--------------------- */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>

              {/* -----------left card----------------- */}
              <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded
                      shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
                        group-hover:font-[600] text-2xl"
                        >
                          Frontend Development
                        </h3>
                        <p
                          className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]
                        leading-7"
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Culpa, maxime.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 
                  transform -translate-x-1/2 -translate-y-4 flex items-center justify-center"
                  >
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* -----------------right card--------------------- */}
              <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="1500"
                        className="bg-white p-4 rounded
                      shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
                        group-hover:font-[600] text-2xl"
                        >
                          Backend Development
                        </h3>
                        <p
                          className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]
                        leading-7"
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Culpa, maxime.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 
                  transform -translate-x-1/2 -translate-y-4 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/*-----------------left card------------------  */}
              <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded
                      shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
                        group-hover:font-[600] text-2xl"
                        >
                          Frontend Development
                        </h3>
                        <p
                          className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]
                        leading-7"
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Culpa, maxime.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 
                  transform -translate-x-1/2 -translate-y-4 flex items-center justify-center"
                  >
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* --------------------------------right card-------------------------- */}
              <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded
                      shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
                        group-hover:font-[600] text-2xl"
                        >
                          Frontend Development
                        </h3>
                        <p
                          className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]
                        leading-7"
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Culpa, maxime.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 
                  transform -translate-x-1/2 -translate-y-4 flex items-center justify-center"
                  >
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
