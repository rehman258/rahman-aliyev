import React, { useEffect, useState } from "react";
import Image from "next/image";
import { setUserLocale, getUserLocale } from "@/src/locale";
// const flag = ({ name }:{name:string}) => import(`@/public/flags/${name}.svg`);

export default function LanguageSwtitcher() {

  interface ILang {
    tag: "az" | "en" | "de";
    name: string;
    path: string;
    selected:boolean;
  }
  // note will be added auto location herewhere site is opening
  const [isListOpen,setIsListOpen] = useState(false);
  const [currCountry, setCurrCountry] = useState<ILang>({
    tag: "az",
    name: "azerbaijan",
    path: "azerbaijan",
    selected:true,
  });

  const langs:ILang[] = [
    {
      tag: "az",
      name: "azerbaijan",
      path: "azerbaijan",
      selected:true,
    },
    {
      tag: "de",
      name: "deutschland",
      path: "deutschland",
      selected:false,
    },
    {
      tag: "en",
      name: "england",
      path: "england",
      selected:false,
    },
  ];
  const openListHandler=()=>{
    setIsListOpen(!isListOpen);
  };

  const selectLangHandler = (langItem:ILang) => {
    setIsListOpen(false);
    (async()=>{
      await setUserLocale(langItem.tag);
    })();
    setCurrCountry(langItem);
  };

  useEffect(()=>{
    (async()=>{
      const lang = await getUserLocale();
      setCurrCountry(()=>{
        const locale:ILang = langs.find((langItem)=>langItem.tag === lang) || langs[0];
        return locale;
      });
    })();
  },[]);

  return (
    <div className="relative">
      <div
        className="cursor-pointer flex gap-[10] shadow-[0px_0px_50px_-5px_rgba(0,0,0,0.5)] 
         px-[10px] py-[5px] rounded-lg"
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
        className={`w-[100%] flex flex-col bg-theme-light-100 left-[0%] top-[120%] flex flex-col items-center 
          shadow-[0px_0px_50px_-5px_rgba(0,0,0,0.5)]  rounded-md border-t-0 overflow-hidden
        transition absolute ${isListOpen?undefined:"hidden"}`}>
        {
          langs.map((langItem)=>(
            <div
              key={langItem.name}
              className={`relative flex flex-col items-center 
                cursor-pointer px-[10px] py-[7.5px] justify-center w-[100%] 
                ${langItem.tag === currCountry.tag ? "bg-theme-light-300" : undefined}`}
              onClick={()=>selectLangHandler(langItem)}>
              <Image
                alt="counry flag"
                height={25}
                src={`/flags/${langItem.path}.svg`}
                width={25}
              />
              <hr className="absolute bottom-[0] w-[100%] border-theme-light-300" />
            </div>
          ))
        }
      </div>
    </div>
  );
}
