import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setSuccess(true);
      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setError('Failed to send message. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 px-6 bg-gradient-to-b from-surface-light via-gray-50 to-surface-light dark:from-backgroundDark dark:via-surface-dark dark:to-backgroundDark">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gradient-from dark:via-gradient-to to-transparent"></div>
      <div className="max-w-3xl mx-auto">
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transform transition-all duration-300">
          <div className="p-8 md:p-12 space-y-6">
            <h2 className="font-poppins text-4xl font-bold text-textDark dark:text-textLight text-center mb-8">
              Get in Touch
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-sans text-sm font-medium text-textDark dark:text-textLight mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-textDark dark:text-textLight focus:ring-2 focus:ring-gradient-from dark:focus:ring-gradient-to focus:border-transparent transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-sans text-sm font-medium text-textDark dark:text-textLight mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-textDark dark:text-textLight focus:ring-2 focus:ring-gradient-from dark:focus:ring-gradient-to focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-sans text-sm font-medium text-textDark dark:text-textLight mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-textDark dark:text-textLight focus:ring-2 focus:ring-gradient-from dark:focus:ring-gradient-to focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {error && (
                <div className="p-4 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg">
                  {error}
                </div>
              )}

              {success && (
                <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg">
                  Message sent successfully!
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 px-6 rounded-lg text-textLight font-roboto transition-all duration-300 ${
                  loading
                    ? 'bg-gradient-from/50 dark:bg-gradient-to/50 cursor-not-allowed'
                    : 'bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to hover:from-gradient-from/90 hover:via-gradient-via/90 hover:to-gradient-to/90 hover:shadow-lg hover:shadow-gradient-from/20 dark:hover:shadow-gradient-to/20'
                }`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 