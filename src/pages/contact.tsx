import React, { useState } from 'react';
import {  Mail,  Phone,  MapPin,  Clock,  Send,  Building2,  User,  MessageSquare,  CheckCircle,  Linkedin,  Twitter,  Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@epitomeconsulting.com',
      link: 'mailto:info@epitomeconsulting.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+254 725 384 554',
      link: 'tel:+254725384554',
      description: 'Mon-Fri from 8am to 6pm',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Nairobi, Kenya',
      link: 'https://maps.google.com/?q=Nairobi+Kenya',
      description: 'Come say hello at our office',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 8:00 AM - 6:00 PM',
      description: 'Weekend consultations by appointment',
    },
  ];

  const services = [
    'MERL Services',
    'Strategic Planning',
    'Capacity Building',
    'Project Management',
    'Innovation Advisory',
    'Operational Excellence',
    'Other',
  ];

  return (
    <div className="pt-16">
      <section className="py-24 bg-gradient-to-br from-orange-100 to-red-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-orange-200 text-orange-700 dark:bg-orange-900 dark:text-orange-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4 mr-2" /> Get in Touch
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Start Your Transformation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to take your organization to the next level? Contact us today to discuss your goals and how we can help.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white/50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Send Us a Message</h2>
            {isSubmitted ? (
              <div className="p-8 bg-green-100 border border-green-500 rounded-xl text-center text-green-800 dark:bg-green-900 dark:border-green-400 dark:text-green-100">
                <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField icon={User} label="Full Name *" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Enter your full name" />
                  <InputField icon={Mail} label="Email Address *" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Enter your email" type="email" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField icon={Building2} label="Company/Organization" name="company" value={formData.company} onChange={handleInputChange} placeholder="Enter company name" />
                  <InputField icon={Phone} label="Phone Number" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter phone number" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Service of Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="">Select a service</option>
                    {services.map((s, i) => (
                      <option key={i} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Tell us about your project or requirements..."
                  />
                </div>
                <button type="submit" className="w-full flex items-center justify-center bg-[#A87C1F] hover:bg-[#A87C1F] text-white font-semibold px-6 py-3 rounded-lg transition-all">
                  <Send className="w-5 h-5 mr-2" /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h2>
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start space-x-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                    <info.icon className="w-6 h-6 text-[#A87C1F] dark:text-[#A87C1F]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-sm text-[#A87C1F] dark:text-[#A87C1F] hover:underline block">{info.details}</a>
                    ) : (
                      <p className="text-sm text-[#A87C1F] dark:text-[#A87C1F]">{info.details}</p>
                    )}
                    <p className="text-sm text-gray-600 dark:text-gray-400">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <SocialButton href="https://linkedin.com/company/epitome-consulting" icon={<Linkedin />} />
                <SocialButton href="https://twitter.com/epitomeconsult" icon={<Twitter />} />
                <SocialButton href="https://epitomeconsulting.com" icon={<Globe />} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

type InputFieldProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: string;
  required?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  icon: Icon,
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{label}</label>
    <div className="relative">
      <Icon className="absolute left-3 top-3 w-5 h-5 text-gray-400 dark:text-gray-500" />
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        placeholder={placeholder}
      />
    </div>
  </div>
);

const SocialButton = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    className="p-3 rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

export default Contact;
