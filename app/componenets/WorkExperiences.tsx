'use client'

import experiences from "../data/experiences"

export default function WorkExperiences() {

    return ( 
        <div className="flex flex-col lg:flex-row items-center lg:items-start bg-black pt-16 px-6 lg:px-10 border-2 border-neutral-200">
            {experiences.map( (exp) => {
                return (<div className="flex justify-center text-neutral-200">{exp.role}</div>)
            })}
        </div>
    )

}