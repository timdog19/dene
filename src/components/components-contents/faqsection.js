import React from 'react'
import { faqData } from './data/FAQ.js'

class FAQSection extends React.Component {

    constructor() {
        super()

        this.state = {
            currentId: -1
        }
    }

    setCurrentId(id) {
        if(this.state.currentId === id) {
            this.setState({
                currentId: -1
            })
        } else {
            this.setState({
                currentId: id
            })
        }
    }

    render() {
        return (
            <div className="w-full flex justify-center pb-20" id="faqSection">
                <div className="w-84.5% space-y-8">
                    <h1 className="text-white text-8xl font-extrabold italic uppercase text-center">faq</h1>
                    <div className="space-y-5">
                        {faqData.map((item, i) => {
                            let sign = '+'
                            let styleSheet = {
                                maxHeight: '0px'
                            }

                            if(i === this.state.currentId) {
                                sign = '-'
                                styleSheet = {
                                    maxHeight: '90px'
                                }
                            }
                            return (
                                <div key={i}>
                                    <button
                                        className="flex items-cente w-full text-left bg-gray-900 text-white text-xl py-4 px-5"
                                        id={i}
                                        onClick={(e) => this.setCurrentId(parseInt(e.target.id))}
                                    >
                                        <span className="w-5 -mt-0.5">{sign}</span>
                                        {item.title}
                                    </button>
                                    <div className={
                                    // i === this.state.currentId
                                        `bg-transparent border border-white overflow-hidden faqItem`
                                        }
                                        style={styleSheet}
                                    >
                                        <h1 className=" text-white text-xl py-4 px-5">{item.description}</h1>
                                    </div>
                                </div>
                            )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default FAQSection;