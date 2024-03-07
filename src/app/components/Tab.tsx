"use client"
import React, { useState } from 'react'



function Tab({item}:{item: any}) {
    const content = JSON.parse(item)
    const [tabSelected, setTabSelected] = useState(0)
  return (
    <div>
        <div className=" md:mt-9 h-fit bg-slate-50 p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
    <ul className='flex flex-wrap'>
        {content.map((itm:any, i:number) => (
            <div key={i} className={`text-sm font-medium text-center" ${i == tabSelected ? "text-indigo-600 dark:text-indigo-200 dark:hover:text-indigo-500 border-indigo-500 dark:border-indigo-200": "dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"} hover:text-indigo-500`}>
        <li  className="me-2" role="presentation">
            <button className={`${i == tabSelected ? "border-indigo-500" : ""} inline-block p-4 border-b-2 hover:border-indigo-500 rounded-t-lg`} onClick={() => setTabSelected(i)} type="button">{itm.name}</button>
        </li>
      
            </div>
        ))}
    </ul>

    <div dangerouslySetInnerHTML={{ __html: content[tabSelected].content}} className='font-serif  text-sm  p-5 text-slate-800 dark:text-slate-100'>
              
    </div>
</div>
    </div>
  )
}

export default Tab