import GradientWrapper from "../../GradientWrapper"
import Button from "../Button";
import Link from 'next/link'

const Pricing = () => {

    const plans = [
        {
            name: "Monthly",
            desc: "100 minutes every month + 2 content",
            price: 9.9,
            isMostPop: false,
        },
        {
            name: "Yearly",
            desc: "100 minutes every month + 2 month free",
            price: 99,
            isMostPop: true,
        },
    ];

    return (
        <GradientWrapper id="get-started" className="sm:my-16">
            <div className="custom-screen text-gray-600">
                <div className='relative max-w-2xl mx-auto sm:text-center'>
                    {/* <h2 className='text-gray-800 text-3xl font-semibold sm:text-4xl'> */}
                    <h2 className='items-center justify-center text-center text-4xl font-extrabold text-gray-800 lg:flex lg:space-x-4'>
                        Pricing for all your videos
                    </h2>
                    {/* <div className='mt-3 max-w-xl'> */}
                    <div className='mt-2 text-center text-lg text-gray-600'>
                        <p>
                             Start generating content today
                        </p>
                    </div>
                </div>
                <div className='mt-12 space-y-6 justify-center gap-6 sm:flex sm:space-y-0'>
                    {
                        plans.map((item, idx) => (
                            <div key={idx} className={`rounded-xl border shadow-lg ${item.isMostPop ? "bg-gray-800 text-gray-300" : "bg-white"}`}>
                                <div className="h-full p-8 gap-y-4 flex flex-col items-stretch">
                                    <span className={`font-medium ${item.isMostPop ? "text-sky-400" : "text-sky-500"}`}>
                                        {item.name}
                                    </span>
                                    <div className={`text-3xl font-semibold ${item.isMostPop ? "text-white" : "text-gray-800"}`}>
                                        ${item.price} {item.isMostPop ? <span className="text-xl font-normal">/year</span> : <span className="text-xl font-normal">/month</span>}
                                    </div>
                                    <p className="max-w-sm">
                                        {item.desc}
                                    </p>
                                    <div className="flex-1 flex items-end">
                                    <Link href="/dashboard">
                                        <Button className="block w-full text-white bg-sky-500 hover:bg-sky-600 ring-offset-2 ring-sky-500 focus:ring shadow">
                                            Get Started
                                        </Button></Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </GradientWrapper>
    )
}

export default Pricing