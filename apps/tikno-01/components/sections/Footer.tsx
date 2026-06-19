'use client';

import { Container, Text } from '@tikno/ui';

const footerLinks = {
  Product: ['Features', 'Pricing', 'FAQ', 'Changelog'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Cookie Policy'],
  Social: ['Twitter', 'GitHub', 'LinkedIn', 'Discord'],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <Text size="sm" color="subtle" align="center">
            &copy; {new Date().getFullYear()} Tikno Showcase. All rights reserved.
          </Text>
        </div>
      </Container>
    </footer>
  );
}
