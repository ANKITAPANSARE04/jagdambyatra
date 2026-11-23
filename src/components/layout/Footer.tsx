import { Phone, MessageCircle, Mail } from "lucide-react";
import logo from "../../assets/images/jagdambLogo.png";

export default function Footer() {
  return (
    <footer className="bg-maroon-dark text-white/90">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Jagdamb Yatra Logo"
            className="h-24 w-24 rounded-full"
          />
          <div>
            <p className="font-bold">Jagdamb Yatra Group</p>
            <p className="text-xs">
              A journey of faith, comfort and togetherness.
            </p>

            {/* Social Media Links */}
            <div className="mt-3 flex items-center gap-3">
              <a
                href="https://www.instagram.com/jagdambyatra/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full bg-white/10 p-2 transition hover:bg-white/20 hover:text-pink-300"
              >
                Insta
              </a>

              <a
                href="https://www.youtube.com/@sushantkawdepatil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="rounded-full bg-white/10 p-2 transition hover:bg-white/20 hover:text-red-400"
              >
              Utube
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-3 font-semibold">Quick Links</p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {[
              "Home",
              "Happy Customers",
              "Upcoming Trips",
              "About Us",
              "Destinations",
              "Contact",
            ].map((l) => (
              <li key={l}>
                <a href="#" className="hover:underline">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2 text-sm">
          <p className="mb-3 font-semibold">Contact Us</p>
          <p className="flex items-center gap-3">
            <Phone size={18} /> 9076798465
          </p>
          <p className="flex items-center gap-3">
            <MessageCircle size={18} /> 9082686465
          </p>
          <p className="flex items-center gap-3">
            <Mail size={18} /> info@jagdambyatra.com
          </p>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-sm">
        © 2026 Jagdamb Yatra Group. All rights reserved.
      </p>
    </footer>
  );
}
