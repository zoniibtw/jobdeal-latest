import React from "react";

const Header = ({}) => {
    return (
        <>
            <header id="desktop" className="max-md:hidden bg-black text-white">
                <div className="container mx-auto flex justify-between items-center py-4">
                    <div className="flex items-center space-x-4">
                        <div className="text-2xl font-bold">JOBDEAL</div>
                    </div>
                        <nav className="flex space-x-6">
                            <a href="#find-a-job" className="hover:text-gray-400">Find a Job</a>
                            <a href="#hire-someone" className="hover:text-gray-400">Hire someone</a>
                            <a href="#how-it-works" className="hover:text-gray-400">How It Works</a>
                            <a href="#about-us" className="hover:text-gray-400">About Us</a>
                            <a href="#partners" className="hover:text-gray-400">Partners</a>
                        </nav>
                    <div className="flex space-x-4">
                        <button className="text-white border border-green-500 px-4 py-2 rounded">Login</button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded">Create Account</button>
                    </div>
                </div>
            </header>

            <header id="mobile" className="md:hidden flex"></header>
        </>
    );
}

export default Header;