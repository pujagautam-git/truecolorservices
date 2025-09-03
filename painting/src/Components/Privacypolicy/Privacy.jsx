 import React from "react";
 import "./Privacy.css";


const COMPANY_NAME = "True colour Services";
const WEBSITE_NAME = "truecolourwork.com";
const CONTACT_EMAIL = "Michaeltruecolours@gmail.com";
const ADDRESS = "Unit 507, 15 chatham Road, West Ryde NSW 2114 Sydney, Australia";
const LAST_UPDATED = "August 27, 2025";


function PrivacyPolicy() {
return (
<div className="legal-wrapper">
<main className="legal-card">
<h1 className="legal-title">Privacy Policy — True Colour Services</h1>
<p className="legal-meta">Last updated: August 27 2025</p>
<hr className="legal-divider" />


<section className="legal-section">
<h2>1. Introduction</h2>
<p>This Privacy Policy explains how Truecolour services collects, uses, and protects information on truecolourwork.com</p>
</section>


<section className="legal-section">
<h2>2. Information We Collect</h2>
<ul>
<li>Name, email, and account details</li>
<li>Browsing data and cookies</li>
<li>Device and usage information</li>
</ul>
</section>


<section className="legal-section">
<h2>3. How We Use Information</h2>
<p>We use collected data to improve our services, personalize experience, and comply with laws.</p>
</section>


<section className="legal-section">
<h2>4. Sharing of Information</h2>
<p>We don’t sell personal data. We may share with trusted providers or when required by law.</p>
</section>


<section className="legal-section">
<h2>5. Cookies</h2>
<p>We use cookies for analytics and site performance. You can disable them in your browser settings.</p>
</section>


<section className="legal-section">
<h2>6. Your Rights</h2>
<p>You may request access, update, or deletion of your data by emailing <a href={`mailto:Michaeltruecolours@gmail.com`}></a>.</p>
</section>


<section className="legal-section">
<h2>7. Changes to Policy</h2>
<p>We may update this Privacy Policy. Updates are effective when posted.</p>
</section>


<section className="legal-section">
<h2>8. Contact</h2>
<p>For privacy inquiries, contact us at Michaeltruecolours@gmail.com<a href={`mailto:Michaeltruecolours@gmail.com`}></a>.</p>
</section>


{/* <p className="legal-note">This is a general template. Consider consulting legal counsel for compliance (GDPR, CCPA, etc.).</p> */}
</main>
</div>
);
}


export default PrivacyPolicy;