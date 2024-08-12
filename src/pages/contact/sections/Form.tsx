import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactPage: React.FC = () => {
  const { t } = useTranslation(['contact']);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle form submission, such as sending an email
    console.log(formData);
    alert('Form submitted');
  };

  return (
    <section className="text-white py-20 flex flex-col justify-center min-h-screen">
      <div className="container max-md:px-5 mx-auto text-center flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="bg-white/5 border-white/25 border p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block capitalize text-left text-sm font-medium mb-2">{t('form.name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 bg-white/5 text-white rounded focus:outline-none focus:ring focus:ring-[#40D2A3]"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block capitalize text-left text-sm font-medium mb-2">{t('form.email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 bg-white/5 text-white rounded focus:outline-none focus:ring focus:ring-[#40D2A3]"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block capitalize text-left text-sm font-medium mb-2">{t('form.subject')}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 py-2 bg-white/5 text-white rounded focus:outline-none focus:ring focus:ring-[#40D2A3]"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block capitalize text-left text-sm font-medium mb-2">{t('form.message')}</label>
              <textarea
                id="message"
                name="message"
                className="w-full px-3 py-2 bg-white/5 text-white rounded focus:outline-none focus:ring focus:ring-[#40D2A3]"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="w-full capitalize py-2 bg-[#40D2A3] border border-[#40D2A3] text-[#222] rounded focus:outline-none focus:ring-2 focus:ring-[#40D2A3]">
            {t('form.button')}
            </button>
          </form>
        </div>
        <div className="mt-10 text-gray-400">
          <p>JobDeal (International Innovation Management Institute AB)</p>
          <p>Kungsgatan 8, 111 43 Stockholm</p>
          <p>Org. number: 559105-6675</p>
          <p>Email: info@jobdeal.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;