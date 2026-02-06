import { Link } from 'react-router-dom'
import logo from '../assets/IMG_5733.JPG'

export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-dark-800 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <img src={logo} alt="Sojku Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
              Sojku
            </span>
          </Link>

          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/terms" className="text-dark-400 hover:text-white text-sm transition-colors duration-200">
              Terms
            </Link>
            <Link to="/privacy" className="text-dark-400 hover:text-white text-sm transition-colors duration-200">
              Privacy
            </Link>
            <Link to="/refund" className="text-dark-400 hover:text-white text-sm transition-colors duration-200">
              Refund
            </Link>
          </div>

          <p className="text-dark-500 text-sm order-last md:order-none">
            © {new Date().getFullYear()} Sojku. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
