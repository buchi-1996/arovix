import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
    {title: 'Dummy Title', url: '../../img/pexels-wendel-moretti-1937738.jpg'},
    {title: 'Dummy Title', url: '../../img/pexels-dids-2911527.jpg'},
    {title: 'Dummy Title', url: '../../img/pexels-dids-3705473.jpg'},
    {title: 'Dummy Title', url: '../../img/pexels-ferbugs-3383956.jpg'},
    {title: 'Dummy Title', url: '../../img/pexels-torsten-dettlaff-971546.jpg'},
    {title: 'Dummy Title', url: '../../img/pexels-anni-roenkae-3418400.jpg'},
    {title: 'Dummy Title', url: '../../img/pexels-anni-roenkae-3418400.jpg'}
]

const Carousel = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    
    useEffect(() => {
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [carousel])

    return <div className="container mx-auto mb-14">
        <h1 className="max-w-6xl text-3xl leading-12 mb-10 text-center">
          Gigs available for you
        </h1>
    <motion.div ref={carousel} className="carousel cursor-grab overflow-hidden">
        <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className="inner-carousel flex flex-row space-x-4">
                {images.map(({title, url, i}) => (
                    <motion.div style={{backgroundImage: `url(${url})`}}  className="bg-cover bg-center flex flex-col card min-w-[15rem] bg-linear-gradient-to-t rounded-lg from-black to-transparent overflow-hidden relative min-h-[20rem]" key={i}>
                        {/* <img src={url} alt="" className="w-full h-auto pointer-events-none" /> */}
                        <h4 className="font-boing mt-auto mb-6 ml-6 text-white">{title}</h4>
                    </motion.div>
                ))}
      </motion.div>
      </motion.div>
    </div>
};

export default Carousel;
