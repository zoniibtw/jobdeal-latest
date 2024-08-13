import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import MailIcon from "../assets/svg/newsletter.svg";

const MailFooter: React.FC = () => {
    const { t } = useTranslation('common');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target as HTMLFormElement;

        const formData = new FormData(form);
        const mailchimpUrl = "https://yourdomain.us1.list-manage.com/subscribe/post?u=xxxxxx&id=xxxxxx"; // Replace with your actual Mailchimp URL

        try {
            const response = await fetch(mailchimpUrl, {
                method: "POST",
                body: formData,
                mode: 'no-cors'
            });

            if (response.ok) {
                alert(t('newsletter.successMessage'));
            } else {
                alert(t('newsletter.errorMessage'));
            }
        } catch (error) {
            console.error('Error submitting form', error);
            alert(t('newsletter.errorMessage'));
        } finally {
            setIsSubmitting(false);
            setEmail('');
        }
    };

    return (
        <section className="w-full flex flex-col items-center">
            <div className="container w-full flex items-center px-[8%] py-10 max-md:flex-col max-md:gap-5">
                <div className="w-full flex justify-between">
                    <div className="flex items-center gap-8">
                        <img src={MailIcon} className="w-16 hauto" alt="" />
                        <div className="flex flex-col gap-1.5 text-white">
                            <h1 className="text-2xl mb-0 leading-none">{t('newsletter.title')}</h1>
                            <p className="mb-0 leading-none text-white/70">{t('newsletter.undertitle')}</p>
                        </div>
                    </div>
                </div>

                <div className="h-full w-full flex justify-end rounded-lg border border-white/25 bg-white/5 py-1.5 px-1.5">
                    <form onSubmit={handleSubmit} className="w-full flex items-center">
                        <input 
                            className="bg-transparent w-full px-2.5 text-white"
                            type="email" 
                            placeholder={t('newsletter.input')}
                            name="EMAIL" 
                            id="mce-EMAIL"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button 
                            type="submit" 
                            className="bg-[#40D2A3] text-black px-4 py-1 rounded"
                            disabled={isSubmitting}
                        >
                            {t('newsletter.button')}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default MailFooter;