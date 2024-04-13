import logo from '../assets/gd-transparent.png';
import { FaPhoneSquare } from 'react-icons/fa';



const Navbar = () => {
    return (
        <div className="max-w-[1200px] mx-auto pt-16">
            <div className=" grid place-items-end">
                <div className="flex item-center gap-4 justify-center">
                    <FaPhoneSquare size={20} color="white" />
                    <p className=" text-white tracking-widest font-medium">
                        <a href="tel:+919599277565">+91-9599277565</a>
                    </p>
                </div>
            </div>
            <div className="md:grid gap-7 md:gap-0 flex flex-col md:grid-cols-2 mt-8 ">
                <div><a href="/">
                    <img src={logo} width="100px" height="100px" alt="/" />
                </a>
                </div>
                <div className="flex px-6 min-h-[70px] border uppercase border-[#ff7a3d] items-center justify-between text-white font-medium text-base bg-black opacity-[0.7]">
                    <a className="text-[#ff7a3d]  " href="/">
                        Home
                    </a>
                    <a className="hover:text-[#ff7a3d] " href="/about">
                        About Us
                    </a>
                    <a className="hover:text-[#ff7a3d] " href="/team">
                        Team
                    </a>
                    <a className="hover:text-[#ff7a3d] " href="/project">
                        Project
                    </a>
                    <a className="hover:text-[#ff7a3d] " href="/contact">
                        Contact US
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;