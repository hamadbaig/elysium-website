// // React Import
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Plugin Import
import { useAnimation, motion } from "framer-motion";

// Component Imports
import SectionHeading from "../../UI/SectionHeading/SectionHeading";
import ProcessCrousel from "../../UI/ProcessCrouselTestimonials/ProcessCrouselTestimonials";
import TestimonialCards from "../../UI/TestimonialCards/TestimonialCards";
import TestimonialsData from "./TestimonialsData";
// Style Import
// import classes from "./Clients.module.css";

const Testimonials = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={`bg-secondary-color w-full`}>
      <div className={`mx-auto px-3 max-w-max w-full `}>
        {/* Section Heading */}
        <div className={`md:ml-[4rem] lg:ml-[8rem]   py-3 pt-[4rem] `}>
          <SectionHeading
            backGroundColor="text-color-white-reduce"
            foreGroundColor="text-color-white"
          >
            Reviews
          </SectionHeading>
        </div>
        <motion.div
          initial="hidden"
          ref={ref}
          animate={controls}
          transition={{ type: "spring", duration: 2 }}
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
          }}
          className={`w-full  flex flex-row items-center justify-between md:mt-0 mt-12 md:px-0 pl-[1.5rem] pr-[1.5rem] `}
        >
          {/* Crousel */}
          <ProcessCrousel showDots={true} stepChangeFunction={() => {}}>
            {TestimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <TestimonialCards
                  userImage={testimonial.userImage}
                  userName={testimonial.userName}
                  predefinedvalue={testimonial.stars}
                  userReview={testimonial.userReview}
                />
              </motion.div>
            ))}
          </ProcessCrousel>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
