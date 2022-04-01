import React from 'react'
import LogoSymbol from '../assets/LOGO-SYMBOL.png'

class Footer extends React.Component {

    render() {
        return (
            <div className="bg-black w-full h-60 flex justify-center place-items-center">
                <div className="flex flex-col justify-center place-items-center space-y-5">
                    <div className="w-20 h-20" key="logo-symbol">
                        <img className="object-fill w-full h-full" src={LogoSymbol} alt="logo"></img>
                    </div>
                    <h1 className="text-white text-wxl"></h1>
                </div>
            </div>
        )
    }
}

export default Footer;
