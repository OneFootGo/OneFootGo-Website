
"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("Join the waitlist and be the first to know when we launch.");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || 'There was an error submitting the email');
      }

      setMessage("Thanks for joining the waitlist! Keep an eye on your inbox for futher information.");
    } catch (error) {
      setMessage(error.message);
      console.error('There was an error submitting the email:', error);
    }
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
  <div className="md:w-1/2 order-2 lg:order-none">
    <h4 className="mt-3 mb-4.5 text-lg font-medium text-black dark:text-white">
      🎾  OneFootGo - Sports Tools to Maximize your Performance
    </h4>
    <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
      Professional-Grade Sports Analysis Tools for{" "}
      <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
        Everyone
      </span>
    </h1>
    <p>
      OneFootGo - A sports analysis platform helping athletes of all levels to maximize their performance. With the power of AI and Machine Learning, get personalized insights and recommendations on everything from your first tennis serve to your last golf swing.
    </p>
    <div className="mt-10">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-5">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email address"
            className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
          />
          <button
            aria-label="get started button"
            className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
          >
            Get Started
          </button>
        </div>
      </form>
      <p className="mt-5 text-black dark:text-white">
        {message}
      </p>
    </div>
  </div>
  <div className="md:w-1/2 sm:w-full order-1 lg:order-none sm:block">
    <div className="relative 2xl:-mr-7.5">
      <div className=" relative aspect-[700/444] w-full">
        <Image
          className="shadow-solid-l dark:hidden"
          src="/images/hero/hero-light.png"
          alt="Hero"
          fill
        />
        <Image
          className="hidden shadow-solid-l dark:block"
          src="/images/hero/hero-dark.png"
          alt="Hero"
          fill
        />
      </div>
    </div>
  </div>
</div>
        </div>
      </section>
    </>
  );
};

export default Hero;


