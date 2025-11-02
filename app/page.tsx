"use client"

import Bio from "./componenets/Bio";
import Contacts from "./componenets/Contacts";
import WorkExperiences from "./componenets/WorkExperiences";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Contacts />
      <div className="flex flex-col items-center w-full lg:px-10">
        <Bio/>
        {/* <WorkExperiences/> */}
      </div>
    </main>
  );
}
