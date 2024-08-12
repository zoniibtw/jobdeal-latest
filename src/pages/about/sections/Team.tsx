import React from "react";
import { useTranslation } from "react-i18next";
import Hakan from "../../../assets/png/staff/hakan.jpeg";
import Nino from "../../../assets/png/staff/nino.jpeg";
import Markus from "../../../assets/png/staff/markus.jpeg";
import Daniel from "../../../assets/png/staff/10.jpeg";
import Jayper from "../../../assets/png/staff/Rectangle 80.png";
import Pedro from "../../../assets/png/staff/Rectangle 79.png";
import Fatima from "../../../assets/png/staff/image 58.png";
import Dasha from "../../../assets/png/staff/Rectangle 39.png";
import Jan from "../../../assets/png/staff/Rectangle 78.png";
import Daniel2 from "../../../assets/png/staff/Rectangle 82.png";
import Stella from "../../../assets/png/staff/stella.jpeg";
import Arsalan from "../../../assets/png/staff/arslan.jpeg";
import Maglorie from "../../../assets/png/staff/maglorie.jpeg";
import Bilal from "../../../assets/png/staff/bilal.jpeg";
import Temitayo from "../../../assets/png/staff/temitayo.jpeg";
import LinkedIn from "../../../assets/svg/linkedin.svg";
import Mail from "../../../assets/svg/newsletter.svg";

const Team: React.FC = () => {
    const { t } = useTranslation(['about']);
    const team = [
        {
            name: 'Håkan Ozan',
            title: 'CEO',
            image: Hakan,
            mail: 'hakan@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Nino Baraka',
            title: 'Board member & Advisor',
            image: Nino,
            mail: 'nino@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Markus Barth-Jörgensen',
            title: 'Manager & Co-Founder',
            image: Markus,
            mail: 'markus@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Jayper Sanchez',
            title: 'CTO',
            image: Jayper,
            mail: 'jayper@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Bilal Sanchez',
            title: 'CMO',
            image: Bilal,
            mail: 'bilal@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Fatima',
            title: 'CPO',
            image: Fatima,
            mail: 'fatima@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Daniel Simon',
            title: 'Partners & Relations',
            image: Daniel,
            mail: 'daniel@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Dasha Chepizhko',
            title: '-',
            image: Dasha,
            mail: 'dasha@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Jan Jakub Kowalcyk',
            title: 'Crypto Financial Advisor',
            image: Jan,
            mail: 'jan@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Pedro',
            title: 'Web3 Advisor',
            image: Pedro,
            mail: 'pedro@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Stella Onyinyechi',
            title: 'Community',
            image: Stella,
            mail: 'stella@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Temitayo',
            title: 'Community',
            image: Temitayo,
            mail: 'temitayo@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Daniel',
            title: 'Community',
            image: Daniel2,
            mail: 'daniel@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Maglorie',
            title: 'Community',
            image: Maglorie,
            mail: 'maglorie@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
        {
            name: 'Arsalan Ahmed',
            title: 'Community',
            image: Arsalan,
            mail: 'arsalan@jobdeal.com',
            linkedin: 'https://linkedin.com/'
        },
    ];

    return (
        <section className="text-white py-20">
            <div className="container mx-auto max-md:px-5">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">{t('team.title')}</h2>
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