import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaMedium,
} from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className="my-5 flex items-center justify-center">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/faiza-aziz-khan-76912092/"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-3 text-zinc-400 hover:text-[#69c7c7] drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn className="h-7 w-7" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/fazzyA"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 text-zinc-400 hover:text-[#69c7c7] drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="GitHub"
      >
        <FaGithub className="h-7 w-7" />
      </a>

      {/* X / Twitter */}
      {/* <a
        href="https://x.com/lautarodevelops/"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 text-zinc-400 hover:text-[#69c7c7] drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="Twitter"
      >
        <FaXTwitter className="h-7 w-7" />
      </a> */}

      {/* Instagram */}
      <a
        href="https://www.instagram.com/faiza.blooms/"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 text-zinc-400 hover:text-[#69c7c7] drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="Instagram"
      >
        <FaInstagram className="h-7 w-7" />
      </a>
      <a
        href="https://medium.com/@faz.pak"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 text-zinc-400 hover:text-[#69c7c7] drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="Medium"
      >
        <FaMedium className="h-7 w-7" />
      </a>
    </div>
  );
};

export default SocialIcons;
