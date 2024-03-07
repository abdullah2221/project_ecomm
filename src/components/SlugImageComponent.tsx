'use client';
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
const SlugImageComponent = ({
  image,
}: string | string[] | StaticImageData | any) => {


    // { params }: { params: { slug: string } }
    const [path,setPath] = useState('')
    let image1 :string | string[] | any  = image[0]

    // console.log(image[0])
  return (
    <>
      <Image
        src={path ? `/${path}.jpg` : `/${image1}.jpg`}
        alt={"data"}
        width={400}
        height={400}
        className="lg:w-1/2 w-full lg:h-[580px] h-64 object-cover object-center rounded"
      />
      
    </>
  );
};

export default SlugImageComponent;
