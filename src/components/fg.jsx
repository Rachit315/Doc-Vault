import React from 'react'
import Card from './card'
import { useState } from 'react'
const fg = () => {

    const ref = useState(null);
    const data = [
        {
          desc: "Resume.pdf",
          filesize: "10mb",
          closed: true,
          tag: { isopen: true, tagtitle: "Download Now", tagcolor: "green" }
        },
        {
          desc: "Interstellar_Movie.mkv",
          filesize: "1.4GB",
          closed: false,
          tag: { isopen: false, tagtitle: "Download Now", tagcolor: "blue" }
        },
        {
          desc: "Holiday_Photo.jpg",
          filesize: "900kb",
          closed: false,
          tag: { isopen: true, tagtitle: "Download Now", tagcolor: "blue" }
        },
        {
          desc: "Project_Report.docx",
          filesize: "400kb",
          closed: true,
          tag: { isopen: false, tagtitle: "Download Now", tagcolor: "green" }
        }
      ];
      
      

  return (
            <div>
            <div ref={ref}  className="w-full fixed top-0 left-0 z-[3] h-full flex gap-12 p-5 ">
                {data.map((item,index)=>(
                    <Card key={index} data={item} refrence={ref}/>
                ))}
            
            </div>
    </div>
  )
}

export default fg
