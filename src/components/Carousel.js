import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  { title: "Digital Art", url: "../../img/pexels-wendel-moretti-1937738.jpg" },
  { title: "Digital Art", url: "../../img/pexels-dids-2911527.jpg" },
  { title: "Digital Art", url: "../../img/pexels-dids-3705473.jpg" },
  { title: "Digital Art", url: "../../img/pexels-ferbugs-3383956.jpg" },
  { title: "Digital Art", url: "../../img/pexels-torsten-dettlaff-971546.jpg" },
  { title: "Digital Art", url: "../../img/pexels-anni-roenkae-3418400.jpg" },
  { title: "Digital Art", url: "../../img/pexels-anni-roenkae-3418400.jpg" },
];

const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [width]);

  return (
    <div className="mb-14">
      <motion.div
        ref={carousel}
        className="carousel cursor-grab overflow-hidden"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex flex-row space-x-4"
        >
          {images.map((image, i) => (
            <motion.div
              style={{ backgroundImage: `url(${image.url})` }}
              className="bg-cover bg-center flex flex-col card min-w-[15rem] bg-linear-gradient-to-t rounded-lg from-black to-transparent overflow-hidden relative min-h-[20rem]"
              key={i}
            >
              {/* <img src={url} alt="" className="w-full h-auto pointer-events-none" /> */}
              <h4 className="font-boing mt-auto mb-6 ml-6 text-white">
                {image.title}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Carousel;
