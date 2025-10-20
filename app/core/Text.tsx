"use client"


export default function Text({children}: {children: React.ReactNode}) {
    return (<p className="font-display py-3 text-2xl font-bold whitespace-nowrap px-12">{children}</p>);
}