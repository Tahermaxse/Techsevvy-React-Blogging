import React from "react";
import Hero from "./Hero";
import { Helmet } from 'react-helmet-async';

const TermAndCondition = () => {
  return (
    <>
    <Helmet>
      <title>Terms and Conditions - Techsevvy</title>
      <meta name="description" content="Read the terms and conditions for using Techsevvy. Learn about your rights and responsibilities." />
      <meta name="keywords" content="Terms and Conditions, User Agreement, Techsevvy" />
    </Helmet>
      <Hero heading="Terms and Conditions" />
      <div className="section-4 privacy-policy updated">
        <div className="container pp">
          <div
            fs-toc-offsettop="20px"
            fs-toc-element="contents"
            fs-toc-hideurlhash="true"
            className="rich-text-block-black w-richtext"
          >
            <h3>1. Introduction</h3>
            <p>Thank you for visiting <strong>Techsevvy!</strong> These Terms and Conditions ("Terms") govern your access and use of our website and its content (the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access or use the Service.</p>
            <h3>2. Content and Use</h3>
            <h5>Content Ownership</h5>
            <p>All content on the Service, including text, graphics, images, logos, and software ("Content"), is the property of Techsevvy or its licensors. You may not use any Content without our prior written permission.</p>
            <h5>User-Generated Content</h5>
            <p>The Service may allow you to submit content, such as comments or reviews ("User Content"). You retain all ownership rights to your User Content, but you grant Techsevvy a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, publish, and distribute your User Content in connection with the Service.</p>
            <h5>Prohibited Uses</h5>
            <p>You may not use the Service for any illegal or unauthorized purpose. You agree not to:</p>
            <ul role="list">
                <li>Violate any applicable laws or regulations.</li>
                <li>Infringe on the intellectual property rights of others.</li>
                <li>Transmit any harmful or malicious content, such as viruses or malware.</li>
                <li>Disrupt the use of the Service by others.</li>
                <li>Collect or store personal data about other users without their consent.</li>
            </ul>
            <h3>3. Disclaimer</h3>
            <p>The information on the Service is provided for informational purposes only and should not be considered professional advice. Techsevvy makes no warranties or representations about the accuracy or completeness of the Content. YOU USE THE SERVICE AT YOUR OWN RISK. Techsevvy is not liable for any damages arising out of your use of the Service.</p>
            <p>All Blogs are from Techcrunch</p>
            <h3>4. Third-Party Links</h3>
            <p>The Service may contain links to third-party websites or services. Techsevvy is not responsible for the content or privacy practices of any third-party websites.</p>
            <h3>5. Indemnification</h3>
            <p>You agree to indemnify and hold harmless Techsevvy, its officers, directors, employees, agents, and licensors from and against any and all claims, losses, expenses, damages, and costs, including reasonable attorneys' fees, arising out of or relating to your use of the Service or your violation of these Terms.</p>
            <h3>6. Termination</h3>
            <p>Techsevvy may terminate your access to the Service at any time, for any reason, without notice.</p>
            <h3>7. Governing Law</h3>
            <p>These Terms shall be governed by and construed in accordance with the laws of India.</p>
            <h3>8. Entire Agreement</h3>
            <p>These Terms constitute the entire agreement between you and Techsevvy regarding your use of the Service.</p>
            <h3>9. Changes to the Terms</h3>
            <p>Techsevvy may revise these Terms at any time by posting the revised Terms on the Service. You are expected to check this page regularly so you are aware of any changes, as they are binding on you.</p>
            <h3>10. Additional Considerations</h3>
            <h5>Specific User Content Guidelines</h5>
            <p>If you submit User Content, please ensure it adheres to the following guidelines:</p>
            <ul>
                <li>Content should not be offensive, defamatory, or infringe on any third-party rights.</li>
                <li>No spam or misleading information.</li>
                <li>Respect the privacy of others.</li>
            </ul>
            <h5>Dispute Resolution</h5>
            <p>In the event of any dispute arising from or relating to these Terms, you agree to first attempt to resolve the dispute informally by contacting us at <strong>@techsevvy1.gmail.com</strong> . If the dispute is not resolved within 30 days, it will be resolved exclusively by the courts of India.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermAndCondition;
