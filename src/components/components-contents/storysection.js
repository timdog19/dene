import React from 'react'
import Slider from 'react-slick';
import CharacterImage from '../../assets/card1.jpeg'
import Card1 from '../../assets/card1.jpeg'
import Card2 from '../../assets/card2.jpeg'
import Card3 from '../../assets/card3.jpeg'
import Card4 from '../../assets/card4.png'
import './components-slick/style.css'

class StorySection extends React.Component {
    
    constructor() {
        super()
        this.state = {
            imageIndex: 0,
            NFTs: [Card1, Card2, Card3, Card4],
            settings: {
                infinite: true,
                lazyload: true,
                speed: 1000,
                accessibility: false,
                arrows: false,
                slidesToShow: 5,
                slidesToScroll: 1,
                centerPadding: 0,
                autoplay: true,
                beforeChange: (current, next) => this.imageIndex = next
            }
        }
    }

    render() {
        return (
            <div className="flex flex-col place-items-center bg-gray-900 py-24 space-y-24" id="storySection">
                <div className="w-5/6 grid grid-cols-2 gap-8">
                    <img className="rounded-3xl" src={CharacterImage} alt="character"></img>
                    <div className="flex flex-col justify-center space-y-5">
                        <h1 className="text-white text-6xl font-bold">WELCOME TO ERA OF HYPE</h1>
                        <p className="text-white text-xl">
                            An <strong>immensely rare intergalactic phenomenon</strong> called the space-time rift propelled the planet « Clout »  WAIT US.<br></br>This three-dimensional Miracle <strong>linked the P2E by teleporting hordes of legendary creatures</strong>. Ahead by 4000 years, they have more knowledge at all levels, <strong>it is the Era of Hype</strong>.
                        </p>
                    </div>
                </div>
                <div className="w-5/6 flex flex-col text-center space-y-5 pb-24">
                    <h1 className="text-white text-5xl font-bold italic">
                        CAPTURE, CONTROL YOUR CREATURE & GET ACCESS TO A PRIVATE ELITE, ERA OF HYPE.
                    </h1>
                    <h5 className="text-white text-xl">
                        With more than 100+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.
                    </h5>
                </div>
                <div className="w-full h-52 overflow-hidden">
                    <Slider {...this.state.settings} className="w-105%">
                        {this.state.NFTs.map(((item, i) => {
                            return (
                                <div key={i}>
                                    <img className="h-52 rounded-3xl" src={item} alt="card"></img>
                                </div>
                            )
                        }))}
                        {this.state.NFTs.map(((item, i) => {
                            return (
                                <div key={i}>
                                    <img className="h-52 rounded-3xl" src={item} alt="card"></img>
                                </div>
                            )
                        }))}
                    </Slider>
                </div>
            </div>
        )
    }
}

export default StorySection;