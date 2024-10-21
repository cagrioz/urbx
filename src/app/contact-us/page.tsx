'use client';
import Footer from '@/components/Footer';

import { useState } from 'react';
import axios from 'axios';
import Container from '@/components/Container';
import Navigation from '@/components/Navigation';
import { ibm_mono } from '@/styles/fonts';
import { Checkbox } from '@headlessui/react';
import ButtonLink from '@/components/ButtonLink';
import Button from '@/components/Button';

export default function ContactUs() {
    const [accepted, setAccepted] = useState(false);

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
        countryCode: 'us',
        businessType: '',
        businessName: '',
        businessAddress: '',
        businessState: '',
        businessZipCode: '',
        country: 'US',
        numberOfLocations: ' ',
        tosAccepted: false,
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await axios.post('/api/sendEmail', form);
            if (response.status === 200) {
                setSubmitted(true);
            } else {
                setError('Failed to submit form');
            }
        } catch (error) {
            setError('Failed to submit form');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="pb-20">
                <Navigation />
            </div>
            <section>
                <Container>
                    <p
                        className="text-standard-4 text-[12px] tablet:text-sm font-medium uppercase tracking-wide tablet:tracking-widest"
                        style={ibm_mono.style}
                    >
                        Contact Us
                    </p>
                    <h1 className="text-white font-semibold text-3xl laptop:text-[40px] laptop:leading-[52px] mt-3">
                        Let&apos;s talk together
                    </h1>
                    <div className="mx-auto px-6 py-8 laptop:p-[60px] bg-standard-7 rounded-[20px] shadow-sm mt-10">
                        <p className="text-black max-w-[589px] font-general-sans text-xl laptop:text-2xl mb-10 font-normal">
                            Tell us more about your business so we can determine the right URBX solution for your space.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <h2 className="text-base font-semibold mb-4 text-black">Email us at sales@urbx.com or fill out the form below.</h2>
                            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
                                {/* First Name */}
                                <div className="overflow-hidden flex items-center rounded-[10px] focus-within:ring-2 border border-standard-5 focus-within:ring-blue-500 focus-within:border-blue-500 focus-within:outline-none">
                                    <label
                                        style={ibm_mono.style}
                                        htmlFor="firstName"
                                        className="uppercase shrink-0 w-[180px] tablet:w-[120px] laptop:w-[180px] font-normal h-14 flex items-center px-5 bg-standard-7 rounded-l-[10px] text-[13px] text-standard-4"
                                    >
                                        FIRST NAME{' '}
                                        <span className="shrink-0 text-red-500 ml-2 -mt-1.5 text-[8px]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        className="grow h-14 bg-white text-black rounded-r-[10px] px-3 py-2 focus:outline-none"
                                        required
                                    />
                                </div>

                                <div className="overflow-hidden flex items-center rounded-[10px] focus-within:ring-2 border border-standard-5 focus-within:ring-blue-500 focus-within:border-blue-500 focus-within:outline-none">
                                    <label
                                        style={ibm_mono.style}
                                        htmlFor="lastName"
                                        className="uppercase shrink-0 w-[180px] tablet:w-[120px] laptop:w-[180px] font-normal h-14 flex items-center px-5 bg-standard-7 rounded-l-[10px] text-[13px] text-standard-4"
                                    >
                                        LAST NAME{' '}
                                        <span className="shrink-0 text-red-500 ml-2 -mt-1.5 text-[8px]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        className="grow h-14 bg-white text-black rounded-r-[10px] px-3 py-2 focus:outline-none"
                                        required
                                    />
                                </div>

                                {/* Phone Number */}
                                <div className="overflow-hidden flex items-center rounded-[10px] focus-within:ring-2 border border-standard-5 focus-within:ring-blue-500 focus-within:border-blue-500 focus-within:outline-none">
                                    <label
                                        style={ibm_mono.style}
                                        htmlFor="phoneNumber"
                                        className="uppercase shrink-0 w-[180px] tablet:w-[120px] laptop:w-[180px] font-normal h-14 flex items-center px-5 bg-standard-7 rounded-l-[10px] text-[13px] text-standard-4"
                                    >
                                        PHONE NUMBER{' '}
                                        <span className="shrink-0 text-red-500 ml-2 -mt-1.5 text-[8px]">*</span>
                                    </label>
                                    <div className="relative flex-1 flex items-center">
                                        <select
                                            name="countryCode"
                                            value={form.countryCode}
                                            onChange={handleChange}
                                            className="absolute inset-y-0 left-0 w-14 px-2 bg-white focus:outline-none"
                                            required
                                        >
                                            <option value="us">🇺🇸</option>
                                        </select>
                                        <input
                                            maxLength={10}
                                            type="tel"
                                            name="phoneNumber"
                                            id="phoneNumber"
                                            value={form.phoneNumber}
                                            onChange={handleChange}
                                            className="grow h-14 bg-white text-black rounded-r-[10px] pl-16 py-2 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Email Address */}
                                <div className="overflow-hidden flex items-center rounded-[10px] focus-within:ring-2 border border-standard-5 focus-within:ring-blue-500 focus-within:border-blue-500 focus-within:outline-none">
                                    <label
                                        style={ibm_mono.style}
                                        htmlFor="emailAddress"
                                        className="uppercase shrink-0 w-[180px] tablet:w-[120px] laptop:w-[180px] font-normal h-14 flex items-center px-5 bg-standard-7 rounded-l-[10px] text-[13px] text-standard-4"
                                    >
                                        EMAIL ADDRESS{' '}
                                        <span className="shrink-0 text-red-500 ml-2 -mt-1.5 text-[8px]">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="emailAddress"
                                        id="emailAddress"
                                        value={form.emailAddress}
                                        onChange={handleChange}
                                        className="grow h-14 bg-white text-black rounded-r-[10px] px-3 py-2 focus:outline-none"
                                        required
                                    />
                                </div>
                            </div>
                            <h2 className="text-base font-semibold mb-4 mt-10 text-black">
                                Tell us about your business <span className="font-normal">(optional)</span>
                            </h2>
                            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
                                {/* First Name */}
                                <div className="overflow-hidden flex items-center rounded-[10px] focus-within:ring-2 border border-standard-5 focus-within:ring-blue-500 focus-within:border-blue-500 focus-within:outline-none">
                                    <label
                                        style={ibm_mono.style}
                                        htmlFor="businessType"
                                        className="uppercase shrink-0 w-[180px] tablet:w-[120px] laptop:w-[180px] font-normal h-14 flex items-center px-5 bg-standard-7 rounded-l-[10px] text-[13px] text-standard-4"
                                    >
                                        Business Type
                                    </label>
                                    <input
                                        type="text"
                                        name="businessType"
                                        id="businessType"
                                        value={form.businessType}
                                        onChange={handleChange}
                                        className="grow h-14 bg-white text-black rounded-r-[10px] px-3 py-2 focus:outline-none"
                                    />
                                </div>

                                <div className="overflow-hidden flex items-center rounded-[10px] focus-within:ring-2 border border-standard-5 focus-within:ring-blue-500 focus-within:border-blue-500 focus-within:outline-none">
                                    <label
                                        style={ibm_mono.style}
                                        htmlFor="businessName"
                                        className="uppercase shrink-0 w-[180px] tablet:w-[120px] laptop:w-[180px] font-normal h-14 flex items-center px-5 bg-standard-7 rounded-l-[10px] text-[13px] text-standard-4"
                                    >
                                        Business Name
                                    </label>
                                    <input
                                        type="text"
                                        name="businessName"
                                        id="businessName"
                                        value={form.businessName}
                                        onChange={handleChange}
                                        className="grow h-14 bg-white text-black rounded-r-[10px] px-3 py-2 focus:outline-none"
                                    />
                                </div>
                                <div className="overflow-hidden flex items-center rounded-[10px] focus-within:ring-2 border border-standard-5 focus-within:ring-blue-500 focus-within:border-blue-500 focus-within:outline-none">
                                    <label
                                        style={ibm_mono.style}
                                        htmlFor="businessAddress"
                                        className="uppercase shrink-0 w-[180px] tablet:w-[120px] laptop:w-[180px] font-normal h-14 flex items-center px-5 bg-standard-7 rounded-l-[10px] text-[13px] text-standard-4"
                                    >
                                        Business Address
                                    </label>
                                    <input
                                        type="text"
                                        name="businessAddress"
                                        id="businessAddress"
                                        value={form.businessAddress}
                                        onChange={handleChange}
                                        className="grow h-14 bg-white text-black rounded-r-[10px] px-3 py-2 focus:outline-none"
                                    />
                                </div>
                                <div className="overflow-hidden flex items-center rounded-[10px] focus-within:ring-2 border border-standard-5 focus-within:ring-blue-500 focus-within:border-blue-500 focus-within:outline-none">
                                    <label
                                        style={ibm_mono.style}
                                        htmlFor="businessState"
                                        className="uppercase shrink-0 w-[180px] tablet:w-[120px] laptop:w-[180px] font-normal h-14 flex items-center px-5 bg-standard-7 rounded-l-[10px] text-[13px] text-standard-4"
                                    >
                                        Business State
                                    </label>
                                    <select
                                        name="businessState"
                                        id="businessState"
                                        value={form.businessState}
                                        onChange={handleChange}
                                        className="grow h-14 bg-white text-black rounded-r-[10px] px-3 py-2 focus:outline-none appearance-none"
                                    >
                                        <option value="">Select a state</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                    </select>
                                </div>
                                <div className="overflow-hidden flex items-center rounded-[10px] focus-within:ring-2 border border-standard-5 focus-within:ring-blue-500 focus-within:border-blue-500 focus-within:outline-none">
                                    <label
                                        style={ibm_mono.style}
                                        htmlFor="businessZipCode"
                                        className="uppercase shrink-0 w-[180px] tablet:w-[120px] laptop:w-[180px] whitespace-nowrap font-normal h-14 flex items-center px-5 bg-standard-7 rounded-l-[10px] text-[13px] text-standard-4"
                                    >
                                        Business Zip Code
                                    </label>
                                    <input
                                        type="text"
                                        name="businessZipCode"
                                        id="businessZipCode"
                                        value={form.businessZipCode}
                                        onChange={handleChange}
                                        className="grow h-14 bg-white text-black rounded-r-[10px] px-3 py-2 focus:outline-none"
                                    />
                                </div>

                                <div className="overflow-hidden flex items-center rounded-[10px] focus-within:ring-2 border border-standard-5 focus-within:ring-blue-500 focus-within:border-blue-500 focus-within:outline-none">
                                    <label
                                        style={ibm_mono.style}
                                        htmlFor="country"
                                        className="uppercase shrink-0 w-[180px] tablet:w-[120px] laptop:w-[180px] font-normal h-14 flex items-center px-5 bg-standard-7 rounded-l-[10px] text-[13px] text-standard-4"
                                    >
                                        Country
                                    </label>

                                    <select
                                        name="country"
                                        id="country"
                                        value={form.country}
                                        onChange={handleChange}
                                        className="grow h-14 bg-white text-black rounded-r-[10px] px-3 py-2 focus:outline-none appearance-none"
                                    >
                                        <option value="US">🇺🇸 United States</option>
                                    </select>
                                </div>
                                <div className="overflow-hidden flex items-center rounded-[10px] focus-within:ring-2 border border-standard-5 focus-within:ring-blue-500 focus-within:border-blue-500 focus-within:outline-none">
                                    <label
                                        style={ibm_mono.style}
                                        htmlFor="numberOfLocations"
                                        className="uppercase shrink-0 w-[180px] tablet:w-[120px] laptop:w-[180px] whitespace-nowrap font-normal h-14 flex items-center px-5 bg-standard-7 rounded-l-[10px] text-[13px] text-standard-4"
                                    >
                                        Number of Locations
                                    </label>
                                    <input
                                        type="number"
                                        name="numberOfLocations"
                                        id="numberOfLocations"
                                        value={form.numberOfLocations}
                                        onChange={handleChange}
                                        className="grow h-14 bg-white text-black rounded-r-[10px] px-3 py-2 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex space-x-3 mt-11 max-w-[774px]">
                                <Checkbox
                                    checked={accepted}
                                    onChange={setAccepted}
                                    className="group shrink-0 block size-5 rounded border bg-white data-[checked]:bg-blue-500"
                                >
                                    <svg
                                        className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                    >
                                        <path
                                            d="M3 8L6 11L11 3.5"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Checkbox>
                                <p className="text-sm text-black">
                                    I accept the{' '}
                                    <a href="#" className="text-accent">
                                        URBX Terms of Use
                                    </a>
                                    ,{' '}
                                    <a href="#" className="text-accent">
                                        Urbx Marketplace Agreement
                                    </a>
                                    , and{' '}
                                    <a href="#" className="text-accent">
                                        Urbx Networks and Property Access Services Terms
                                    </a>{' '}
                                    and have read the{' '}
                                    <a href="#" className="text-accent">
                                        Privacy Policy
                                    </a>
                                    .
                                </p>
                            </div>
                            <Button
                                className="mt-6 uppercase py-4 px-6 laptop:py-5 w-full text-center"
                                variant="primary"
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Submit'}
                            </Button>

                            {error && <p className="text-red-500 mt-4">{error}</p>}
                            {submitted && (
                                <p className="text-green-500 mt-4">
                                    Your form has been submitted. We will be in touch shortly.
                                </p>
                            )}
                        </form>
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    );
}
