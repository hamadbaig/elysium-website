// React Import
import React from "react";
import ReactStars from "react-stars";
// Style Import
import classes from "./TestimonialCards.module.css";

const TestimonialCards = ({
  userImage,
  userName,
  userDesignation,
  predefinedvalue,
  userReview,
}) => {
  return (
    // <div className={`w-full rounded ml-6  flex justify-start pb-3`}>
    //   <div
    //     className={`p-3  bg-[#353535] w-[78%] text-center  mx-auto  rounded-lg mt-[7rem] ml-4  `}
    //     style={{ boxShadow: "0px 4px 6px rgba(255, 255, 255, 0.5)" }}
    //   >
    //     <div className={`w-full   flex items-center justify-center mt-10 mb-6`}>
    //       <img
    //         src={userImage}
    //         alt={userName}
    //         className={`sm:w-[50%]    md:w-[50%]  lg:w-[50%] object-cover rounded-[50%] mt-[-7rem] pt-0 `}
    //         style={{ boxShadow: "0px 4px 6px rgba(255, 255, 255, 0.5)" }}
    //       />
    //     </div>
    //     {/* User Name and Designation */}
    //     <div className={`mx-auto text-center mb-3`}>
    //       <h2
    //         className={`text-2xl leading-5 tracking-wide uppercase font-medium text-color-white`}
    //       >
    //         {userName}
    //       </h2>
    //     </div>

    //     <div className={`flex items-center justify-center`}>
    //       <ReactStars
    //         count={5}
    //         size={24}
    //         color2={"#FFCE53"}
    //         value={predefinedvalue}
    //         edit={false}
    //       />
    //     </div>
    //     <div className={`text-base font-normal`}>
    //       <p className={`text-color-white`}>&quot;{userReview}&quot;</p>
    //     </div>
    //   </div>
    // </div>
    <section className="bg-white py-8 sm:py-10 rounded-xl mb-8 mr-3 ml-1">
      <div className="mx-auto max-w-7xl px-6 lg:px-4">
        <div className="mx-auto">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0">
            <img
              className="h-12 self-start"
              src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
              alt=""
            />
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  “Amet amet eget scelerisque tellus sit neque faucibus non
                  eleifend. Integer eu praesent at a. Ornare arcu gravida
                  natoque erat et cursus tortor consequat at.”
                </p>
              </blockquote>
              <div className={`flex items-center justify-center`}>
                <ReactStars
                  count={5}
                  size={24}
                  color2={"#FFCE53"}
                  value={predefinedvalue}
                  edit={false}
                />
              </div>
              <figcaption className="mt-6 flex items-center gap-x-6">
                <img
                  className="h-14 w-14 rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="text-base">
                  <div className="font-semibold text-gray-900">{userName}</div>
                  <div className="mt-1 text-gray-900">CEO of Tuple</div>
                </div>
              </figcaption>
            </figure>
          </div>
          {/* <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <img
              className="h-12 self-start"
              src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
              alt=""
            />
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  “Excepteur veniam labore ullamco eiusmod. Pariatur consequat
                  proident duis dolore nulla veniam reprehenderit nisi officia
                  voluptate incididunt exercitation exercitation elit. Nostrud
                  veniam sint dolor nisi ullamco.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  className="h-14 w-14 rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="text-base">
                  <div className="font-semibold text-gray-900">
                    Joseph Rodriguez
                  </div>
                  <div className="mt-1 text-gray-500">CEO of Reform</div>
                </div>
              </figcaption>
            </figure>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCards;
