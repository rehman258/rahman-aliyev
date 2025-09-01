import { ReactNode } from "react";
import Header from "@/components/common/header";
import ProfileCard from "@/components/common/profileCard";
import Navigation from "@/components/common/nav";
type Props = {
  children: ReactNode;
};

export default async function LocaleLayout({ children }: Props) {

  return (
    <>
      <Header/>
      <main className="flex px-55 gap-[52px]">
        <ProfileCard/>
        <div className="page-content-view px-22 py-15 w-full self-baseline">
          {children}
        </div>
        <Navigation/>
      </main>
      
    </>
  );
}