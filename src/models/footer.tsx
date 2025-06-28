import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Home,
  Info,
  BookOpen,
  PhoneCall,
  MapPin,
  Mail,
  Settings,
  AwardIcon,
} from "lucide-react";
import { getCurrentYear } from "@/lib/utils";
import { services } from "@/data";

const Footer: React.FC = () => {
  const currentYear = getCurrentYear();

  return (
    <footer className="relative pt-16 pb-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-extrabold text-gray-900 dark:text-white">
                Epitome Consulting
              </span>
            </div>
            <p className="font-serif text-gray-600 dark:text-gray-300 mb-4">
              We provide strategic consulting and customized solutions to empower businesses in achieving operational excellence, growth, and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-700 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links & Solutions & Contact */}
          <div className="lg:col-span-3">
            <div className="flex flex-col md:flex-row md:justify-between gap-x-8">
              {/* Quick Links */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Home className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    <Link
                      to="/"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors font-semibold"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Info className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    <Link
                      to="/about"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors font-semibold"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Settings className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    <Link
                      to="/solutions"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors font-semibold"
                    >
                      Area of Expertise
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    <Link
                      to="/projects"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors font-semibold"
                    >
                      Impacts
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <AwardIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    <Link
                      to="/isoCertification"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors font-semibold"
                    >
                      Resources
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <PhoneCall className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    <Link
                      to="/contact"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors font-semibold"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Our Solutions */}
              <div className="flex-1 mt-8 md:mt-0">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Our Solutions
                </h3>
                <ul className="space-y-2">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <li key={service.title} className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                        <Link
                          to={service.path}
                          className="text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors text-lg font-semibold"
                        >
                          {service.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="flex-1 mt-8 md:mt-0">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Contact Us
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300 font-semibold">
                      Nairobi, Kenya
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    <a
                      href="mailto:info@epitomeconsulting.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors font-semibold"
                    >
                      info@epitomeconsulting.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <PhoneCall className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    <a
                      href="tel:+254725384554"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors font-semibold"
                    >
                      +254 725 384 554
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <PhoneCall className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    <a
                      href="tel:+254792187994"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors font-semibold"
                    >
                      +254 792 187 994
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg">
            © {currentYear} Epitome Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
