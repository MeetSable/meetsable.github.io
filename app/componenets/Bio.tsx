"use client"

import bioCard from "../data/bioCard";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function Bio() {
    return (
        <div className="pt-5 lg:pt-10 lg:flex bg-white">
            <Image
                src="static/hello-there.gif"
                alt="Well Hello There"
                width={498}
                height={498}
                className="px-20 py-10 lg:p-10"
            />
            <div className="px-10 pb-10 lg:p-10">
                <h1 className="text-xl lg:text-4xl font-bold tracking-tight text-gray-900">
                    Attempt at portfolio
                </h1>
                <div className="text-sm lg:text-lg text-gray-600">
                    <ReactMarkdown 
                        remarkPlugins={[remarkGfm]} 
                        rehypePlugins={[rehypeRaw]}>
                        {bioCard.punchline}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    )
}