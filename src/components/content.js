import React from 'react'
import MainSection from './components-contents/mainsection'
import StorySection from './components-contents/storysection'
import FeatureSection from './components-contents/featuresection'
import CollectionSection from './components-contents/collectionsection'
import RoadMapSection from './components-contents/roadmapsection'
import FAQSection from './components-contents/faqsection'

class Content extends React.Component {

    render() {
        return (
            <>
                <MainSection />
                <StorySection />
                <FeatureSection />
                <div
                    style={{
                        backgroundColor: 'transparent',
                        backgroundImage: 'linear-gradient(rgb(57 36 133) 100%, rgb(85 51 137) 100%)'
                }}>
                    <CollectionSection />
                    <RoadMapSection />
                    <FAQSection />
                </div>
            </>
        )
    }
}

export default Content;
