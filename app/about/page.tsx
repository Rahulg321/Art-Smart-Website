import React from 'react';
import Image from 'next/image';
import yashikaProfilePic from '@/public/yashika.jpg';
import { MdOutlineEmail } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';

const AboutPage = () => {
  return (
    <section className="big-container mb-12">
      <h1 className="heading ">About Yashika</h1>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="basis-1/3">
          <Image
            src={yashikaProfilePic}
            alt="Portrait Image of Yashika Malhotra, The founder of Art Smart"
            className="object-cover rounded-full border-4"
          />
          <div className="mt-2 flex flex-col justify-center items-center">
            <h3>Yashika Malhotra</h3>
            <span className="my-2">Developer, Designer and Artist</span>
            <div className="flex gap-4">
              <MdOutlineEmail size="25" />
              <FaFacebook size="25" />
              <IoLogoInstagram size="25" />
              <FaXTwitter size="25" />
            </div>
          </div>
        </div>
        <div className="basis-2/3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error at
            nobis dolores, beatae debitis eveniet. Numquam sapiente hic
            voluptates, at ea magnam soluta in iste ullam reiciendis quo ipsa
            praesentium!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error at
            nobis dolores, beatae debitis eveniet. Numquam sapiente hic
            voluptates, at ea magnam soluta in iste ullam reiciendis quo ipsa
            praesentium!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error at
            nobis dolores, beatae debitis eveniet. Numquam sapiente hic
            voluptates, at ea magnam soluta in iste ullam reiciendis quo ipsa
            praesentium!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error at
            nobis dolores, beatae debitis eveniet. Numquam sapiente hic
            voluptates, at ea magnam soluta in iste ullam reiciendis quo ipsa
            praesentium!ipsum dolor sit amet consectetur adipisicing elit. Error
            at nobis dolores, beatae debitis eveniet. Numquam sapiente hic
            voluptates, at ea magnam soluta in iste ullam reiciendis quo ipsa
            praesentium!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
