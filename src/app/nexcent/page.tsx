import Container from "@/components/Container";
import MainLayout from "@/components/MainLayout";
import React from "react";

const NexcentPage = () => {
  return (
    <MainLayout className="w-full min-h-screen">
      <Container className="bg-nc-silver px-7">
        <nav className="h-[84px] flex items-center justify-between mx-auto">
          <div id="logo" className="flex items-center gap-2 h-full">
            <img src="/nexcent/logoNexcent.png" alt="" />
            <h2 className="font-bold text-2xl text-nc-secondary">Nexcent</h2>
          </div>
          <section className="flex items-center justify-between w-1/2">
            <h3 className="text-base cursor-pointer">Home</h3>
            <h3 className="text-base cursor-pointer">Section </h3>
            <h3 className="text-base cursor-pointer">Feature</h3>
            <h3 className="text-base cursor-pointer">Product</h3>
            <h3 className="text-base cursor-pointer">Testimonial</h3>
            <h3 className="text-base cursor-pointer">FAQ </h3>
          </section>

          <section className="flex items-center gap-[10px]">
            <div className="text-nc-primary text-sm p-2 cursor-pointer">Login</div>
            <div className="rounded-md bg-nc-primary text-white text-sm p-2 cursor-pointer">Sign up</div>
          </section>
        </nav>

        <section className="flex flex-col-reverse md:flex-row justify-center items-center gap-16 lg:gap-24 h-[599px]">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold text-nc-neutral-dgray">Lesson and insights</h1>
            <h3 className="text-5xl font-bold text-nc-primary">from 8 years</h3>
            <p className="text-base text-nc-neutral-gray">
              Where to grow your business as a photographer: site or social media?
            </p>
            <button className="bg-nc-primary px-8 py-3 rounded-sm text-white max-w-32 text-sm">Register</button>
          </div>
          <img src="/nexcent/heroImg.png" alt="" className="w-60 lg:w-fit" />
        </section>
      </Container>

      <Container className="px-7">
        <section className="pt-10 flex flex-col items-center">
          <h3 className="text-4xl text-nc-neutral-dgray font-medium">Our Client</h3>
          <p className="text-base text-nc-neutral-gray mt-2">We have been working with some Fortune 500+ clients</p>
          <div className="flex items-center justify-between w-5/6 my-4">
            {[...Array(7)].map((_, idx) => (
              <img src={`/nexcent/icon/logo-${idx + 1}.png`} alt="" />
            ))}
          </div>
        </section>

        <section className="pt-10 flex flex-col items-center">
          <h3 className="text-4xl w-1/2 text-center text-nc-neutral-dgray font-medium">
            Manage your entire community in a single system
          </h3>
          <p className="text-base text-nc-neutral-gray mt-2">Who is Nextcent suitable for?</p>
        </section>
      </Container>
    </MainLayout>
  );
};

export default NexcentPage;
