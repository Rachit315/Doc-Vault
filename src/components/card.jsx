import React from 'react';
import { FaRegFileAlt } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';
import { IoIosClose } from "react-icons/io";
import { motion, scale } from 'motion/react';

const Card = ({data , refrence}) => {
  return (
    <motion.div
    
    drag
    dragConstraints={refrence}
    whileDrag={{scale:1.2}}
    dragElastic={2}
    dragTransition={{ bounceStiffness: 600}}
    
    
    className="relative w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white p-8 overflow-hidden">
      <FaRegFileAlt size={24} />

      <p className="text-sm leading-tight mt-5 font-semibold">
{data.desc}      </p>

      <div className="absolute bottom-0 left-0 w-full">
        <div className="px-5">
          <div className="py-4 px-3 flex items-center justify-between mb-1">
            <h5 className="text-base font-medium">{data.filesize}</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
                {data.closed ? <IoIosClose />: <LuDownload size="0.8em" color="#fff" />}
            </span>
          </div>
        </div>

       {data.tag.isopen && ( <div className={`tag flex items-center justify-center w-full py-4 h-13 ${data.tag.tagcolor === "blue" ? "bg-blue-600": "bg-green-600"} rounded-b-[50px]`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagtitle}</h3>
        </div>)}
       
      </div>
    </motion.div>
  );
};

export default Card;
