"use client"

import bioCard from "../data/bioCard"
import Image from "next/image"

export default function Bio() {
    return (
        <div className="grid grid-cols-4 grid-rows-1">
            <Image
                src="static/hello-there.gif"
                alt="Well Hello There"
                width={300}
                height={50}
            />
            <div className="col-span-3">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Attempt at portfolio
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    {bioCard.punchline}
                </p>
            </div>
        </div>
    )
}