"use client"

import bioCard, { LinkType } from "../data/bioCard"
import Link from 'next/link'

export default function Contacts() {

    const contactsList : LinkType[] = [
        bioCard.phone, bioCard.email, ...bioCard.socials
    ]

    return (
        <div className="px-2 py-4 font-display font-extrabold text-2xl grid grid-cols-9 bg-black text-white">
            <div className="p-1 col-span-1">How to reach me: </div>
            <div className="col-span-8 overflow-hidden p-2 flex bg-white">
                <ul className="flex gap-10 animate-infinite-scroll">
                    {[...contactsList, ...contactsList, ...contactsList, ...contactsList, ...contactsList].map((contact: LinkType, key) => {
                        return (
                            <li className="px-1 gap-2 text-black" key={key}>
                                <Link href={contact.link}>
                                    {contact.name ?? contact.platform}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}