
export type LinkType = {
    platform: string;
    name?: string;
    link: string;
}

export type BioCard = {
    name: string;
    phone: LinkType;
    email: LinkType;
    socials: LinkType[];
    punchline: string;
}

const bioCard: BioCard = {
    name: "Meet Sable",
    phone: {
        platform: "Phone",
        name: "+13828852531",
        link: "tel:+13828852531"
    },
    email: {
        platform: "mail",
        name: "meetsable@gmail.com",
        link: "mailto:meetsable@gmail.com"
    },
    socials: [ 
        {
            platform: "Github",
            link: "https://github.com/MeetSable/",
        },
        {
            platform: "Linkedin",
            link: "https://www.linkedin.com/in/meetsable/",
        },
        {
            platform: "Instagram",
            link: "https://www.instagram.com/blackknight47_/"
        }

    ],
    punchline: "Hello There, I am Meet Sable. A curious software developer. I work as software engineer at AbeBooks, An Amazon Company. " +
    "I have done Masters in Applied Computing at WLU and Bachelors of Technology in Information and Communication Technology with minors in " +
    "Computational Science :) at DAIICT. I enjoy solving puzzles and build stuff, so for now Programming aligns very much with what I want. " +
    "In my free time, I watch long youtube videos (some about coding and some about random things), play video games, listen to music and if " +
    "there’s a musical instrument around, I like messing with it. Welcome to my attempt at building a portfolio webpage."
}

export default bioCard;