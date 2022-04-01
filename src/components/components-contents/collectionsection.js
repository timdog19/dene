import React from 'react'
import { CollectionData } from './data/HordeData.js'

class CollectionSection extends React.Component {

    render() {
        return (
            <div className="w-full flex flex-col place-items-center pt-10 pb-24" id="collectionSection">
                <div className="w-100%">
                    <div className="w-full flex flex-col place-items-center space-y-6 mb-10">
                        <h1 className="text-white text-7xl font-black italic">COLLECTIBLE SNEAKS</h1>
                        <p className="text-white text-xl max-w-4xl text-center">
                            The SneakPunks Army have identified the <strong>first Legendary Hord to appear in the P2E</strong>. This is the SneakPunks, one of the most powerfull familly on the P2E. The next Collection to be identified by the timdog will be directly communicated on our social networks.
                        </p>
                        <p className="text-white text-xl">The SneakPunks can used for P2E.</p>
                    </div>
                    <div className="w-full grid grid-rows-2 grid-cols-3 grid-flow-row gap-5">
                        {CollectionData.map((item, i) => {
                            return (
                                <div className="flex flex-col place-items-center space-y-4" key={i}>
                                    <img className="rounded-3xl" src={item.image} alt="horde"></img>
                                    <h1 className="text-white text-3xl font-extrabold italic">{item.collectionName}</h1>
                                    { i === 0 &&
                                        <div className="text-white text-xl">
                                            <h2>
                                                <span className="text-green-600 pr-2">
                                                    <i className="fas fa-check"></i>
                                                </span>{item.legendaryCount} Units: Legendary</h2>
                                            <h2>
                                                <span className="text-green-600 pr-2">
                                                    <i className="fas fa-check"></i>
                                                </span>{item.geneticCount} Units: Genetic</h2>
                                        </div>
                                    }
                                </div>
                            )
                        })}
                    </div>
                    <div className="w-full space-y-6 px-10">
                        <h1 className="text-white text-3xl font-bold italic">SNEAKS</h1>
                        <p className="text-white text-xl">
                            NORMAL SNEAKS : A Sneaks is the common name of every collection<br></br>                       
                            LEGENDARY SNEAKS: Boosted for P2E. U can earn a lot of $SNK coin.<br></br>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CollectionSection;
