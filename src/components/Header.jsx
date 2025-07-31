import { motion ,AnimatePresence} from "framer-motion";
import { FiGithub, FiTwitter, FiMenu, FiX, FiLinkedin } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { a, div } from "framer-motion/client";

const Header = () => {
  //Toggle open/close menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [contactFormOpen, setContactFormOpen] = useState(false);

  const openContactForm = () => {
    setContactFormOpen(true);
  };
  const closeContactForm = () => {
    setContactFormOpen(false);
  };
  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo with animation */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
            S
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-500 to-gray-100 bg-clip-text text-transparent">
            SumitXD
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="lg:flex hidden space-x-8">
          {["Home", "About", "Skills", "Projects", "Contact"].map(
            (item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                  delay: index * 0.1 + 0.5,
                  duration: 0.8,
                }}
              >
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className=" inline-block relative text-gray-800 dark:text-gray-200 hover:text-purple-600 cursor-pointer transition-colors duration-300 font-medium group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-200 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              </motion.div>
            )
          )}
        </nav>

        {/* Social-icons and Hire me button */}
        <div className="flex items-center space-x-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.5,
              duration: 0.8,
            }}
            className="md:flex hidden items-center space-x-4"
          >
            {[
              { Icon: FiGithub, href: "#" },
              { Icon: FiTwitter, href: "#" },
              { Icon: FaLinkedin, href: "#" },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="inline-block text-gray-800 dark:text-gray-200 transition-colors duration-300"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Hire me button */}
          <motion.button
            onClick={openContactForm}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.7,
              duration: 0.8,
            }}
            className="md:flex hidden px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500"
          >
            Hire me
          </motion.button>
        </div>

        {/* Mobile Menu button  */}
        <div className="md:hidden flex items-center">
          <motion.button onClick={toggleMenu} whileTap={{ scale: 0.7 }}>
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5  "
      >
        <nav className="flex flex-col space-y-3 mb-4">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => {
            return (
              <a
                href="#"
                onClick={toggleMenu}
                key={item}
                className="text-gray-800 dark:text-gray-200 py-3  hover:text-purple-600 transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            );
          })}
        </nav>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            <a href="#">
              <FiGithub className="h-5 w-5 text-gray-500"></FiGithub>
            </a>
            <a href="#">
              <FiTwitter className="h-5 w-5 text-gray-500"></FiTwitter>
            </a>
            <a href="#">
              <FiLinkedin className="h-5 w-5 text-gray-500"></FiLinkedin>
            </a>
          </div>
          <button
            onClick={()=>
            {
              openContactForm();
              toggleMenu();
            }
            }
            className="mt-4 w-full px-4 py-2 rounded-lg bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500">
              contact me
          </button>
        </div>
      </motion.div>
      {/* contact form */}
      {/* if the contact form is open then render this code  */}
      <AnimatePresence>
      {contactFormOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
          }}
          onClick={closeContactForm}
          className="fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{scale:0.8,opacity:0,y:30}}
            animate={{scale:1,opacity:1,y:0}}
            exit={{scale:0.8,opacity:0,y:30}}
            transition={{
              type:"spring",
              damping:30,
              stiffness:200,
              duration:0.8
            }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-gray-300">Get in Touch</h1>
              <button onClick={closeContactForm}>
                <FiX className="w-6 h-6 text-gray-300 font-extrabold stroke-[3]" />
              </button>
            </div>
            {/* Input Form */}
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-500 transition-colors duration-300 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-500 transition-colors duration-300 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  rows="4"
                  placeholder="How can i help you?"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-500 transition-colors duration-300 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                />
              </div>
              <motion.button
              type="submit"
              whileHover={{scale:1.03}}
              whileTap={{scale:0.97}}
              className="w-full px-4 py-2 bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold rounded-lg hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500 shadow-md hover:shadow-lg hover:shadow-purple-700/50 ">
                Send message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
    
  );
};

export default Header;
