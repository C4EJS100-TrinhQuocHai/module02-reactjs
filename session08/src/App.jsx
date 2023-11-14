import React from 'react'
import {imgs} from "./assets/images/image.jsx"
export default function App() {
  console.log(imgs);
  return (
    <>
    {/* 
      sm: small
      md: medium
      lg: large
      xl : extra large
     */}
     <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
        <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"/>
      </svg>
      <div className='text-red-500 text-5xl '>hello</div>
      <button className="text-lộc px-4 sm:px-8 py-2 sm:py-3 bg-sky-300 hover:bg-sky-800">click</button>
      <div classNameName='flex justify-around'>
        <div>logo</div>
        <div>navigation</div>
        <div>signin</div>
        <div>signup</div>
      </div>
      <img src={imgs.image1} alt="" />
      <img class="w-24 h-24 rounded-full mx-auto" src={imgs.image2} alt="" width="384" height="512"></img>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-ful" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
    </>
  )
}
