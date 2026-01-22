import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactUs = () => {
    const [state, handleSubmit] = useForm("mlggwddo");
    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
                <div className="w-full lg:w-1/3 space-y-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#5B0A1A]">Let's Connect</h2>
                        <p className="text-gray-500 italic">Have questions about sizes, fabrics, or bulk orders? We're just a message away.</p>
                    </div>

                    <div className="space-y-8">
                        <a
                            href="https://wa.me/919999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-6 group"
                        >
                            <div className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#5B0A1A] uppercase tracking-widest text-sm mb-1">WhatsApp Enquiry</h4>
                                <p className="text-gray-600 font-medium">+91 99999 99999</p>
                            </div>
                        </a>

                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 rounded-full bg-[#5B0A1A]/10 flex items-center justify-center shrink-0">
                                <svg className="w-6 h-6 text-[#5B0A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#5B0A1A] uppercase tracking-widest text-sm mb-1">Boutique Address</h4>
                                <p className="text-gray-600">45 Elite Plaza, Colaba,<br />Mumbai, Maharashtra 400005</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-inner grayscale contrast-125">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15091.905658604318!2d72.8242442!3d18.9482596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce2105655555%3A0x67341ed9629b008d!2sMarine%20Lines%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703600000000!5m2!1sen!2sin"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps Location"
                        ></iframe>
                    </div>
                </div>

                <div className="w-full lg:w-2/3 bg-gray-50 p-10 md:p-16 rounded-3xl shadow-sm flex justify-center items-center min-h-[200px]">
                    {state.succeeded ? (
                        <p className="text-[#5B0A1A] font-semibold text-lg text-center">
                            Thanks for reaching out! We’ll get back to you shortly.
                        </p>
                    ) : (
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-[0.2em] font-bold text-[#5B0A1A]">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    required
                                    className="w-full bg-white border-b-2 border-gray-200 py-4 px-2 focus:outline-none focus:border-[#5B0A1A] transition-colors"
                                />
                                <ValidationError prefix="Name" field="name" errors={state.errors} />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-[0.2em] font-bold text-[#5B0A1A]">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    required
                                    className="w-full bg-white border-b-2 border-gray-200 py-4 px-2 focus:outline-none focus:border-[#5B0A1A] transition-colors"
                                />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </div>

                            {/* Contact Number */}
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-xs uppercase tracking-[0.2em] font-bold text-[#5B0A1A]">
                                    Contact Number
                                </label>
                                <input
                                    type="tel"
                                    name="contactNumber"
                                    required
                                    placeholder="+91 98765 43210"
                                    pattern="[0-9]{10}"
                                    className="w-full bg-white border-b-2 border-gray-200 py-4 px-2 focus:outline-none focus:border-[#5B0A1A] transition-colors"
                                />
                                <ValidationError prefix="Contact Number" field="contactNumber" errors={state.errors} />
                            </div>

                            {/* Message */}
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-xs uppercase tracking-[0.2em] font-bold text-[#5B0A1A]">
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    required
                                    placeholder="How can we help you?"
                                    className="w-full bg-white border-b-2 border-gray-200 py-4 px-2 focus:outline-none focus:border-[#5B0A1A] transition-colors resize-none"
                                />
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>

                            {/* Submit Button */}
                            <div className="md:col-span-2 pt-4">
                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className="w-full md:w-auto px-20 py-5 bg-[#5B0A1A] text-white uppercase tracking-[0.2em] font-bold text-sm shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all rounded-sm disabled:opacity-50"
                                >
                                    {state.submitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>

                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactUs;

