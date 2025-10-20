"use client"

import { unique } from "next/dist/build/utils"
import bioCard, { Link } from "../data/bioCard"
import { Link } from "lucide-react"

export default function Contacts() {

    const contactsList : Link[] = [
        bioCard.phone, bioCard.email, ...bioCard.socials
    ]

    return (
        <div className="px-2 py-4 font-display font-extrabold text-2xl grid grid-cols-9 bg-black text-white">
            <div className="p-1 col-span-1">How to reach me: </div>
            <div className="col-span-8 overflow-hidden p-2 flex bg-white">
                <ul className="flex gap-10 animate-infinite-scroll">
                    {[...contactsList, ...contactsList, ...contactsList, ...contactsList, ...contactsList].map((contact: Link, key) => {
                        return (
                            <li className="px-1 gap-2 text-black" key={key}>
                                <a href={contact.link}>
                                    {contact.name ?? contact.platform}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}