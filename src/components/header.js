import React from 'react'
import LogoSymbol from '../assets/LOGO-SYMBOL.png'

class Header extends React.Component {

    render() {
        return (
            <nav className="z-50 flex justify-center items-center w-full opacity-90 bg-gray-900 py-4 space-x-10 fixed">
                <div className="w-12 h-12 ml-10" key="logo-symbol">
                    <img className="object-fill w-full h-full" src={LogoSymbol} alt="logo"></img>
                </div>
                <ul className="relative list-none text-white text-lg space-x-10 px-16">
                    <li className="float-left cursor-pointer"><a href="/home">Home</a></li>
                    <li className="float-left cursor-pointer"><a href="#storySection">The story</a></li>
                    <li className="float-left cursor-pointer"><a href="#featureSection">Features</a></li>
                    <li className="float-left cursor-pointer"><a href="#collectionSection">Collection</a></li>
                    <li className="float-left cursor-pointer"><a href="#roadmapSection">Roadmap</a></li>
                    <li className="float-left cursor-pointer"><a href="#faqSection">FAQ</a></li>
                </ul>
                <div className="space-x-8">
                    <span className="text-white text-2xl">
                        <i className="fab fa-twitter"></i>
                    </span>
                    <span className="text-white text-2xl">
                        <i className="fab fa-instagram"></i>
                    </span>
                </div>
                <div className="bg-indigo-900 rounded-md">
                    <a className="text-white text-md font-bold px-10 py-4 block cursor-pointer" href="/">JOIN OUR DISCORD</a>
                </div>
            </nav>
        )
    }
}

export default Header;
