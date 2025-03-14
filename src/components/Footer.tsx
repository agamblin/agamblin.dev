import React from 'react';

function Footer() {
  return (
    <footer className="h-full text-sm text-primary-400 lg:pb-24">
      &#169; {new Date().getFullYear()}; Designed and developed by Arthur
      Gamblin. Built with&nbsp;
      <a className="footer-link" href="https://nextjs.org/">
        Next.js
      </a>
      &nbsp;and&nbsp;
      <a className="footer-link" href="https://tailwindcss.com/">
        Tailwind
      </a>
      . Text set using the&nbsp;
      <a
        className="footer-link"
        href="https://fonts.google.com/specimen/Roboto"
      >
        Roboto
      </a>
      &nbsp;and&nbsp;
      <a
        className="footer-link"
        href="https://fonts.google.com/specimen/Poppins?query=poppins"
      >
        Poppins
      </a>
      &nbsp;fonts.
    </footer>
  );
}

export default Footer;
