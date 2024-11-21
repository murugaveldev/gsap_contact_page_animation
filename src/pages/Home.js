import React from 'react'
import Form from './Form'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


import gifOne from '../images/phone.png'
import gifTwo from '../images/world.png'



//icons
import { FaLocationDot } from "react-icons/fa6";
import { RiWhatsappLine } from "react-icons/ri";


gsap.registerPlugin(ScrollTrigger)

const Home = () => {


    gsap.to("#text", {
        y: 10,
        repeat: -1,
        yoyo: true,
        stagger: 0.1,
        ease: "sine.inOut",
    });


    return (
        <>

            <div className='overflow-hidden'>

                {/* <div className='fixed top-0 w-full h-full'>
                    <video className='w-full h-screen object-cover -z-30' autoPlay loop muted playsInline>
                        <source src={video} type='video/mp4' />
                    </video>
                </div> */}

                <section className='h-screen bg-gray-200' id='startsection'>
                    <div className='h-full flex flex-col gap-y-1 justify-center items-center relative w-full'>

                        <div className="w-full flex justify-between items-center relative">
                            {/* Left-side image */}
                            <div className="absolute top-80 left-20 z-0 flex justify-start items-center">
                                <img src={gifOne} className="w-[20%] object-cover" />
                            </div>

                            {/* Right-side image */}
                            <div className="absolute top-32 right-0 z-0 flex justify-center items-center">
                                <img src={gifTwo} className="w-[20%] object-cover" />
                            </div>
                        </div>



                        <div className='z-30 flex flex-col items-center'>
                            <h1 className='text-[3rem] md:text-[13rem] text-center font-bold md:mt-28 uppercase font-[poppins] bg-clip-text text-gray-950 animate-bounce duration-1000 delay-1000' id='text'>Contact us  </h1>
                            <p className='text-[10px] md:text-[14px] text-center font-semibold italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </section>


                <section className='h-[170vh] md:h-screen bg-[#FAF9F6] pt-8 pb-20 font-[poppins]' id='firstsection' >
                    <div className='h-full w-full' >

                        <div className='py-6 flex flex-col items-center gap-y-3'>
                            <h2 className='text-[18px] font-bold uppercase text-center '>Contact Us</h2>
                            <p className='text-[12px] text-gray-700 font-semibold italic text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        </div>

                        <div className='flex flex-col-reverse md:flex-row justify-center items-center w-full'>

                            <div className='w-full md:w-[50%] py-28 md:py-0 mx-auto'>
                                <h3 className='hidden'>Hello</h3>
                            </div>

                            <div className='w-full md:w-[50%] flex justify-center items-center h-full mx-auto'>

                                <div className=' h-full px-4 md:px-14'>
                                    <div>
                                        <Form />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <section className='h-[170vh] md:h-screen bg-black pt-20 pb-20' id='secondsection'>
                    <div className='h-full' >

                        <div className='flex flex-col md:flex-row justify-center items-center'>

                            <div className='w-full md:w-[50%] flex justify-center items-center h-full mx-auto'>

                                <div className=' h-full px-4 md:px-24  mt-6 z-30 md:mt-10'>
                                    <div className='grid grid-cols-1 gap-y-8'>

                                        <div className='bg-white px-6 py-4 flex flex-col gap-y-6 rounded-md'>
                                            <div className='flex items-center gap-x-6'>
                                                <FaLocationDot className='text-black text-[28px]' />
                                                <div>
                                                    <span className='text-[12px]'>Location </span>
                                                    <p className='text-[14px] font-semibold '>Visit Us At</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-gray-700  font-semibold'>No.271A, 3rd Floor, Maan Sarovar Tower, Scheme Road, Teynampet, Chennai - 600018 India</p>
                                            </div>
                                        </div>
                                        <div className='bg-white px-6 py-4 flex flex-col gap-y-6 rounded-md'>
                                            <div className='flex items-center gap-x-6'>
                                                <FaLocationDot className='text-black text-[28px]' />
                                                <div>
                                                    <span className='text-[12px]'>Location </span>
                                                    <p className='text-[14px] font-semibold '>Visit Us At</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-gray-700 font-semibold'>No.271A, 3rd Floor, Maan Sarovar Tower, Scheme Road, Teynampet, Chennai - 600018 India</p>
                                            </div>
                                        </div>
                                        <div className='bg-white px-6 py-4 flex flex-col gap-y-6 rounded-md'>
                                            <div className='flex items-center gap-x-6'>
                                                <FaLocationDot className='text-black text-[28px]' />
                                                <div>
                                                    <span className='text-[12px]'>Location </span>
                                                    <p className='text-[14px] font-semibold '>Visit Us At</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-gray-700 font-semibold'>No.271A, 3rd Floor, Maan Sarovar Tower, Scheme Road, Teynampet, Chennai - 600018 India</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='w-full md:w-[50%] mx-auto'>
                                <h3 className='hidden'>Hello</h3>
                            </div>

                        </div>

                    </div>
                </section>


                <section className=' h-[170vh] md:h-screen bg-blue-50' id='thirdsection'>
                    <div className='h-full' >

                        <div className='flex flex-col  md:flex-row justify-center items-center'>

                            <div className='w-full md:w-[50%] flex justify-end items-end h-screen mx-auto'>

                                <div className=' h-full px-4 md:px-24  flex md:justify-end items-center  pt-12  md:pt-20 '>

                                    <div className='bg-white border border-gray-200 px-9 py-6 flex flex-col gap-y-6 rounded-md '>
                                        <div className='flex flex-col gap-y-2 items-center justify-center gap-x-6'>

                                            <h3 className='flex justify-center items-center text-center uppercase text-[18px] font-semibold'>Get Qoute</h3>
                                            <p className='text-gray-700 text-center font-semibold'>No.271A,  Scheme Road, Teynampet, Chennai - 600018 India</p>

                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <button className='cursor-pointer uppercase font-[poppins] text-[12px] font-semibold bg-green-700 pl-4 h-8  rounded-md text-white flex items-center gap-x-4'>Chat Now <span className='h-8 bg-red-800 rounded-r-md flex justify-center items-center px-2'><RiWhatsappLine className='text-[20px] ' /></span> </button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className='w-full md:w-[50%] mx-auto'>
                                <h3 className='hidden'>Hello</h3>
                            </div>

                        </div>

                    </div>
                </section>

                <section className='h-[150vh] md:h-screen bg-sky-100 pt-20 pb-20' id='fourthsection'>
                    <div className='h-full' >

                        <div>
                            <h2 className='text-[28px] font-semibold text-center uppercase'>find us </h2>
                            <p className='w-[80%] mx-auto text-center text-[14px] italic font-mono text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                        <div className='flex flex-col md:flex-row items-center justify-center'>

                            <div className='w-full md:w-[30%] mx-auto'>
                                <div className='hidden'>hello</div>
                            </div>

                            <div className='w-full md:w-[70%] mx-auto'>
                                <div className='flex justify-center px-4 md:px-20 items-center mt-8 md:mt-20 rounded-xl overflow-hidden'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.8780374128833!2d80.21693680053875!3d13.045690409393439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e57e6bec73%3A0xd7246c6b177d9129!2sVishnu%20Ads%20And%20Ventures%20Private%20Limited!5e1!3m2!1sen!2sin!4v1732001656668!5m2!1sen!2sin"
                                        className='h-[18rem] md:h-[24rem] w-full  rounded-xl border border-gray-500' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <section className='h-screen bg-gray-50' id='fifthsection'>
                    <div className='h-full' >

                        <div className='flex flex-col gap-y-3  justify-center pb-28 items-center h-full '>
                            <h3 className='font-bold text-[24px]  uppercase '>Vist Us </h3>
                            <p className='font-mono text-[12px] text-center font-light italic'>The scrollTrigger for the timeline spans from #firstsection to #secondsection, ensuring that the ball moves from one section to another when scrolling.</p>
                        </div>

                    </div>

                </section>

            </div>

        </>
    )
}

export default Home