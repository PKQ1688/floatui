import Image from "next/image"
import SectionWrapper from "../../SectionWrapper"
import user1 from "../../../public/testimonial/jonathan.webp"
import user2 from "../../../public/testimonial/rahole.webp"
import user3 from "../../../public/testimonial/joric.webp"
import user4 from "../../../public/testimonial/alexandru.webp"
import user5 from "../../../public/testimonial/lyna.webp"
import user6 from "../../../public/testimonial/tony.webp"
import LayoutEffect from "../../LayoutEffect"

const Testimonial = () => {

    const testimonials = [
        {
            avatar: user1,
            name: "Sophia Martinez",
            title: "Chief Executive Officer (CEO)",
            quote: "This product has revolutionized how I handle social media content. Turning my videos into well-crafted blog posts is now a breeze. The AI not only transcribes but also enhances the style, making every post a hit."
        },
        {
            avatar: user2,
            name: "Alexander Reed",
            title: "Chief Technology Officer (CTO)",
            quote: "As a frequent Twitter user, I'm amazed at how this tool transforms my videos into engaging tweets. It retains my voice while polishing the content, saving me hours of work. Absolutely recommend!"
        },
        {
            avatar: user3,
            name: "Ethan Parker",
            title: "Chief Operating Officer (COO)",
            quote: "I'm impressed with the accuracy and speed of this product. It's a lifesaver for content creators who need to quickly turn video material into compelling social media posts."
        },
        {
            avatar: user4,
            name: "Olivia Zhang",
            title: "Chief Financial Officer (CFO)",
            quote: "This tool has changed the game for me. Converting video to blog format is not only efficient but also maintains the essence of my original message. Perfect for content creators on the go."
        },
        {
            avatar: user5,
            name: "Emily Chen",
            title: "Marketing Director",
            quote: "The ease with which this tool turns videos into polished, ready-to-post social media content is astounding. It's an essential tool for anyone looking to make an impact online."
        },
        {
            avatar: user6,
            name: "Ryan Kim",
            title: "Product Manager",
            quote: "This product seamlessly integrates video content into my social media strategy. The AI-enhanced text conversion is a major time-saver and consistently delivers high-quality posts."
        },
    ]

    return (
        <SectionWrapper>
            <div className="custom-screen">
                <div className="max-w-2xl sm:text-center md:mx-auto">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Loved by the best enterprises
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Listen to what our customers are saying about the product
                    </p>
                </div>
                <div className="mt-12">
                    <LayoutEffect isInviewState={{
                        trueState: "opacity-100 translate-y-0",
                        falseState: "opacity-0 translate-y-8"
                    }}>
                        <ul className="grid gap-6 duration-1000 delay-300 ease-in-out sm:grid-cols-2 lg:grid-cols-3">
                            {
                                testimonials.map((item, idx) => (
                                    <li key={idx} className="bg-gray-50 p-4 rounded-xl">
                                        <figure>
                                            <div className="flex items-center gap-x-4">
                                                <Image
                                                    src={item.avatar}
                                                    alt={item.name}
                                                    className="w-14 h-14 rounded-full object-cover"
                                                />
                                                <div>
                                                    <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                    <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <p className="mt-6 text-gray-700">
                                                    {item.quote}
                                                </p>
                                            </blockquote>
                                        </figure>
                                    </li>
                                ))
                            }
                        </ul>
                    </LayoutEffect>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Testimonial