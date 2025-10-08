export default function SectionWrapper({ children, className }:{children:React.ReactNode, 
  className?:string}) {
  return (
    <section className={`${className} py-[6rem] px-[80px]`}>
      {children}
    </section>
  );
}
