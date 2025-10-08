export default function index({ title, desc }:{title:string, desc?:string}) {
  return (
    <div
      className="section-heading-area text-center flex flex-col align-center">
      <h5
        className={`px-[20px] py-[4px] bg-theme-light-200 dark:bg-theme-dark-200
    text-sm w-[auto] rounded-2xl text-theme-light-600 dark:text-theme-dark-600 self-center 
    ${desc ? "mb-[1rem]" : "mb-[3rem]"}`}>
        {title}
      </h5>
      {
        desc &&
        <p className={`3rem text-theme-light-600 dark:text-theme-dark-600`}>
          {desc}
        </p>
      }
    </div>
  );
}
