import { FaFacebookF,FaXTwitter,FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-8 pt-8">
      <div className="flex gap-3">``
        <FaFacebookF color="white" size={22}/>
        <FaXTwitter color="white" size={22}/>
        <FaYoutube color="white" size={22}/>
        <FaInstagram color="white" size={22}/>
      </div>
      <div>
        <ul className="grid text-gray-300 grid-cols-4 gap-y-3 gap-x-4 pb-2">
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Gift Cards</li>
          <li>Media Center</li>
          <li>Invester Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notice</li>
          <li>Cookie Preferences</li>
          <li>Corporate Informations</li>
          <li>Contace us</li>
        </ul>
      </div>
      <div className="text-gray-500 pb-2">
        © 2025 Netflix Clone, nk.
      </div>
    </div>
  );
};

export default Footer;
