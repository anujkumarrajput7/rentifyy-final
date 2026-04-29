import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'How It Works', path: '/how-it-works' },
      { name: 'Contact', path: '/contact' },
      { name: 'Careers', path: '#' },
    ],
    categories: [
      { name: 'Cars', path: '/category/cars' },
      { name: 'Bikes', path: '/category/bikes' },
      { name: 'Homes', path: '/category/homes' },
      { name: 'Electronics', path: '/category/electronics' },
    ],
    support: [
      { name: 'FAQs', path: '#' },
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Refund Policy', path: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <span className="font-bold text-xl text-foreground">R</span>
              </div>
              <span className="font-display font-bold text-xl">Rentify</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Rent anything you need - from cars to furniture, electronics to appliances. 
              The smart way to access what you need, when you need it.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Categories</h4>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-primary-foreground/70">
                  123 Business Park, Sector 5, Mumbai 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+919876543210" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:hello@rentify.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  hello@rentify.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Rentify. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.support.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
