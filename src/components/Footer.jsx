import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 text-center">
      <p className="text-gray-400 flex items-center justify-center">
        Made with <Heart size={18} className="mx-1 text-red-500" /> by Ratnesh
        Patil &copy; 2025
      </p>
    </footer>
  );
};
