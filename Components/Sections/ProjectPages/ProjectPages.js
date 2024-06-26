"use client";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionHeading from "../../UI/SectionHeading/SectionHeading";
import {
  faNode,
  faReact,
  faAngular,
  faCss3,
  faBootstrap,
  faTailwind,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
config.autoAddCss = false;
const Project = ({ imageUrl, name, type }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    // <section className="bg-gradient-to-r from-stone-950 to-stone-600">
    //   <div className="">
    //     <div className="pt-[6rem] p-[2rem]  flex flex-col lg:flex-row items-center justify-center shadow-lg rounded-[3rem] overflow-hidden hover:shadow-xl transition duration-300">
    //       <motion.div
    //         initial="hidden"
    //         ref={ref}
    //         animate={controls}
    //         transition={{ type: "spring", duration: 3 }}
    //         variants={{
    //           hidden: { x: 900, opacity: 0 },

    //           visible: { x: 0, opacity: 1 },
    //         }}
    //         className="flex-2"
    //       >
    //         <img
    //           id="main-img"
    //           src={imageUrl}
    //           alt={name}
    //           className="sm:h-[100vh]  max-w-full rounded-l-[3rem] shadow-2xl z-10 "
    //         />
    //       </motion.div>
    //       <motion.div
    //         initial="hidden"
    //         ref={ref}
    //         animate={controls}
    //         transition={{ type: "spring", duration: 3 }}
    //         variants={{
    //           hidden: { x: 200, opacity: 0 },
    //           visible: { x: 0, opacity: 1 },
    //         }}
    //         className="flex-1 shadow-2xl bg-gradient-to-r from-gray-600 to-gray-950 neutral-800 rounded-[3rem] z-0 ml-[-4rem] p-[2rem]  sm:h-[100vh] w-[75%]"
    //         style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
    //         // style={{
    //         //   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add your desired box shadow values
    //         // }}
    //       >
    //         <div className="flex flex-col flex-wrap  gap-2 pt-1  text-black ">
    //           <div className="flex justify-around items-center">
    //             <motion.div
    //               className="text-lg sm:text-2xl font-bold text-white  bg-[#353535]  flex items-center justify-center  rounded-[50%]"
    //               style={{
    //                 boxShadow: "0 4px 6px rgba(0, 0, 0.6, 0.6)", // Add your desired box shadow values
    //               }}
    //               initial="hidden"
    //               ref={ref}
    //               animate={controls}
    //               transition={{ type: "spring", duration: 4 }}
    //               variants={{
    //                 hidden: { z: -10, opacity: 0, width: 0, height: 0 },
    //                 visible: { z: 1, opacity: 1, width: 150, height: 150 },
    //               }}
    //             >
    //               <div id="pro-det">
    //                 <SectionHeading
    //                   className=""
    //                   backGroundColor="text-color-white-reduce"
    //                   foreGroundColor="text-color-white"
    //                 >
    //                   {name}
    //                 </SectionHeading>
    //               </div>
    //             </motion.div>
    //             <motion.div
    //               className="text-lg sm:text-md font-bold text-white bg-[#353535]  flex items-center justify-center h-[100px] w-[100px] rounded-[50%]"
    //               style={{
    //                 boxShadow: "0 4px 6px rgba(0, 0, 0.6, 0.6)", // Add your desired box shadow values
    //               }}
    //               initial="hidden"
    //               ref={ref}
    //               animate={controls}
    //               transition={{ type: "spring", duration: 4 }}
    //               variants={{
    //                 hidden: { z: -10, opacity: 0, width: 0, height: 0 },
    //                 visible: { z: 1, opacity: 1, width: 100, height: 100 },
    //               }}
    //             >
    //               <p>{type}</p>
    //             </motion.div>
    //           </div>

    //           <motion.p
    //             className="text-sm sm:text-2xl sm:font-bold text-white  items-left "
    //             initial="hidden"
    //             ref={ref}
    //             animate={controls}
    //             transition={{ type: "spring", duration: 2 }}
    //             variants={{
    //               hidden: { x: 200, opacity: 0 },
    //               visible: { x: 0, opacity: 1 },
    //             }}
    //           >
    //             How It Works
    //           </motion.p>

    //           <motion.div
    //             initial="hidden"
    //             ref={ref}
    //             animate={controls}
    //             transition={{ type: "spring", duration: 5 }}
    //             variants={{
    //               hidden: { x: 200, opacity: 0 },
    //               visible: { x: 0, opacity: 1 },
    //             }}
    //             className="sm:text-sm  outline-none text-white  mb-4 rounded pl-2 "
    //             style={{
    //               boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
    //               width: "95%",
    //             }}
    //             rows={5} // Set the initial number of visible rows
    //           >
    //             <p>
    //               A strong project description provides a roadmap for
    //               stakeholders and communicates the vision without getting
    //               bogged stakeholders and communicates the vision without
    //               getting bogged
    //             </p>
    //           </motion.div>
    //           {/* <motion.p
    //           className="mb-4 pl-2"
    //           initial="hidden"
    //           ref={ref}
    //           animate={controls}
    //           transition={{ type: "spring", duration: 5 }}
    //           variants={{
    //             hidden: { x: 200, opacity: 0 },
    //             visible: { x: 0, opacity: 1 },
    //           }}
    //         >
    //           A strong project description provides a roadmap for stakeholders
    //           and communicates the vision without getting bogged down in
    //           details. We’ve compiled expert tips and sample project
    //           descriptions to help you get started.
    //         </motion.p>{" "} */}
    //           <motion.p
    //             className="text-sm sm:text-2xl sm:font-bold text-white  items-left"
    //             initial="hidden"
    //             ref={ref}
    //             animate={controls}
    //             transition={{ type: "spring", duration: 2 }}
    //             variants={{
    //               hidden: { x: 200, opacity: 0 },
    //               visible: { x: 0, opacity: 1 },
    //             }}
    //           >
    //             Technical Accomplishments:
    //           </motion.p>
    //           <motion.div
    //             initial="hidden"
    //             ref={ref}
    //             animate={controls}
    //             transition={{ type: "spring", duration: 5 }}
    //             variants={{
    //               hidden: { x: 200, opacity: 0 },
    //               visible: { x: 0, opacity: 1 },
    //             }}
    //             className="sm:text-sm  outline-none text-white mb-4  rounded pl-2 "
    //             style={{
    //               boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
    //               width: "95%",
    //             }}
    //             rows={5} // Set the initial number of visible rows
    //           >
    //             <p>
    //               A strong project description provides a roadmap for
    //               stakeholders and communicates the vision without getting
    //               bogged stakeholders and communicates the vision without
    //               getting bogged
    //             </p>
    //           </motion.div>
    //           <motion.p
    //             className="text-sm sm:text-2xl sm:font-bold text-white  items-left"
    //             initial="hidden"
    //             ref={ref}
    //             animate={controls}
    //             transition={{ type: "spring", duration: 2 }}
    //             variants={{
    //               hidden: { x: 200, opacity: 0 },
    //               visible: { x: 0, opacity: 1 },
    //             }}
    //           >
    //             Technologies:
    //           </motion.p>

    //           {/* <div className="flex flex-row space-x-8">
    //           <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-700 shadow-md transition duration-300 w-[30%] rounded-[10px]">
    //             Explore More
    //           </button>
    //           <button className="px-4 py-2 bg-green-500 text-white hover:bg-green-700 shadow-md transition duration-300 w-[30%] rounded-[10px]">
    //             Visit Live Site
    //           </button>
    //         </div> */}
    //         </div>
    //       </motion.div>
    //     </div>
    //   </div>
    // </section>
    <section className=" bg-[#202020]">
      <div className="flex flex-col min-h-full md:flex-row justify-center gap-3 items-center py-[5rem] sm:px-[3rem] lg:px-[5rem] rounded-[2rem]">
        <motion.div
          className=" flex-2 md:w-[60%]"
          initial="hidden"
          ref={ref}
          animate={controls}
          transition={{ type: "spring", duration: 3 }}
          variants={{
            hidden: { x: 500, opacity: 0 },

            visible: { x: 0, opacity: 1 },
          }}
        >
          <img
            className=" h-[50vh]  sm:h-[87vh]  rounded "
            src={imageUrl}
            alt=""
          />
        </motion.div>
        <div className="flex  flex-col justify-center px-4  sm:px-6 flex-1 lg:px-10 xl:px-16 sm:h-[87vh] z-1 rounded  bg-[#393939]">
          <div className="mx-auto">
            <div className="border-b border-gray-200 pb-10">
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-white">
                {name}
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                A strong project description provides a roadmap for stakeholders
                and communicates the vision without getting bogged stakeholders
                and communicates the vision without getting bogged
              </p>
            </div>
            <div>
              <div className="border-b border-gray-200 pb-10">
                <p className="mt-2 text-2xl font-bold tracking-tight text-white  capitalize">
                  {type}
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-300">
                  A strong project description provides a roadmap for
                  stakeholders and communicates the vision without getting
                  bogged stakeholders and communicates the vision without
                  getting bogged
                </p>
              </div>

              <motion.div
                className="grid grid-cols-3 gap-3 icons space-x-8 place-items-center justify-center pt-3"
                initial="hidden"
                ref={ref}
                animate={controls}
                transition={{ type: "spring", duration: 5 }}
                variants={{
                  hidden: { x: 200, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
              >
                {/* Add logos here */}

                <FontAwesomeIcon
                  icon={faNode}
                  id="iconset"
                  className=" text-[4rem] w-[35px] md:w-[60px] text-emerald-300 rounded"
                />
                <FontAwesomeIcon
                  icon={faReact}
                  id="iconset"
                  className="text-[4rem] w-[35px] md:w-[60px] text-sky-600 rounded"
                />
                <FontAwesomeIcon
                  icon={faAngular}
                  id="iconset"
                  className="text-[4rem] w-[35px] md:w-[60px] text-red-700 rounded"
                />
                <FontAwesomeIcon
                  icon={faCss3}
                  id="iconset"
                  className="text-[3rem] w-[35px] bg-orange-400 md:w-[60px] rounded"
                />
                <FontAwesomeIcon
                  icon={faBootstrap}
                  id="iconset"
                  className="text-[4rem] w-[35px] md:w-[60px] text-violet-500 rounded"
                />
                {/* <FontAwesomeIcon
                  icon={faTailwind}
                  id="iconset"
                  className="text-[4rem] w-[35px] md:w-[60px] text-teal-400 rounded"
                /> */}
                <FontAwesomeIcon
                  icon={faPhp}
                  id="iconset"
                  className="text-[4rem] w-[35px] md:w-[60px] text-indigo-400 rounded"
                />
              </motion.div>
            </div>
            {/* <div className="mt-10">
              <div>
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm leading-6 text-gray-700"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm leading-6">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-10">
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                  >
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                        fill="#EA4335"
                      />
                      <path
                        d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                        fill="#34A853"
                      />
                    </svg>
                    <span className="text-sm font-semibold leading-6">
                      Google
                    </span>
                  </a>

                  <a
                    href="#"
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                  >
                    <svg
                      className="h-5 w-5 fill-[#24292F]"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-semibold leading-6">
                      GitHub
                    </span>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
