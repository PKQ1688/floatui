import NavLink from "../NavLink"

// const CenteredCTA = () => {
//     return (
//         <section className="custom-screen text-center">
//             <div className="max-w-2xl md:mx-auto">
//                 <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
//                     How it works
//                 </h2>
//                 <p className="mt-3 text-gray-600">
//                     1. Add your video to Starboard.
//                 </p>
//                 <p className="mt-3 text-gray-600">
//                     2. Starboard will automatically generate a transcript of your video.
//                 </p>
//                 <p className="mt-3 text-gray-600">
//                     3. Edit the transcript to your liking.
//                 </p>
//                 <p className="mt-3 text-gray-600">
//                     4. Publish the transcript to your website.
//                 </p>
//             </div>
//             <div className="mt-4">
//                 <NavLink href="#get-started" className="inline-block w-full font-medium text-sm text-white bg-sky-500 hover:bg-sky-600 active:bg-sky-700 shadow rounded-lg sm:w-auto">
//                     Try it now
//                 </NavLink>
//             </div>
//         </section>
//     )
// }

const CenteredCTA = () => {
    return (
        <section className="custom-screen text-center bg-gray-100 py-10">
            <div className="max-w-3xl md:mx-auto p-5 bg-white shadow-lg rounded-lg">
                <h2 className="text-sky-600 text-4xl font-bold sm:text-5xl">
                    How it Works
                </h2>
                <p className="mt-4 text-gray-700 text-lg">
                    <span className="font-semibold">1.</span> Add your video to Starboard.
                </p>
                <p className="mt-4 text-gray-700 text-lg">
                    <span className="font-semibold">2.</span> Starboard will automatically generate a transcript of your video.
                </p>
                <p className="mt-4 text-gray-700 text-lg">
                    <span className="font-semibold">3.</span> Edit the transcript to your liking.
                </p>
                <p className="mt-4 text-gray-700 text-lg">
                    <span className="font-semibold">4.</span> Publish the transcript to your website.
                </p>
            </div>
            <div className="mt-6">
                <NavLink href="#get-started" className="inline-block px-6 py-3 font-medium text-sm text-white bg-sky-500 hover:bg-sky-600 active:bg-sky-700 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                    Try it now
                </NavLink>
            </div>
        </section>
    )
}

// const CenteredCTA = () => {
//     return (
//         <section className="custom-screen text-center bg-gray-100 p-8">
//             <div className="max-w-2xl mx-auto">
//                 <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
//                     How it works
//                 </h2>
//                 <ul className="mt-6 text-gray-600 text-left">
//                     <li className="mt-3">
//                         <span className="text-sky-500 font-bold">1. </span> Add your video to Starboard.
//                     </li>
//                     <li className="mt-3">
//                         <span className="text-sky-500 font-bold">2. </span> Starboard will automatically generate a transcript of your video.
//                     </li>
//                     <li className="mt-3">
//                         <span className="text-sky-500 font-bold">3. </span> Edit the transcript to your liking.
//                     </li>
//                     <li className="mt-3">
//                         <span className="text-sky-500 font-bold">4. </span> Publish the transcript to your website.
//                     </li>
//                 </ul>
//             </div>
//             <div className="mt-8">
//                 <NavLink href="#get-started" className="inline-block w-full px-6 py-3 font-medium text-white bg-sky-500 hover:bg-sky-600 active:bg-sky-700 rounded-lg transition duration-300 ease-in-out">
//                     Try it now
//                 </NavLink>
//             </div>
//         </section>
//     )
// }


export default CenteredCTA