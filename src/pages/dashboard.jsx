import React from "react";
import BgAwal from "../assets/bgawal.png";
import Kakek from "../assets/kakek.png";
import LogoAtas from "../assets/Logo.png";
import Ngoding from "../assets/ngoding.png";
import Kopi from "../assets/kopi.png";
import Papan from "../assets/Emak.png";
import Emak from "../assets/Papan.png";
import pensil from "../assets/Pensil.png";
import Portfolio from "../assets/bgportfolio.png";
import ppIbu from "../assets/ibuibu.png";
import ppOm from "../assets/omom.png";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import Logo3 from "../assets/logo3.png";
import Logo4 from "../assets/logo4.png";
import Logo5 from "../assets/logo5.png";
import Ngoding1 from "../assets/ngoding1.png";
import bgKontak from "../assets/bgKontak.png";
import { ArrowRightIcon, HomeIcon, MenuIcon } from '@heroicons/react/solid'

export default function Dashboard() {
    return (
        <React.Fragment>
            <div className="">
                {/* section Home */}
                <section id="home" className="relative">
                    {/* background */}
                    <div className="flex absolute w-full h-screen md-max:h-full">
                        <img src={BgAwal} alt="asd" className="w-5/12 md-max:w-full" />
                        <img src={Kakek} alt="asd" className="w-7/12 md-max:hidden" />
                    </div>
                    <div className="w-full relative flex justify-between">
                        {/* text */}
                        <div className="py-16 px-32 w-11/12 md-max:px-2 md-max:py-4 md-max:w-full">
                            <div className="pb-24 text-lg flex justify-between md-max:pb-6 md-max:text-sm">
                                <div className="flex"><p className="text-white">Lawrence</p><p className="text-sky-400">.me</p></div>
                                <div className="p-1 rounded-full bg-white md:hidden"><img src={Kakek} alt="ads" className="rounded-full h-16 w-16" /></div>

                            </div>
                            <div className="py-10 md-max:py-2">
                                <div className="text-sky-400 text-xl font-bold uppercase md-max:text-base"><p>HELLO GUYS</p></div>
                                <div className="text-white text-6xl font-semibold uppercase py-10 md-max:py-5 md-max:text-3xl"><p>I’m Dzulkifli</p></div>
                                <div className="text-white text-lg w-5/12 md-max:text-sm md-max:w-11/12"><p>i'm a professional <strong>Photographer, Videographer and Storyteller </strong>from Indonesia</p></div>
                            </div>
                            <div className="flex w-5/12 justify-start text-xl text-white py-10 md-max:py-12 md-max:w-full md-max:text-sm">
                                <div className=""><button className="bg-orange-400 py-2 px-6 rounded-lg">Hire Me</button></div>
                                <div className="flex items-center text-center"><button className="ml-14 mr-4"><u>View Resume</u></button><ArrowRightIcon className="h-8 md-max:h-4" /></div>
                            </div>
                        </div>
                        {/* navbar right */}
                        <div className="w-1/12 h-screen bg-gray-700 text-white md-max:hidden">
                            <div className="w-full rotate-90 mb-8"><MenuIcon className="w-full p-8" /></div>
                            <div className="flex text-xl rotate-90">
                                <div className="p-8 px-6 hover:bg-gray-600">
                                    <button>Home</button>
                                </div>
                                <div className="p-8 px-6 hover:bg-gray-600">
                                    <button>About Me</button>
                                </div>
                                <div className="p-8 px-6 hover:bg-gray-600">
                                    <button>Portfolio</button>
                                </div>
                                <div className="p-8 px-6 hover:bg-gray-600">
                                    <button>Contact</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* section about me */}
                <section id="about" className="relative md-max:block">
                    <div className="w-full flex">
                        {/* bagian kanan */}
                        <div className="w-1/2 p-28 flex justify-around md-max:hidden">
                            <img src={Ngoding} alt="" className="pb-20" />
                            <img src={Kopi} alt="" className="pt-20" />
                        </div>
                        {/* bagian kiri */}
                        <div className="w-1/2 py-40 md-max:w-full md-max:p-5">
                            <div className="text-sky-400 text-xl font-bold uppercase md-max:text-base"><p>About Me</p></div>
                            <div className="text-4xl font-bold py-4 md-max:text-3xl md-max:py-2"><p>Do You Know Me?</p></div>
                            <div className="w-7/10 text-gray-400 md-max:w-11/12"><p>Hello my name is Lawrance Waraweki, im a professional Photographer, Videographer and Storyteller, i have 15 years experienced for work in visual agency. and So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions.</p></div>
                            <div className="flex py-6 w-4/10 md-max:w-full md-max:justify-around">
                                <div className="flex font-bold md-max:text-sm md-max:font-semibold"><p className="font-bold text-sky-400 text-4xl pr-2 md-max:text-2xl">15</p>Years of Experience.</div>
                                <div className="flex font-bold md-max:text-sm md-max:font-semibold"><p className="font-bold text-sky-400 text-4xl pr-2 md-max:text-2xl">5</p>Satisfied Clients.</div>
                            </div>
                            <div className="flex items-center text-orange-500 md-max:text-sm">
                                <button className="mr-2 font-semibold"><u>View Resume</u></button><ArrowRightIcon className="h-4 md-max:h-3" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Photography */}
                <section className="relative md-max:hidden">
                    <div className="flex justify-between relative -bottom-40 px-28">
                        <div className="w-1/3 mx-5 mt-10 bg-white rounded-xl py-12 px-8 shadow-lg">
                            <div className="text-2xl font-bold flex items-center justify-between pb-5">
                                <p>Photography</p>
                                <span className="flex h-8 w-8">
                                    <span class="relative rounded-full h-7 w-7 bg-sky-700"></span>
                                    <span class="animate-ping absolute h-7 w-7 rounded-full bg-sky-500 opacity-50"></span>
                                </span>
                            </div>
                            <div className="text-gray-400 py-5"><p>Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to.</p></div>
                            <div className="font-medium"><p>150 Project Completed</p></div>
                        </div>
                        <div className="w-1/3 mx-5 mt-10 bg-white rounded-xl py-12 px-8 shadow-lg">
                            <div className="text-2xl font-bold flex items-center justify-between pb-5">
                                <p>Videography</p>
                                <span className="flex h-8 w-8">
                                    <span class="relative rounded-full h-7 w-7 bg-sky-700"></span>
                                    <span class="animate-ping absolute h-7 w-7 rounded-full bg-sky-500 opacity-50"></span>
                                </span>
                            </div>
                            <div className="text-gray-400 py-5"><p>I have hinted that I would often jerk poor Queequeg from between the whale and the ship—where he would occasionally fall, from the incessant.</p></div>
                            <div className="font-medium"><p>150 Project Completed</p></div>
                        </div>
                        <div className="w-1/3 mx-5 mt-10 bg-white rounded-xl py-12 px-8 shadow-lg">
                            <div className="text-2xl font-bold flex items-center justify-between pb-5">
                                <p>Storyteller</p>
                                <span className="flex h-8 w-8">
                                    <span class="relative rounded-full h-7 w-7 bg-sky-700"></span>
                                    <span class="animate-ping absolute h-7 w-7 rounded-full bg-sky-500 opacity-50"></span>
                                </span>
                            </div>
                            <div className="text-gray-400 py-5"><p>In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are.</p></div>
                            <div className="font-medium"><p>150 Project Completed</p></div>
                        </div>
                    </div>
                </section>
                {/* section portfolio */}
                <section id="portfolio" className="w-full h-full py-60 px-32 md-max:py-20 md-max:px-12" style={{ backgroundImage: `url(${Portfolio})` }}>
                    {/* bagian atas responsive */}
                    <div className="md:hidden text-center w-full text-white">
                        <div className="uppercase font-semibold text-lg"><p>Portfolio</p></div>
                        <div className="font-bold py-4 text-2xl"><p>All Creative Works, Selected Projects</p></div>
                    </div>
                    <div className="w-full h-full relative flex" >
                        {/* bagian kiri */}
                        <div className="w-1/2 text-white">
                            <div className="uppercase font-semibold text-xl md-max:hidden"><p>Portfolio</p></div>
                            <div className="text-3xl font-bold py-8 w-4/6 md-max:hidden"><p>All Creative Works, Selected Projects</p></div>
                            <div className="w-4/6 font-light md-max:w-full md-max:text-sm"><p>We are able to help you with the latest high tech solutions, thanks to our company culture.</p></div>
                            <div className="flex items-center py-8 md-max:text-sm">
                                <button className="mr-2 font-semibold"><u>View Resume</u></button><ArrowRightIcon className="h-4 md-max:h-3" />
                            </div>
                            <div className="w-full py-16"><img src={pensil} alt="" className="w-5/6" /></div>
                        </div>
                        {/* bagian kanan */}
                        <div className="w-1/2 py-16 px-20 md-max:px-2 md:max:py-2">
                            <div className="py-20 md-max:py-5"><img src={Emak} alt="" /></div>
                            <div className="py-20 md-max:py-5"><img src={Papan} alt="" /></div>
                        </div>
                    </div>
                </section>
                {/* company */}
                <section className="px-32 md-max:px-2">
                    <div className="flex justify-between bg-white rounded-xl shadow-lg relative -top-24 p-10 md-max:p-5 md-max:-top-12">
                        <img src={Logo1} alt=""  className="md-max:h-10"/>
                        <img src={Logo2} alt=""  className="md-max:h-10"/>
                        <img src={Logo3} alt=""  className="md-max:h-10"/>
                        <img src={Logo4} alt=""  className="md-max:h-10"/>
                        <img src={Logo5} alt=""  className="md-max:h-10"/>
                    </div>
                </section>
                {/* section testimonial */}
                <section id="testimonial" className="">
                    <div className="w-full px-36 md-max:px-2">
                        <div className="w-full text-center pt-16">
                            <div className="text-sky-400 text-xl font-bold uppercase md-max:text-lg"><p>Testimonials</p></div>
                            <div className="font-bold text-4xl py-4 md-max:text-2xl"><p>What They Say About Us</p></div>
                        </div>
                        <div className="flex justify-center md-max:flex-col w-full">
                            {/* bagian kanan */}
                            <div className="w-1/2 py-28 px-12 md-max:w-full md-max:px-8 md-max:py-6">
                                <div className="flex items-center text-center place-self-center">
                                    <img src={ppOm} alt="" className="rounded-full h-10" />
                                    <div className="ml-4">
                                        <p className="text-sky-400 text-xl font-bold md-max:text-lg">Lamone Waraweki</p>
                                        <p className="font-semibold md-max:text-sm">CO-Founder Netarch Studio</p>
                                    </div>
                                </div>
                                <div className="text-gray-400 font-light w-9/10 py-6 md-max:py-4 md-max:text-justify md-max:w-full md-max:text-sm"><p>So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly to perceive that my own individuality was now merged in a joint </p></div>
                            </div>
                            {/* bagian kiri */}
                            <div className="w-1/2 py-28 px-12 md-max:w-full md-max:px-8 md-max:py-6">
                                <div className="flex items-center text-center place-self-center">
                                    <img src={ppIbu} alt="" className="rounded-full h-10" />
                                    <div className="ml-4">
                                        <p className="text-sky-400 text-xl font-bold md-max:text-lg">Thomas Chavez</p>
                                        <p className="font-semibold md-max:text-sm">Professional Actor</p>
                                    </div>
                                </div>
                                <div className="text-gray-400 font-light w-9/10 py-6 md-max:py-4 md-max:text-justify md-max:w-full md-max:text-sm"><p>In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are</p></div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* section Contact */}
                <section className="h-full">
                    {/* background */}
                    <div className="flex w-full absolute">
                        <img src={Ngoding1} alt="" className="w-1/2 md-max:hidden" />
                        <img src={bgKontak} alt="" className="w-1/2 md-max:w-full" />
                    </div>
                    {/* text */}
                    <div className="flex w-full relative">
                        <div className="w-1/2 p-10">
                            <img src={Ngoding1} alt="" className="md:hidden rounded-lg"/>
                        </div>
                        <div className="w-1/2 p-32 md-max:p-2">
                            <div className="text-sky-400 text-xl font-bold uppercase md-max:text-lg"><p>Contact Us</p></div>
                            <div className="font-medium text-4xl py-4 text-white w-2/3 md-max:w-full md-max:text-2xl md-max:py-2"><p>Got a Project?Let’s talk.</p></div>
                            <div className="text-gray-400 font-light py-6 w-2/3 md-max:w-full md-max:py-3"><p>Challenge us. We want to work with you to create the really cool stuff.</p></div>
                            <div className="flex items-center text-orange-500">
                                <button className="mr-2 font-semibold md-max:text-sm"><u>hellolawrance@work.com</u></button><ArrowRightIcon className="h-4 md-max:h-3" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* section bottom bar */}
                <section className="relative md-max:-bottom-24 sm-max:-bottom-8">
                    <div className="bg-gray-700 w-full px-32 flex md-max:px-2">
                        <div className="text-lg flex w-1/2 items-center md-max:w-2/10 md-max:text-sm"><p className="text-white">Lawrence</p><p className="text-sky-400">.me</p></div>
                        <div className="w-1/2 flex text-white md-max:w-8/10 md-max:text-sm">
                            <div className="px-10 py-10 hover:bg-gray-600 md-max:p-4">
                                <button>Home</button>
                            </div>
                            <div className="px-10 py-10 hover:bg-gray-600 md-max:p-4">
                                <button>About Me</button>
                            </div>
                            <div className="px-10 py-10 hover:bg-gray-600 md-max:p-4">
                                <button>Portfolio</button>
                            </div>
                            <div className="px-10 py-10 hover:bg-gray-600 md-max:p-4">
                                <button>Contact</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
}