import { MdOutlineEmail } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="narrow-container m-auto">
      <div className=" text-center">
        <div className="flex gap-4 justify-center mb-2">
          <MdOutlineEmail size="25" />
          <FaFacebook size="25" />
          <IoLogoInstagram size="25" />
          <FaXTwitter size="25" />
        </div>
        <div className="flex gap-2 flex-col md:flex-row justify-center mb-2">
          <span>Yashika Malhotra</span>
          <span>@2024</span>
          <span>Art Smart By Yashika</span>
        </div>
        <div>Copyright All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
