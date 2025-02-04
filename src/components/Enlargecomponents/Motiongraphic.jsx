import React from "react";
import motiongraphics from "../../images/mages/magescover.jpg";
import arrow from "../../images/arrow.svg";
import arrow2 from "../../images/arrowup.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";

import Sidebar from "../Sidebar";
function Motiongraphic() {
  const [state, setState] = React.useState(false);
  const [open, setopen] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth >= 600) {
      document.addEventListener("mousemove", (e) => {
        let x = e.clientX;
        //let y=e.clientY;
        let xpos = x / window.innerWidth;
        //  let ypos=y/window.innerHeight;
        //console.log(xpos,ypos);
        if (xpos > 0.75 && x > 500) {
          setState(1);
          // console.log(state);
          //  return true;
        } else setState(0);
      });
    }
  });
  return (
    <motion.div
      animate={{ x: [0, 20, 0] }}
      transition={{ delay: 0.1 }}
      className=' md:flex md:flex-row-reverse w-full h-full dark:bg-[#111111]'
      style={{ height: "100vh", fontFamily: "poppins" }}>
      <div
        className='fixed p-2 dark:text-[#FAFAFA]'
        style={{
          left: 0,
          zIndex: 100,
          display: `${!state ? "block" : "none"}`,
          transition: "ease-in-out",
        }}>
 <Link
          to='/'
          className='  md:inline text-xl border-2 m-4 rounded-3xl transition ease-in-out duration-200 px-2 border-black dark:border-white dark:hover:text-black dark:hover:bg-white hover:bg-black hover:text-white'>
          {" "}
          Home
        </Link>         </div>
      <div className='md:hidden' style={{marginLeft:"85%"}}>
        <Hamburger
          toggle={() => {
            setopen(!open);
          }}
          toggled={open}
          color="#a79b9b"
          className='bhm flex md:hidden'
        />
        {/* <Sidebar /> */}
      </div>
      {open ? (
        <div className='absolute right-0'>
          {" "}
          <Sidebar />
        </div>
      ) : null}
      {state ? (
        <div
          className='absolute'
          style={{
            right: 0,
            display: `${state ? "block" : "none"}`,
            transition: "ease-in-out",
          }}>
          <Sidebar />
        </div>
      ) : null}
      <div style={{ flex: 1, backgroundColor: "rgb(101 104 159)" }}>
        <img
          src={motiongraphics}
          alt=''
          className='w-full mt-10 md:mt-0 md:h-full'
          style={{ objectFit: "cover" }}
          // style={{ height: "100vh" }}
        />
      </div>
      <div className='md:w-1/3 mt-12 md:mt-32 flex flex-col px-6 justify-center md:pb-16 md:justify-end '>
        <p
          className='text-4xl md:text-5xl lg:text-6xl dark:text-white'
          style={{ fontWeight: 800 }}>
          Mages Studio

          <br />
          {/* media post */}
        </p>
        <p className='mt-4 text-xl dark:text-gray-300 text-gray-600  font-light '>
        Branding Design Studio        </p>
        <div className='py-2'>
          <Link to='/digitaldesign1' className='w-full'>
            <img
              src={arrow2}
              alt=''
              className='w-8   h-8 dark:text-white dark:bg-white rounded-full'
              style={{ float: "right" }}
            />
          </Link>
          <div className='flex items-center justify-between mt-16 '>
            <Link to='/projects/22'>
              {" "}
              <p
                className='text-xl dark:text-white'
                style={{ textDecoration: "underline" }}>
                View Project
              </p>
            </Link>
            <Link to='/digitaldesign1'>
              {" "}
              <img
                src={arrow}
                alt='arrow'
                className='w-8 h-8 dark:bg-white  rounded-full'
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Motiongraphic;
