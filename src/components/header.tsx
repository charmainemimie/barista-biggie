import { Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="relative z-10 px-4 lg:px-6 h-16 flex items-center bg-black/20 backdrop-blur-sm">
        <Link to="/" className="flex items-center justify-center">
          <Gamepad2 className="h-8 w-8 text-yellow-400" />
          <span className="ml-2 text-xl font-bold text-white">Miracle Arcade</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="#games" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Games
          </Link>
          <Link to="/pricing" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link to="/contact" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
