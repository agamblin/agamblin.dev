import React from 'react';

function Footer() {
  return (
    <footer className="h-full text-sm text-primary-400 lg:pb-24">
      &#169; 2023; Designed and developed by Arthur Gamblin. Built with{' '}
      <a className="footer-link" href="https://nextjs.org/">
        Next.js
      </a>{' '}
      and{' '}
      <a className="footer-link" href="https://tailwindcss.com/">
        Tailwind
      </a>
      . Text set using the{' '}
      <a
        className="footer-link"
        href="https://fonts.google.com/specimen/Roboto"
      >
        Roboto
      </a>{' '}
      and{' '}
      <a
        className="footer-link"
        href="https://fonts.google.com/specimen/Poppins?query=poppins"
      >
        Poppins
      </a>{' '}
      fonts.
    </footer>
  );
}

export default Footer;
