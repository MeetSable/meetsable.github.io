"use client"

import bioCard, { LinkType } from "../data/bioCard"
import Link from 'next/link'

export default function Contacts() {

    const contactsList : LinkType[] = [
        bioCard.phone, bioCard.email, ...bioCard.socials
    ]

    return (
        <div className="p-2 fixed flex font-display font-extrabold text-sm lg:text-xl bg-black text-neutral-200 max-w-full border-2">
            <div className="min-w-fit mr-2">How to reach me: </div>
            <div className="flex overflow-hidden bg-neutral-300">
                <ul className="flex gap-10 animate-infinite-scroll">
                    {[...contactsList, ...contactsList, ...contactsList, ...contactsList, ...contactsList, ...contactsList].map((contact: LinkType, key) => {
                        return (
                            <li className="gap-2 text-black" key={key}>
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