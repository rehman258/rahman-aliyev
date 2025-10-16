import "./scss/index.scss";
export default function SectionWrapper({ children, className }:{children:React.ReactNode, 
  className?:string}) {
  return (
    <section
      className={`section-wrapper ${className} py-[4rem] px-[1rem] lg:py-[6rem] lg:px-[5rem]
    max-w-[1566px] mx-auto
    `}>
      {children}
    </section>
  );
}
