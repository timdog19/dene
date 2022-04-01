import React from 'react'
import BackgroundImage from '../../assets/targon-celestial-le-voyageur-legends-of-runeterra-league-of-legends-lol-fond-d-ecran-2560x1600_7.jpeg'

    render() {
        return (
            <div className="w-full h-795px-rem bg-cover flex justify-center" style={{ backgroundImage: `url(${BackgroundImage})`}}>
                <div className="w-4/5 h-full flex flex-col justify-end space-y-16">
                    <h1 className="text-white text-center font-extrabold"
                        style={{
                            // fontFamily: '"Poppins", sans-serif',
                            fontSize: '3.25rem',
                            fontStyle: 'italic',
                            fontHeadings: 'Poppins',
                        }}>
                        THE PLANET CLOUT HAS INVADED THE P2E, IT'S THE ERA OF HYPE.
                    </h1>
                    <div className="flex justify-center space-x-6 h-36">
                        {this.state.counterData.map((item, i) => {
                            return (
                                <div className="flex flex-col justify-center text-center w-42 h-full bg-white bg-opacity-20 rounded-3xl" key={i}>
                                    <h1 className="text-8xl text-white font-bold">{item.remains}</h1>
                                    <h3 className="text-xl text-white font-bold">{item.title}</h3>
                                </div>
                            )
                        })}
                    </div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default MainSection;
