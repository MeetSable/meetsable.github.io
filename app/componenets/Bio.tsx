"use client"

import bioCard from "../data/bioCard";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function Bio() {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start bg-black pt-16 px-6 lg:px-10 ">
            <div className="flex justify-center lg:justify-start w-full lg:w-1/3 max-w-xs lg:max-w-sm mr-10 mb-10">
                <div className="relative w-full" style={{ aspectRatio: '1' }}>
                    <Image
                        src="static/hello-there.gif"
                        alt="Well, Hello There"
                        width={498}
                        height={498}
                        className="object-contain w-full h-full"
                    />
                </div>
            </div>

            <div className="flex-1 text-center lg:text-left max-w-3xl">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-neutral-200 mb-4">
                    Attempt at portfolio
                </h1>
                <div className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                    >
                        {bioCard.punchline}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    )
}
