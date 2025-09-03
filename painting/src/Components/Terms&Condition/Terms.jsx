import React from "react";
import "./Terms.css";


const COMPANY_NAME = "True colour Services";
const WEBSITE_NAME = "truecolourwork.com";
const CONTACT_EMAIL = "Michaeltruecolours@gmail.com";
const ADDRESS = "Unit 507, 15 chatham Road, West Ryde NSW 2114 Sydney, Australia";
const LAST_UPDATED = "August 27, 2025";


function TermsAndConditions() {
return (
<div className="legal-wrapper">
<main className="legal-card">
<h1 className="legal-title">Terms & Conditions — True colour Services</h1>
<p className="legal-meta">Last updated: {LAST_UPDATED}</p>
<hr className="legal-divider" />


<section className="legal-section">
<h2>1. Acceptance of Terms</h2>
<p>
Welcome to {WEBSITE_NAME}, operated by {COMPANY_NAME}. By accessing or using our website, you agree to these Terms.
</p>
</section>


<section className="legal-section">
<h2>2. Eligibility</h2>
<p>You must be at least 13 years old (or legal age in your jurisdiction) to use our services.</p>
</section>


<section className="legal-section">
<h2>3. Use of Services</h2>
<p>You agree not to misuse the services (e.g., illegal activity, spamming, unauthorized access).</p>
</section>


<section className="legal-section">
<h2>4. Intellectual Property</h2>
<p>All content is owned by {COMPANY_NAME}. You may not copy or reproduce without permission.</p>
</section>


<section className="legal-section">
<h2>5. Limitation of Liability</h2>
<p>{COMPANY_NAME} is not liable for damages resulting from use of our website.</p>
</section>


<section className="legal-section">
<h2>6. Governing Law</h2>
<p>These Terms are governed by the laws of {ADDRESS}.</p>
</section>


<section className="legal-section">
<h2>7. Contact</h2>
<p>For questions, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
</section>


{/* <p className="legal-note">This is a general template. Consider legal advice for your region.</p> */}
</main>
</div>
);
}


export default TermsAndConditions;