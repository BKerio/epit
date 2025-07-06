import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Twitter, Facebook, Linkedin, ChevronDownCircle, Phone, Mail } from "lucide-react";
import { ThemeToggle } from "@/models/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import LogoBlack from "@/assets/logo(white).png";
import LogoWhite from "@/assets/logo(black).png";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [headerHeight, setHeaderHeight] = useState(0);

  // --- CORRECTED: State management for scroll visibility ---
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0); // Use useRef to avoid stale state in the event listener

  const location = useLocation();
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const getInitialLogo = () => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    return isDarkMode ? LogoWhite : LogoBlack;
  };
  const [currentLogoSrc, setCurrentLogoSrc] = useState(getInitialLogo);

  const closeAllMenus = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setActiveDropdown(null);
  };

  const handleMouseEnter = (linkName: string) => {
    if (!isMobile) {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
      setActiveDropdown(linkName);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      dropdownTimeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 200);
    }
  };

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setCurrentLogoSrc(getInitialLogo());
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  // --- CORRECTED: Scroll effect for hide/show and shrink ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show nav when at the top or when mobile menu is open
      if (currentScrollY <= 100 || isOpen) {
        setVisible(true);
      } else {
        // Determine direction by comparing with the ref's current value
        if (currentScrollY > lastScrollY.current) {
          setVisible(false); // Scrolling down
        } else {
          setVisible(true); // Scrolling up
        }
      }
      
      setScrolled(currentScrollY > 10);
      lastScrollY.current = currentScrollY; // Update the ref's value
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]); // Only depend on isOpen, as the ref doesn't need to be a dependency

  // Effect to calculate header height for the spacer
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeaderHeight();
    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobileStatus = window.innerWidth < 1024;
      if (isMobile !== mobileStatus) {
        setIsMobile(mobileStatus);
        closeAllMenus();
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  useEffect(() => {
    closeAllMenus();
  }, [location]);

  const navLinks = [
   { name: "Home", path: "/" },

  {
    name: "About Us",
    path: "/about",
    dropdown: [
      { name: "Our Story", path: "/about" },
      { name: "Our Approach", path: "/methodology" },
    ],
  },

  { name: "Certifications & Affiliations", path: "/certification" },

  {
    name: "Areas of Expertise",
    path: "/solutions",
    dropdown: [
      {
        name: "Project Management",
        path: "/projectmanagement",
      },
      {
        name: "Monitoring, Evaluation, Research & Learning (MERL)",
        path: "/merl",
      },
      {
        name: "Organizational Development",
        path: "/organizationaldevelopment",
      },
     
    ],
  },
  { name: "Contact Us", path: "/contact" },
];
  
  return (
    <>
      <motion.header
        ref={headerRef}
        className="fixed top-0 left-0 w-full z-50"
        animate={{ y: visible ? 0 : "-100%" }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        {/* Contact & Social Bar */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 py-2 bg-white dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 gap-y-2">
          <div className="flex items-center flex-wrap justify-center gap-x-4 gap-y-2 lg:gap-x-5">
            <a href="tel:+254725384554" className="flex items-center gap-2 text-sm font-medium hover:text-[#A87C1F] dark:hover:text-[#A87C1F] transition-colors">
              <Phone className="h-6 w-6 text-[#A87C1F]" />
              <span>+254 725 384 554</span>
            </a>
            <span className="hidden md:block text-black dark:text-gray-600">|</span>
            <a href="tel:+254792187994" className="flex items-center gap-2 text-sm font-medium hover:text-amber-600 dark:hover:text-blue-400 transition-colors">
              <Phone className="h-6 w-6 text-[#A87C1F]" />
              <span>+254 792 187 994</span>
            </a>
            <span className="hidden md:block text-black dark:text-gray-600">|</span>
             <a href="mailto:info@epitomeconsulting.co.ke" className="flex items-center gap-2 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail className="h-6 w-6 text-[#A87C1F]" />
              <span>info@epitomeconsulting.co.ke</span>
            </a>
          </div>
          <div className="flex items-center gap-x-5">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter" className="text-[#A87C1F] dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"><Twitter className="h-7 w-7" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="text-[#A87C1F] dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-600 transition-colors"><Facebook className="h-7 w-7" /></a>
              <a href="https://www.linkedin.com/company/101302217/admin/dashboard/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Linkedin" className="text-[#A87C1F] dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-500 transition-colors"><Linkedin className="h-7 w-7" /></a>
              {/* Talk to Us Button */}
              <Link to="/contact" className="ml-4 px-4 py-2 bg-[#A87C1F] text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition-colors">
                Talk to Us
              </Link>
          </div>
        </div>

        {/* Floating Navbar Container */}
        <div className={`w-full px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled ? 'py-1' : 'py-3'}`}>
            <motion.nav
              layout
              className={`max-w-7xl mx-auto flex justify-between items-center px-6 bg-white dark:bg-gray-900/80 backdrop-blur-lg rounded-xl shadow-lg transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}
            >
                <Link to="/" className="flex items-center h-full" onClick={closeAllMenus}>
                <img
                  src={currentLogoSrc}
                  alt="Epitome Consulting Logo"
                  className="w-auto object-contain transition-all duration-300"
                  style={{ height: scrolled ? '110%' : '195%' }}
                />
                </Link>
              <div className="hidden lg:flex items-center space-x-2 lg:space-x-3 h-full">
                {navLinks.map((link) => (
                  <div key={link.name} className="relative h-full flex items-center" onMouseEnter={() => link.dropdown && handleMouseEnter(link.name)} onMouseLeave={() => link.dropdown && handleMouseLeave()}>
                    <Link to={link.path} className={`flex items-center px-2 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname.startsWith(link.path) && link.path !== '/' || location.pathname === link.path ? "text-[#A87C1F] dark:text-[#A87C1F]" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}>
                      {link.name}
                      {link.dropdown && <ChevronDownCircle className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                    </Link>
                    <AnimatePresence>
                      {link.dropdown && activeDropdown === link.name && !isMobile && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-20 p-2 space-y-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl w-60" onMouseEnter={() => handleMouseEnter(link.name)} onMouseLeave={handleMouseLeave}>
                           {link.dropdown.map((sublink, index) => (
                             <React.Fragment key={sublink.name}>
                               <Link to={sublink.path} onClick={closeAllMenus} className="flex items-center w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                 <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3 flex-shrink-0" />
                                 <span>{sublink.name}</span>
                               </Link>
                               {index !== link.dropdown.length - 1 && ( <div className="border-t border-gray-200 dark:border-gray-700 my-1 mx-3" /> )}
                             </React.Fragment>
                           ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="pl-2">
                   <ThemeToggle />
                </div>
              </div>

              <div className="flex lg:hidden items-center">
                <button onClick={toggleMenu} className="p-2 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none">
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </motion.nav>
        </div>
      </motion.header>
      
      {/* Spacer div to push content below the fixed header */}
      <div style={{ height: `${headerHeight}px` }} />

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white dark:bg-gray-900 lg:hidden overflow-y-auto"
            style={{ top: `${headerHeight}px` }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <>
                      <button onClick={() => setActiveDropdown(prev => prev === link.name ? null : link.name)} className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300">
                        <span>{link.name}</span>
                        <ChevronDownCircle className={`h-5 w-5 transform transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-4 mt-1 space-y-1 overflow-hidden">
                            {link.dropdown.map(sub => (
                               <Link key={sub.name} to={sub.path} onClick={closeAllMenus} className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-400">
                                 <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3 flex-shrink-0" />
                                 <span>{sub.name}</span>
                               </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : <Link to={link.path} onClick={closeAllMenus} className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path ? 'text-[#A87C1F] dark:text-[#A87C1F]' : 'text-gray-700 dark:text-gray-300'}`}>{link.name}</Link>}
                </div>
              ))}
               <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700 px-3">
                 <div className="flex justify-center pt-2"><ThemeToggle /></div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;