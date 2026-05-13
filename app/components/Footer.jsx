import React from "react";
import {
  Linkedin,
  Github,
  Instagram,
  Mail

} from "lucide-react";

const Footer = () => {
  return (
    <div className="mt-20">
 

        <div className="w-max flex items-center gap-2 mx-auto text-sm">
          <Mail alt="" className="w-5" />
          muhammedmhd@gmail.com
        </div>
    
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-3.5 py-6">
        <p>© 2025 ...</p>
        <ul className="flex items-center gap-5 justify-center mt-4 sm:mt-0">
            <li><a target="_blank" href="https://www.linkedin.com/in/muhammedmhdt/"><Linkedin className="w-5 h-5" /></a></li>
            <li><a target="_blank" href="https://www.instagram.com/_mhmd_t_/"><Instagram className="w-5 h-5" /></a></li>
            <li><a target="_blank" href="https://github.com/MuhammedT04"><Github className="w-5 h-5" /></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
