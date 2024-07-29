"use client";

import {useState} from 'react'

export default function TabsDemo() {

  const [isList, setIsList] = useState<boolean>(true); 

  return (
    <div className="flex w-[10rem] h-[3rem] m-auto mb-8 lg:mb-16">
    <div className="relative flex w-full p-2 bg-white dark:bg-transparent shadow-lg rounded-full">
      <span
        className="absolute inset-0 m-1 pointer-events-none"
        aria-hidden="true"
      >
        <span
          className={`absolute inset-0 w-1/2 bg-primary rounded-full shadow-sm shadow-teal-950/10 transform transition-transform duration-150 ease-in-out ${
            isList ? "translate-x-0" : "translate-x-full"
          }`}
        ></span>
      </span>
      <button
        className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
          isList ? "text-white" : "text-slate-500 dark:text-slate-400"
        }`}
        onClick={() => setIsList(true)}
        aria-pressed={isList}
      >
        Card
        {/* <span className={`${isAnnual ? 'text-indigo-200' : 'text-slate-400 dark:text-slate-500'}`}>-20%</span> */}
      </button>
      <button
        className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
          isList ? "text-slate-500 dark:text-slate-400" : "text-white"
        }`}
        onClick={() => setIsList(false)}
        aria-pressed={isList}
      >
        List
      </button>
    </div>
  </div>
  );
}
