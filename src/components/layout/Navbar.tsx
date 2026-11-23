import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../../assets/images/jagdambLogo.png";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom"; 

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  // { label: 'Upcoming Trips', to: '/#trips' },
  { label: "Destinations", to: "/destinations" },
  { label: "Happy Customers", to: "/happy-customers" },
  { label: "Contact", to: "/contact" },
];
// const links = ['Home', 'About Us',  'Destinations', 'Happy Customers', 'Contact']// 'Upcoming Trips',
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="z-50 backdrop-blur shadow-sm">
      {/* <header className="sticky top-0 z-50 backdrop-blur shadow-sm"> */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-12 w-12 rounded-full" />
          <div className="leading-tight">
            <p className="font-bold">Jagdamb Yatra Group</p>
            <p className="text-xs text-neutral-500">Mumbai</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              end
              className={({ isActive }) =>
                isActive && !l.to.includes("#")
                  ? "rounded-full bg-orange-100 px-4 py-2 text-saffron-dark"
                  : "px-4 py-2 hover:text-saffron"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav> 
        <div className="flex items-center gap-3">
          <div className="block">
            <LanguageSwitcher />
          </div>
          {/* <div className="hidden sm:block"><LanguageSwitcher /></div> */}
          {/*  <a href="https://wa.me/919082686465" target="_blank"
             className="hidden items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white sm:flex">
            <MessageCircle size={18} /> WhatsApp Us
          </a> */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        // <nav className="flex flex-col gap-3 border-t px-4 py-4 lg:hidden">
        //   {links.map((l) => <a key={l} href="#" className="font-medium">{l}</a>)}
        // </nav>

        <nav className="flex flex-col gap-3 border-t px-4 py-4 lg:hidden">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              end
              className={({ isActive }) =>
                isActive && !l.to.includes("#")
                  ? "rounded-full bg-orange-100 px-4 py-2 text-saffron-dark"
                  : "px-4 py-2 hover:text-saffron"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
