import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiCheckCircle } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validate = () => {
        let errors = {};
        if (!formData.name.trim()) errors.name = "Name is required";
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Please enter a valid email address";
        }
        if (!formData.subject.trim()) errors.subject = "Subject is required";
        if (!formData.message.trim()) {
            errors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            errors.message = "Message must be at least 10 characters long";
        }
        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (formErrors[name]) {
            setFormErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setIsSubmitting(true);

        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

        if (!accessKey) {
            console.warn("VITE_WEB3FORMS_ACCESS_KEY is not defined. Simulating message dispatch.");
            setTimeout(() => {
                setIsSubmitting(false);
                setSubmitSuccess(true);
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setSubmitSuccess(false), 6050);
            }, 1200);
            return;
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    from_name: `${formData.name} (Portfolio Contact Form)`
                })
            });

            const result = await response.json();
            if (result.success) {
                setSubmitSuccess(true);
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setSubmitSuccess(false), 6050);
            } else {
                setFormErrors({ submit: result.message || "Failed to submit form. Please check your configuration key." });
            }
        } catch (err) {
            console.error(err);
            setFormErrors({ submit: "An error occurred while sending the message. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-white dark:bg-slate-900 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
            {/* Background Light Accent Decorators */}
            <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto">

                {/* Section title header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
                    >
                        Get In Touch
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm"
                    >
                        Have an opportunity, a project proposal, or just want to connect? Drop a message and let's build something exceptional.
                    </motion.p>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1 bg-blue-500 mx-auto mt-4 rounded"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch">

                    {/* Left Column: Direct Info Links */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-5 flex flex-col justify-between space-y-8"
                    >
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                                Contact Information
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                Reach out via the contact form or connect directly through the details below. I’ll make sure to get back to you as soon as possible.
                            </p>

                            <div className="space-y-4 pt-4">
                                {/* Email */}
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="flex items-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/30 dark:hover:border-slate-700/80 hover:shadow-md transition-all duration-300 group"
                                >
                                    <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                                        <HiMail className="w-5 h-5" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500">Email Address</p>
                                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{personalInfo.email}</p>
                                    </div>
                                </a>

                                {/* Phone */}
                                <a
                                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                                    className="flex items-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/30 dark:hover:border-slate-700/80 hover:shadow-md transition-all duration-300 group"
                                >
                                    <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                                        <HiPhone className="w-5 h-5" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500">Phone</p>
                                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{personalInfo.phone}</p>
                                    </div>
                                </a>

                                {/* Location */}
                                <div className="flex items-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/30 dark:hover:border-slate-700/80 hover:shadow-md transition-all duration-300 group">
                                    <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-blue-600 dark:text-blue-400">
                                        <HiLocationMarker className="w-5 h-5" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500">Location</p>
                                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Saida, Lebanon</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Badges */}
                        <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                            <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500 mb-3.5">
                                Follow & Connect
                            </p>
                            <div className="flex items-center gap-3">
                                <a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white rounded-xl shadow-sm hover:scale-105 active:scale-95 transition-all duration-300"
                                >
                                    <FaGithub className="w-5 h-5" />
                                </a>
                                <a
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl shadow-sm hover:scale-105 active:scale-95 transition-all duration-300"
                                >
                                    <FaLinkedinIn className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Interaction Form Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-7"
                    >
                        <div className="p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xl relative">
                            <AnimatePresence mode="wait">
                                {submitSuccess ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="flex flex-col items-center justify-center text-center py-16 space-y-4"
                                    >
                                        <div className="p-4 bg-emerald-500/10 border border-emerald-500/25 rounded-full text-emerald-500 animate-bounce">
                                            <HiCheckCircle className="w-12 h-12" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-xl font-bold text-slate-900 dark:text-white">Message Dispatched!</h4>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xs mx-auto">
                                                Thank you, your message has been sent successfully. I'll get in touch with you shortly.
                                            </p>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="space-y-5"
                                        noValidate
                                    >
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            {/* Name */}
                                            <div className="space-y-1.5">
                                                <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-350 tracking-wide">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all ${formErrors.name
                                                        ? "border-red-500/60 dark:border-red-500/40 focus:border-red-500/60"
                                                        : "border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500"
                                                        }`}
                                                    placeholder="John Doe"
                                                />
                                                {formErrors.name && (
                                                    <span className="text-[11px] text-red-500 dark:text-red-400 block">{formErrors.name}</span>
                                                )}
                                            </div>

                                            {/* Email */}
                                            <div className="space-y-1.5">
                                                <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-350 tracking-wide">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all ${formErrors.email
                                                        ? "border-red-500/60 dark:border-red-500/40 focus:border-red-500"
                                                        : "border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500"
                                                        }`}
                                                    placeholder="john@example.com"
                                                />
                                                {formErrors.email && (
                                                    <span className="text-[11px] text-red-500 dark:text-red-400 block">{formErrors.email}</span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Subject */}
                                        <div className="space-y-1.5">
                                            <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-350 tracking-wide">
                                                Subject Topic
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all ${formErrors.subject
                                                    ? "border-red-500/60 dark:border-red-500/40 focus:border-red-500"
                                                    : "border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500"
                                                    }`}
                                                placeholder="Partnership, project, etc."
                                            />
                                            {formErrors.subject && (
                                                <span className="text-[11px] text-red-500 dark:text-red-400 block">{formErrors.subject}</span>
                                            )}
                                        </div>

                                        {/* Message */}
                                        <div className="space-y-1.5">
                                            <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-350 tracking-wide">
                                                Detailed Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows="5"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all ${formErrors.message
                                                    ? "border-red-500/60 dark:border-red-500/40 focus:border-red-500"
                                                    : "border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500"
                                                    }`}
                                                placeholder="Hi Hussam, I'd like to discuss a project..."
                                            />
                                            {formErrors.message && (
                                                <span className="text-[11px] text-red-500 dark:text-red-400 block">{formErrors.message}</span>
                                            )}
                                        </div>

                                        {formErrors.submit && (
                                            <div className="p-3 text-xs bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-center">
                                                {formErrors.submit}
                                            </div>
                                        )}

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 focus:outline-none hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-40 disabled:pointer-events-none group shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                                                    Sending Message...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <HiPaperAirplane className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
