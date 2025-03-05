import { Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  const footerNavs = [
    {
      href: "/nosotros",
      name: "Sobre nosotros",
    },
    {
      href: "https://linktr.ee/johns_rivero",
      name: "Contacto",
    },

    {
      href: "#team",
      name: "Nuestro equipo",
    },
  ];

  return (
    <footer className=" px-4 bg-[#060606] border border-t-border border-l-0 border-r-0 py-5 max-w-full mx-auto md:px-8 font-semibold">
      <div className="max-w-full sm:mx-auto sm:text-center">
        <img src="jsticon.svg" className="w-32 sm:mx-auto" />
        <p className="leading-relaxed mt-2 text-[15px]">
          Le prometí a Moisés que les daría a ustedes todo lugar por donde
          pasen. Josue 1:1-9
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li className=" hover:text-gray-800">
            <a key={idx} href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; {new Date().getFullYear()} John Studio todos los derechos
          reservados.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="https://www.instagram.com/johnstudio_">
                <Instagram />
              </a>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="https://www.tiktok.com/@johns.riveros">
                <FaTiktok />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
