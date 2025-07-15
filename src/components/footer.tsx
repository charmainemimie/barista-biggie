import { Gamepad2 } from "lucide-react";

export default function ArcadeLanding() {
  return (
    <footer className="px-4 py-8 bg-black/40 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Gamepad2 className="h-6 w-6 text-yellow-400 mr-2" />
          <span className="text-white font-semibold">Miracle Arcade</span>
        </div>
        <div className="text-white/60 text-sm text-center md:text-right">
          <p>&copy; 2025 Miracle Arcade. All rights reserved.</p>
          <p className="mt-1">Your ultimate gaming destination in Chivhu!</p>
        </div>
      </div>
    </footer>
  );
}
