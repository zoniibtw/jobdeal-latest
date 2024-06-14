import React from "react";
import Image from "../../../assets/sample.png";
import LinkedIn from "../../../assets/svg/linkedin.svg";
import Mail from "../../../assets/svg/newsletter.svg";

const Team: React.FC = () => {
    const team = [
        {
            name: 'Markus Barth-Jörgensen',
            title: 'Manager & Co-Founder',
            image: Image,
            mail: 'markus@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Jayper Sanchez',
            title: 'CTO',
            image: Image,
            mail: 'jayper@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Anton Persson',
            title: 'Co-CTO',
            image: Image,
            mail: 'anton@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Bilal Sanchez',
            title: 'CMO',
            image: Image,
            mail: 'bilal@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Fatima',
            title: 'CPO',
            image: Image,
            mail: 'fatima@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Daniel Simon',
            title: 'Partners & Relations',
            image: Image,
            mail: 'daniel@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Dasha Chepizhko',
            title: 'Role title here',
            image: Image,
            mail: 'dasha@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Jan Jakub Kowalczyk',
            title: 'Crypto Financial Advisor',
            image: Image,
            mail: 'jan@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Pedro',
            title: 'Web3 Advisor',
            image: Image,
            mail: 'pedro@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Stella',
            title: 'Community',
            image: Image,
            mail: 'stella@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Wilsdom Ekwere',
            title: 'Designer (Graphics/UX)',
            image: Image,
            mail: 'wilsdom@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Daniel',
            title: 'Community',
            image: Image,
            mail: 'daniel@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Maglorie',
            title: 'Charity Advisor',
            image: Image,
            mail: 'maglorie@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Arsalan Ahmed',
            title: 'Server Technician/Engineer',
            image: Image,
            mail: 'arsalan@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Kawa',
            title: 'Developer',
            image: Image,
            mail: 'kawa@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Roka',
            title: 'Developer',
            image: Image,
            mail: 'roka@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'William',
            title: 'Developer',
            image: Image,
            mail: 'william@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Prathamesh',
            title: 'Developer',
            image: Image,
            mail: 'prathamesh@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Saviour Ani',
            title: 'Video/Motion Graphics',
            image: Image,
            mail: 'saviour@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Romar',
            title: 'Developer',
            image: Image,
            mail: 'romar@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
    ];

    return (
        <section className="text-white py-20">
            <div className="container mx-auto max-md:px-5">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Meet our Team</h2>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-14">
                    {team.map((team, index) => (
                        <div key={index} className="bg-white/5 border border-white/25 max-md:p-3 p-5 rounded-lg flex flex-col gap-2.5">
                            <div className="w-full h-[15rem] max-md:h-[12rem]">
                                <img src={team.image} className="object-center object-cover w-full h-full rounded-lg" alt={team.name} />
                            </div>
                            <div className="flex flex-col gap-1 mb-1">
                                <h3 className="font-semibold leading-none">{team.name}</h3>
                                <h4 className="text-xs leading-none">{team.title}</h4>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <a className="" href={`mailto:${team.mail}`}>
                                    <img className="w-4 h-auto" src={Mail} alt="" />
                                </a>
                                <a href={team.linkedin} target="_blank">
                                    <img className="w-4 h-auto" src={LinkedIn} alt="" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;