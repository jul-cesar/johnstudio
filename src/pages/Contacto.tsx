import { Facebook, Instagram, Linkedin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Contacto = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="h-8 w-8" />,
      url: "https://instagram.com/johnstudio",
      color: "hover:text-[#E1306C] hover:bg-white",
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-8 w-8" />,
      url: "https://facebook.com/johnstudio",
      color: "hover:text-[#4267B2] hover:bg-white",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-8 w-8" />,
      url: "https://twitter.com/johnstudio",
      color: "hover:text-[#1DA1F2] hover:bg-white",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-8 w-8" />,
      url: "https://linkedin.com/company/johnstudio",
      color: "hover:text-[#0077B5] hover:bg-white",
    },
    {
      name: "WhatsApp",
      icon: <Phone className="h-8 w-8" />,
      url: "https://wa.me/1234567890", // Reemplaza con tu número de WhatsApp
      color: "hover:text-[#25D366] hover:bg-white",
    },
  ];

  return (
    <section className="h-screen py-16 bg-gradient-to-r from-[#5000C3] via-[#B601FF] to-[#E13D21]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Conéctate con Nosotros
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              to={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                p-4 rounded-full bg-white/10 backdrop-blur-lg
                text-white transition-all duration-300 ease-in-out
                ${social.color}
                transform hover:scale-110
              `}
            >
              {social.icon}
              <span className="sr-only">{social.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacto;
