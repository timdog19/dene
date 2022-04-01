import React from 'react'
import BackgroundImage from '../../assets/targon-celestial-le-voyageur-legends-of-runeterra-league-of-legends-lol-fond-d-ecran-2560x1600_7.jpeg'

class MainSection extends React.Component {

    constructor() {
        super();

        this.calculateRemainTime = this.calculateRemainTime.bind(this);
        this.state = {
            publishDate: new Date(2022, 3, 30),
            counterData: [
                {title: 'Days', remains: 0},
                {title: 'Hours', remains: 0},
                {title: 'Minutes', remains: 0},
                {title: 'Seconds', remains: 0}
            ]
        };
    }

    calculateRemainTime() {
        let curDate = new Date()
        let dif = this.state.publishDate - curDate
        let fact1, fact2, fact3
        
        fact1 = 24 * 3600 * 1000
        fact2 = 3600 * 1000
        fact3 = 60 * 1000
        
        this.setState({
            counterData: [
                {title: 'Days', remains: Math.floor(dif / fact1)},
                {title: 'Hours', remains: Math.floor((dif % fact1) / fact2)},
                {title: 'Minutes', remains: Math.floor(((dif % fact1) % fact2) / fact3)},
                {title: 'Seconds', remains: Math.floor((((dif % fact1) % fact2) % fact3) / 1000)},
            ]
        })
    }

    componentDidMount() {
        this.interval = setInterval(() => this.calculateRemainTime(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

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
                        THE PLANET CLOUT HAS INVADED THE METAVERSE, IT'S THE ERA OF HYPE.
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
