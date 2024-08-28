import logo from '../../assets/corgi.svg';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
    return (
        <footer className="bg-customeFooterColor text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info Section */}
                    <div>
                        <img src={logo} alt="Company Logo" className="mb-4 w-32" />
                        <h3 className="text-xl font-semibold mb-4">About Us</h3>
                        <p className="text-gray-200">
                            We provide top-tier insurance services, ensuring our clients have the best coverage at the most competitive rates. Your peace of mind is our priority.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="#" className="text-gray-200 hover:text-white">Home</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white">Products</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white">Pricing</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Info Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <p className="text-gray-200">  Corgi Insurance Services, Inc <br />San Francisco, CA</p>
                        <p className="text-gray-200">Email: info@corgi.com</p>
                        <p className="text-gray-200">Phone: (123) 456-7890</p>
                    </div>
                </div>

                {/* Social Media Links and Copyright */}
                <div className="mt-8 border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 mb-4 md:mb-0 text-center">© 2024 Insurance Company. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FaFacebookF size={20} /> {/* Facebook icon */}
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FaTwitter size={20} /> {/* Twitter icon */}
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FaLinkedinIn size={20} /> {/* LinkedIn icon */}
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FaInstagram size={20} /> {/* Instagram icon */}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
