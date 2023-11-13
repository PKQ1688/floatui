import SectionWrapper from "../../SectionWrapper"

const Features = () => {

    const features = [
        {
            title: "Video Content Analysis",
            desc: "Utilizes AI technology to analyze spoken and visual content in videos and convert them into text form."
        },
        {
            title: "Automated Content Refinement",
            desc: " AI automatically refines the text to match a chosen style (e.g., formal, humorous, or professional) based on the video content."
        },
        {
            title: "Social Media Format Optimization",
            desc: "Adjusts the text format and length to suit different social media platforms (like Twitter, Facebook) for optimal posting."
        },
        {
            title: "Key Information Extraction",
            desc: "Extracts key points and highlights from videos, ensuring the converted text remains engaging and information-rich."
        },
        {
            title: "Multilingual Support",
            desc: "Offers video-to-text services in multiple languages, aiding international companies and multilingual users in content creation."
        },
        {
            title: "SEO Optimization",
            desc: "Optimizes the generated text content based on the latest Search Engine Optimization (SEO) standards to improve visibility and ranking in search engines."
        },
    ]

    return (
        <SectionWrapper>
            <div className="custom-screen text-gray-600">
                <div className="max-w-2xl space-y-3">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Ours Features
                    </h2>
                    <p></p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-5">
                                    <div className="flex-none w-8 h-8 border rounded-full text-sky-500 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg text-gray-800 font-medium">
                                            {item.title}
                                        </h3>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Features