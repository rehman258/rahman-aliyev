import "./scss/index.scss";
export default function SectionWrapper({ children, className }:{children:React.ReactNode, 
  className?:string}) {
  return (
    <section className={`section-wrapper ${className} py-[6rem] px-[80px]`}>
      {children}
    </section>
  );
}
