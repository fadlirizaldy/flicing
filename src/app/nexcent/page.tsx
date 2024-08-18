import React, { FC, PropsWithChildren } from "react";
import Container from "@/components/Container";
import MainLayout from "@/components/MainLayout";
import {
  IconArrowRight,
  IconCommunity,
  IconCommunity2,
  IconCommunity3,
  IconEventBooking,
  IconInstagram,
  IconMembers,
  IconTwitter,
  IconYoutube,
} from "@/components/icons/nexcent";
import IconPayments from "@/components/icons/nexcent/icon-payments";

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
            <div className="text-nc-primary text-sm p-2 cursor-pointer">
              Login
            </div>
            <div className="rounded-md bg-nc-primary text-white text-sm p-2 cursor-pointer">
              Sign up
            </div>
          </section>
        </nav>

        <section className="flex flex-col-reverse md:flex-row justify-center items-center gap-16 lg:gap-24 h-[599px]">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold text-nc-neutral-dgray">
              Lesson and insights
            </h1>
            <h3 className="text-5xl font-bold text-nc-primary">from 8 years</h3>
            <TextGray>
              Where to grow your business as a photographer: site or social
              media?
            </TextGray>

            <button className="bg-nc-primary px-8 py-3 rounded-sm text-white max-w-32 text-sm">
              Register
            </button>
          </div>
          <img src="/nexcent/heroImg.png" alt="" className="w-60 lg:w-fit" />
        </section>
      </Container>

      <Container className="px-7 pt-10">
        <section className="flex flex-col items-center">
          <TextTitle>Our Client</TextTitle>
          <TextGray className="mt-2">
            We have been working with some Fortune 500+ clients
          </TextGray>
          <div className="flex items-center justify-between w-5/6 mt-4">
            {[...Array(7)].map((_, idx) => (
              <img src={`/nexcent/icon/logo-${idx + 1}.png`} alt="" key={idx} />
            ))}
          </div>
        </section>

        <section className="pt-10 flex flex-col items-center">
          <TextTitle className="w-1/2 text-center">
            Manage your entire community in a single system
          </TextTitle>
          <p className="text-base text-nc-neutral-gray mt-2">
            Who is Nextcent suitable for?
          </p>

          <div className="mt-2 flex items-center justify-evenly w-full">
            <div className="flex flex-col items-center max-w-72 text-center gap-2 shadow-lg px-8 py-6">
              <IconCommunity />
              <TextTitle className="!text-2xl">
                Membership Organisations
              </TextTitle>
              <TextGray>
                Our membership management software provides full automation of
                membership renewals and payments
              </TextGray>
            </div>
            <div className="flex flex-col items-center max-w-72 text-center gap-2 shadow-lg px-8 py-6">
              <IconCommunity2 />
              <TextTitle className="!text-2xl">National Associations</TextTitle>
              <TextGray>
                Our membership management software provides full automation of
                membership renewals and payments
              </TextGray>
            </div>
            <div className="flex flex-col items-center max-w-72 text-center gap-2 shadow-lg px-8 py-6">
              <IconCommunity3 />
              <TextTitle className="!text-2xl">Clubs And Groups</TextTitle>
              <TextGray>
                Our membership management software provides full automation of
                membership renewals and payments
              </TextGray>
            </div>
          </div>
        </section>

        <section className="pt-10 flex items-center justify-center gap-10">
          <img src="/nexcent/image-2.png" alt="" className="py-10 lg:w-fit" />
          <div className="max-w-[50%] flex flex-col gap-4">
            <TextTitle>
              The unseen of spending three years at Pixelgrade
            </TextTitle>
            <TextGray>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </TextGray>
            <button className="bg-nc-primary px-8 py-3 rounded-sm text-white text-sm mt-4 w-fit">
              Learn More
            </button>
          </div>
        </section>
      </Container>

      <Container className="bg-nc-silver py-16">
        <div className="flex items-center justify-evenly">
          <div>
            <TextTitle>Helping a local</TextTitle>
            <TextTitle className="text-nc-primary">
              business reinvent itself
            </TextTitle>
            <p className="text-base">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-7 gap-y-10">
            <div className="flex items-center gap-4">
              <IconMembers />
              <div>
                <TextTitle className="!text-2xl">2245341</TextTitle>
                <TextGray>Members</TextGray>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <IconEventBooking />
              <div>
                <TextTitle className="!text-2xl">828867</TextTitle>
                <TextGray>Event Bookings</TextGray>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <IconEventBooking />
              <div>
                <TextTitle className="!text-2xl">46328</TextTitle>
                <TextGray>Clubs</TextGray>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <IconPayments />
              <div>
                <TextTitle className="!text-2xl">1926436</TextTitle>
                <TextGray>Payments</TextGray>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="px-7 py-10">
        <section className="flex items-center justify-center gap-10">
          <img src="/nexcent/image-3.png" alt="" className="" />
          <div className="max-w-[50%] flex flex-col gap-4">
            <TextTitle>How to design your site footer like we did</TextTitle>
            <TextGray>
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </TextGray>
            <button className="bg-nc-primary px-8 py-3 rounded-sm text-white text-sm mt-4 w-fit">
              Learn More
            </button>
          </div>
        </section>
      </Container>

      <Container className="bg-nc-silver px-7 py-8">
        <section className="flex gap-16">
          <img src="/nexcent/image-4.png" alt="" />
          <div className="flex flex-col gap-4">
            <TextGray className="font-medium">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </TextGray>
            <div>
              <p className="text-nc-primary text-xl mb-1">Tim Smith</p>
              <TextGray>British Dragon Boat Racing Association</TextGray>
            </div>
            <div className="flex items-center gap-8 w-full">
              <div className="flex items-center gap-3">
                {[...Array(6)].map((_, idx) => (
                  <img
                    src={`/nexcent/icon/logo-${idx + 1}.png`}
                    alt=""
                    key={idx}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 text-nc-primary font-medium cursor-pointer group">
                <h4>Meet all customers</h4>
                <IconArrowRight className="group-hover:translate-x-2 transition-all" />
              </div>
            </div>
          </div>
        </section>
      </Container>

      <Container className="px-7 py-10">
        <div>
          <TextTitle className="mb-2 text-center">
            Caring is the new marketing
          </TextTitle>
          <TextGray className="mb-5 text-center w-1/2 mx-auto">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </TextGray>

          <section className="flex items-center justify-evenly">
            <div className="flex flex-col items-center relative pb-20">
              <img src="/nexcent/image-5.png" alt="" className="rounded-lg" />
              <div className="w-80 absolute bottom-0 flex flex-col items-center bg-white rounded-lg p-4 shadow-lg">
                <TextGray className="font-semibold text-center">
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </TextGray>
                <div className="mt-4 flex items-center gap-2 text-nc-primary font-medium cursor-pointer group">
                  <h4>Read more</h4>
                  <IconArrowRight className="group-hover:translate-x-2 transition-all" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center relative pb-20">
              <img src="/nexcent/image-6.png" alt="" className="rounded-lg" />
              <div className="w-80 absolute bottom-0 flex flex-col items-center bg-white rounded-lg p-4 shadow-lg">
                <TextGray className="font-semibold text-center">
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </TextGray>
                <div className="mt-4 flex items-center gap-2 text-nc-primary font-medium cursor-pointer group">
                  <h4>Read more</h4>
                  <IconArrowRight className="group-hover:translate-x-2 transition-all" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center relative pb-20">
              <img src="/nexcent/image-7.png" alt="" className="rounded-lg" />
              <div className="w-80 absolute bottom-0 flex flex-col items-center bg-white rounded-lg p-4 shadow-lg">
                <TextGray className="font-semibold text-center">
                  Revitalizing and Enhancing the Membership Model in
                  Collaboration with Triathlon Australia
                </TextGray>
                <div className="mt-4 flex items-center gap-2 text-nc-primary font-medium cursor-pointer group">
                  <h4>Read more</h4>
                  <IconArrowRight className="group-hover:translate-x-2 transition-all" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>

      <Container className="bg-nc-silver px-7 py-8">
        <div className="flex flex-col items-center">
          <TextTitle>Pellentesque suscipit fringilla libero eu.</TextTitle>
          <button className="flex items-center bg-nc-primary px-8 py-3 rounded-sm text-white text-sm mt-4 w-fit">
            Get a Demo
          </button>
        </div>
      </Container>

      <Container className="bg-[#263238] px-7 py-14">
        <div className="flex justify-between">
          <section className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <svg
                width="44"
                height="30"
                viewBox="0 0 44 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2259 16.2379L16.561 27.6527L9.89611 16.2379H23.2259ZM25.0114 15.2177H8.10339L16.561 29.6717L25.0114 15.2177Z"
                  fill="white"
                />
                <path
                  d="M34.8137 2.0404L41.4786 13.4552H28.1488L34.8137 2.0404ZM34.8137 0L26.3561 14.454H43.2713L34.8137 0Z"
                  fill="white"
                />
                <path
                  d="M0 0L7.09143 12.7846L14.8406 0.321025L0 0Z"
                  fill="#4CAF4F"
                />
                <path
                  d="M16.5612 1.11987L23.9997 13.8332H9.1084L16.5612 1.11987Z"
                  fill="#4CAF4F"
                />
                <path
                  d="M25.9152 16.6089L33.3608 29.6718H18.1154L25.6838 16.6089H25.9152Z"
                  fill="#4CAF4F"
                />
                <path
                  d="M27.5271 15.8169L34.8137 28.68L42.2014 15.8169H27.5271Z"
                  fill="#4CAF4F"
                />
              </svg>
              <h2 className="font-bold text-2xl text-white">Nexcent</h2>
            </div>
            <div className="flex flex-col gap-2 text-white">
              <p>Copyright © 2020 Nexcent ltd.</p>
              <p>All rights reserved</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-nc-neutral-gray w-fit">
                <IconInstagram />
              </div>
              <div className="p-2 rounded-full bg-nc-neutral-gray w-fit">
                <IconTwitter />
              </div>
              <div className="p-2 rounded-full bg-nc-neutral-gray w-fit">
                <IconYoutube />
              </div>
            </div>
          </section>
          <section className="flex gap-7">
            <div className="text-white w-40">
              <h5 className="font-semibold mb-6 text-lg">Company</h5>
              <div className="flex flex-col gap-3">
                <p className="cursor-pointer hover:border-b border-white">
                  About us
                </p>
                <p className="cursor-pointer hover:border-b border-white">
                  Blog
                </p>
                <p className="cursor-pointer hover:border-b border-white">
                  Contact us
                </p>
                <p className="cursor-pointer hover:border-b border-white">
                  Pricing
                </p>
                <p className="cursor-pointer hover:border-b border-white">
                  Testimonials
                </p>
              </div>
            </div>
            <div className="text-white w-40">
              <h5 className="font-semibold mb-6 text-lg">Support</h5>
              <div className="flex flex-col gap-3">
                <p className="cursor-pointer hover:border-b border-white">
                  Help center
                </p>
                <p className="cursor-pointer hover:border-b border-white">
                  Terms of service
                </p>
                <p className="cursor-pointer hover:border-b border-white">
                  Legal
                </p>
                <p className="cursor-pointer hover:border-b border-white">
                  Privacy policy
                </p>
                <p className="cursor-pointer hover:border-b border-white">
                  Status
                </p>
              </div>
            </div>
            <div className="text-white">
              <h5 className="font-semibold mb-6 text-lg">Stay up to date</h5>
              <input
                type="text"
                placeholder="Your email address"
                className="p-2 rounded-lg bg-nc-neutral-gray"
              />
            </div>
          </section>
        </div>
      </Container>
    </MainLayout>
  );
};

interface ITextProps extends PropsWithChildren {
  className?: string;
}

const TextGray: FC<ITextProps> = (props) => {
  return (
    <p className={`text-base text-nc-neutral-gray ${props.className}`}>
      {props.children}
    </p>
  );
};
const TextTitle: FC<ITextProps> = (props) => {
  return (
    <h3
      className={`text-4xl text-nc-neutral-dgray font-medium ${props.className}`}
    >
      {props.children}
    </h3>
  );
};

export default NexcentPage;
