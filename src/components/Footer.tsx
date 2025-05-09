
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-12 pb-8">
      <div className="marketplace-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CollectorsHub</h3>
            <p className="text-gray-300 mb-4">
              Your trusted marketplace for rare stamps and coins from collectors around the world.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/browse" className="text-gray-300 hover:text-gold">
                  Browse All
                </Link>
              </li>
              <li>
                <Link to="/stamps" className="text-gray-300 hover:text-gold">
                  Stamps
                </Link>
              </li>
              <li>
                <Link to="/coins" className="text-gray-300 hover:text-gold">
                  Coins
                </Link>
              </li>
              <li>
                <Link to="/auctions" className="text-gray-300 hover:text-gold">
                  Live Auctions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Account</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-gray-300 hover:text-gold">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-gold">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/account" className="text-gray-300 hover:text-gold">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/account/listings" className="text-gray-300 hover:text-gold">
                  My Listings
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Help</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-gold">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-gold">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-navy-light mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} CollectorsHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
