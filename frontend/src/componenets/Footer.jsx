import { FaBook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side - Logo & Text */}
        <div className="flex items-center space-x-2">
          <FaBook className="text-xl text-blue-400" />
          <h2 className="text-lg font-semibold">NoteKeeper</h2>
        </div>

        {/* Middle - Credit Text */}
        <div className="text-center text-sm md:text-base text-gray-400 my-4 md:my-0">
          This website is developed by <span className="text-blue-400 font-medium">Satyendra Chaudhary</span>.  
          <a 
            href="https://satyendra-theta.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-2 text-blue-500 hover:underline"
          >
            Portfolio
          </a>
        </div>

        
        {/* Right Side - Social Icons */}
        <div className="flex space-x-4">
          <a href="https://github.com/satyendrachaudhary143" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/satyendra-chaudhary-b958632b9" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaLinkedin size={20} />
          </a>
          <a href="https://x.com/ssboss183032734" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 mt-4">
        © {new Date().getFullYear()} NoteKeeper. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
