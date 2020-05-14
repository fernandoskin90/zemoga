import React from 'react';

import './styles.scss';

export function Footer() {
  return (
    <footer className="footer">
      <section className="footer__nav">
        <div className="footer__nav-item">Terman and Conditions</div>
        <div className="footer__nav-item">Privacy Policy</div>
        <div className="footer__nav-item">Contact Us</div>
      </section>
      <section className="footer__media">
        <div className="footer__media-item">Follow Us</div>
        <div className="footer__media-item">
          <i className="material-icons">facebook</i>
          <i className="material-icons">twitter</i>
        </div>
      </section>
    </footer>
  );
}
