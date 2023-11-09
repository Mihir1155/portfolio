import React, { useRef, useEffect, useState } from "react";


const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);




  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
      behavior: "smooth", // add this option
    });
  };



 const toggleMenu = ()=> menuRef.current.classList.toggle('show_Menu')

  return (
    <header ref={headerRef} className="w-full h-[80px] flex items-center bg-[#fff]">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ----------logo----------- */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-purple-900 text-white text-[18px] font-[500] rounded-full flex items-center justify-center ">
              M
            </span>

            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">Mihir</h2>
              <p className="text-smallTextColor text-[15px] font-[500]">
                personal
              </p>
            </div>
          </div>
          {/*-------------logo end------------*/}
          {/* --------Menu Start ---------- */}
          <div className="Menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#portFolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* -----------Menu End ------------ */}
          {/* -------------Menu Right--------- */}
          <div className="flex item-center gap-4">
            <button 
              className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid
             border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor
             hover:text-white hover:font-[500] ease-in duration-700"
            > 
            <a href="#contact"><i  class="ri-send-plane-fill"></i>Let's Talk</a>
            </button>

            <span onClick={toggleMenu} className="text-2xl text-smallTextColor md:hidden cursor-pointer">
              <i class="ri-menu-fill"></i>
            </span>
          </div>
          {/* -----------Menu Right end-------------- */}
        </div>
      </div>
    </header>
  );
};

export default Header;
