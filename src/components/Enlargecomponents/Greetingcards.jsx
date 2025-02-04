import React from "react";
import greetings from "../../images/UI/Cover.jpg";
import arrow from "../../images/arrow.svg";
import { Link } from "react-router-dom";
import arrow2 from "../../images/arrowup.svg";
import Sidebar from "../Sidebar";

import Hamburger from "hamburger-react";

import { motion } from "framer-motion";
function GreetingCard() {
  const [open, setopen] = React.useState(false);
  const [state, setState] = React.useState(0);
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
    <div>
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
        </Link>  
        </div>
        <div className='md:hidden' style={{ marginLeft: "85%" }}>
          <Hamburger
            toggle={() => {
              setopen(!open);
            }}
            toggled={open}
            className='bhm flex md:hidden'
            color='#a79b9b'
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
        <div className='' style={{ flex: 1, backgroundColor: "#b03338" }}>
          <img
            src={greetings}
            alt=''
            className='w-full mt-10 md:mt-0 md:h-full'
            /* style={{ height: "100vh" }}  */
          />
        </div>
        <div className='md:w-1/3 mt-12 md:mt-32 flex flex-col px-6 justify-center md:pb-16 md:justify-end'>
          <p
            className='text-4xl md:text-5xl lg:text-6xl dark:text-white'
            style={{ fontWeight: 800 }}>
            Bruv
            <br />
          </p>
          <p className='mt-2 text-xl dark:text-gray-300 text-gray-600  font-light'>
            A companion application for Brunel Students
          </p>
          <div className='py-2'>
          <Link to='/greetingcards'
 className='w-full'>
              <img
                src={arrow2}
                alt=''
                className='w-8   h-8 dark:bg-white rounded-full'
                style={{ float: "right" }}
              />
            </Link>

            <div className='flex items-center justify-between mt-16 '>
              <Link to='/projects/31'>
                <p
                  className='text-xl dark:text-white'
                  style={{ textDecoration: "underline" }}>
                  View Project
                </p>
              </Link>{" "}
              <Link to='/greetingcards'>
                {" "}
                <img
                  src={arrow}
                  alt='arrow'
                  className='dark:bg-white w-8 h-8  rounded-full'
                />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default GreetingCard;
