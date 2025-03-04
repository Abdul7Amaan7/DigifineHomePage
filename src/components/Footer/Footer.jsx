import React from 'react';
import LogoWhite from '../Header/LogoWhite'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section: Logo, Description, and Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div>
            <div className="mb-4"><LogoWhite/></div>
            <p className="text-lg text-gray-300">
              Digifine offers highly advanced Digital Marketing Course in Mumbai with placement which aims to bring accessible and highly effective higher education to the world and pave the way for a revolutionary digital future.
            </p>
          </div>

          {/* Course Links */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Links</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                'Digifine Digital Marketing Graduate Program',
                'Digifine Professional Digital Marketing Program',
                'Digifine Advance Graphic Design Program',
                'Digifine Data Science & Machine Learning Program',
                'Digifine Executive Digital Marketing Program',
                'Digifine E-commerce Website Development Program',
                'Digifine Video Editing & Animation Program',
                'Blog',
                'Privacy Policy and Terms & Conditions',
              ].map((link, index) => (
                <li key={index}>
                  <a href="#!" className="hover:text-yellow-500">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                { label: '+91 81081-19678', link: 'tel:+918108119678' },
                { label: '+91-88790-25425', link: 'tel:+918879025425' },
                { label: '+91-88794-83466', link: 'tel:+918879483466' },
                { label: 'info@adbizit.com', link: 'mailto:info@adbizit.com' },
              ].map(({ label, link }, index) => (
                <li key={index}>
                  <a href={link} className="hover:text-yellow-500">{label}</a>
                </li>
              ))}
              <li>
                <a href="#!" className="hover:text-yellow-500">Instagram</a> | <a href="#!" className="hover:text-yellow-500">Whatsapp</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-600 pt-6 mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Digifine Academy. All rights reserved.</p>
          <p className="mt-2">Digifine Online Digital Marketing Graduate Program Courses Offered Across The Country</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
