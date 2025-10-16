import "./scss/index.scss";
export default function SectionWrapper({ children, className }:{children:React.ReactNode, 
  className?:string}) {
  return (
    <section className={`section-wrapper ${className} py-[4rem] px-[1rem]`}>
      {children}
    </section>
  );
}
