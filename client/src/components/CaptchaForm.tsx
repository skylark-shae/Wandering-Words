import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

 // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 // Replace with your reCAPTCHA site key
 // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const SITE_KEY = 'your-recaptcha-site-key';

const CaptchaForm: React.FC = () => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaValue) {
      alert('Please complete the CAPTCHA');
      return;
    }

    const response = await fetch('/api/verify-captcha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: captchaValue }),
    });

    const data = await response.json();
    if (data.success) {
      alert('CAPTCHA verified successfully!');
    } else {
      alert('CAPTCHA verification failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" required />
      {/* reCAPTCHA widget */}
      <ReCAPTCHA
        sitekey={SITE_KEY}
        onChange={(value) => setCaptchaValue(value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CaptchaForm;
