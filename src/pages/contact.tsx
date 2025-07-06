// src/pages/ContactPage.tsx
import { useEffect } from "react";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, ArrowDownRight } from 'lucide-react';
import Image5 from '@/assets/image-2.png';
import { Link } from "react-router-dom";
import ContactForm from '@/models/contact-form';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: [
      <a
        href="https://www.google.com/maps?q=Kiambere+Road,+Upperhill,+Manga+Hse,+Ground+Floor"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:underline dark:text-white"
      >
        Kiambere Road, Upperhill, Manga Hse, Ground Floor
      </a>
    ],
    color: 'text-emerald-500 dark:text-emerald-400',
  },
  {
    icon: Phone,
    title: 'General Inquiries',
    details: [
      'For general inquiries, please reach out to us at:',
      <a
        href="tel:+254725384554"
        className="text-black hover:underline dark:text-white"
      >
        +254 725 384 554
      </a>,
      <a
        href="tel:+254792187994"
        className="text-black hover:underline dark:text-white"
      >
        +254 792 187 994
      </a>,
      <a
        href="mailto:info@epitomeconsulting.co.ke"
        className="text-black hover:underline dark:text-white"
      >
        info@epitomeconsulting.co.ke
      </a>
    ],
    color: 'text-green-500 dark:text-green-400',
  },
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/share/1AjYiTAhRy/', color: 'hover:text-emerald-500 dark:hover:text-emerald-400' },
  { icon: Twitter, href: 'https://x.com/Millenium_Soln?t=LAjPcn3pBRR5ad8Q2xKvlQ&s=09', color: 'hover:text-blue-400 dark:hover:text-blue-300' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/millenium-solutions-ea-ltd/', color: 'hover:text-blue-700 dark:hover:text-blue-500' },
];

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-white/0 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src={Image5}
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover filter brightness-90 dark:brightness-75"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative flex items-center justify-center h-full px-4 text-center">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-white drop-shadow">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Have questions about Epitome Consulting? We're here to help! Reach out to us for inquiries, support, or feedback.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((info, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 transform transition hover:scale-105 hover:shadow-xl"
            >
              <div className={`${info.color} mb-4`}>
                <info.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {info.title}
              </h3>
              {info.details.map((d, i) => (
                <p key={i} className="text-gray-600 dark:text-gray-300">{d}</p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-600 shadow-lg p-6 text-gray-800 dark:text-gray-200">
            <ContactForm />
          </div>

          {/* Social Links & Map */}
          <div className="lg:col-start-2 space-y-8">
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Connect With Us
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Follow us on social media for the latest updates and news about our products and services.
              </p>
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className={`text-gray-400 dark:text-gray-500 transition ${s.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <s.icon size={24} />
                  </a>
                ))}
              </div>

              {/* Google Map Embed */}
              <div className="mt-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Our Location</h4>
                <div className="w-full h-[40rem] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600">
                  <iframe
                    title="Our Location"
                    src="https://www.google.com/maps?q=Manga+House,9+Kiambere+Road,Upperhill,Nairobi,Kenya&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-[#A87C1F] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-4xl font-bold mb-6">
            Be Ready to Transform Your IT Solutions with Us
          </h3>
          <p className="mb-10 text-xl text-red-100 leading-relaxed dark:text-red-200">
            Join us in creating a better future through technology. Our team is dedicated to providing you with the best solutions tailored to your needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/solutions"
              className="group flex items-center rounded-full border border-white/20 bg-white px-6 py-2 text-[#A87C1F] backdrop-blur-md transition-colors duration-300 hover:border-white hover:bg-gray-100 dark:bg-gray-800 dark:text-[#A87C1F] dark:hover:bg-gray-700"
            >
              <span className="mr-2 transform transition-transform duration-300 group-hover:translate-x-1">
                Solutions We Offer?
              </span>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-red-600/30 transition-all duration-300 group-hover:border-red-600 group-hover:rotate-45 dark:border-red-400/30 dark:group-hover:border-red-400">
                <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
