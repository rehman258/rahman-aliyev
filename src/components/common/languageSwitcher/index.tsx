import React, { useState } from "react";
import Image from "next/image";
// const flag = ({ name }:{name:string}) => import(`@/public/flags/${name}.svg`);

export default function LanguageSwtitcher() {
  // note will be added auto location herewhere site is opening
  const [isListOpen,setIsListOpen] = useState(false);
  const [currCountry, setCurrCountry] = useState({
    tag: "az",
    name: "azerbaijan",
    path: "azerbaijan",
    default:true,
  });

  const langs = [
    {
      tag: "az",
      name: "azerbaijan",
      path: "azerbaijan",
      default:true,
    },
    {
      tag: "de",
      name: "deutschland",
      path: "deutschland",
      default:false,
    },
    {
      tag: "en",
      name: "england",
      path: "england",
      default:false,
    },
  ];
  const openListHandler=()=>{
    setIsListOpen(!isListOpen);
  };

  return (
    <div className="relative">
      <div
        className=" flex gap-[10] border border-theme-dark-700  px-[10px] py-[5px] rounded-lg"
        onClick={openListHandler}>
        <Image
          alt=""
          className="rounded"
          height={25}
          src={`/flags/${currCountry.path}.svg`}
          width={25}

        />
        <Image
          alt=""
          height={15}
          src={"/icons/lightDownArrow.svg"}
          width={15}
        />
      </div>
      <div
        className={`w-[100%] flex flex-col gap-[10px] bg-theme-light-100 left-[0%] flex flex-col items-center 
          border border-theme-dark-700  px-[10px] py-[5px] rounded-md border-t-0
        transition absolute ${isListOpen?undefined:"hidden"}`}>
        {
          langs.map((country)=>(
            <div
              onClick={()=>setIsListOpen(false)}
              key={country.name}
              className="flex">
              <Image
                alt="counry flag"
                height={25}
                src={`/flags/${country.path}.svg`}
                width={25}
              />
              <hr className="divider" />
            </div>
          ))
        }
      </div>
    </div>
  );
}
