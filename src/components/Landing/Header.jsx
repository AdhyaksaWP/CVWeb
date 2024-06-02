import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { motion } from "framer-motion";

function Header(){
    const[popupState, setPopupState] = useState(false);

    function aboutPopup(){
        return(
            <motion.div 
                className='z-[4] w-[100vw] h-[100vh] mt-[-13.7vh] bg-[hsla(0,10%,93%,0.4)] absolute'
                >
                <motion.div 
                    className="absolute top-[25vh] left-[25vw] bottom-[25vh] right-[25vw] w-[50vw] h-[50vh] bg-ivory z-[5]"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                    <div className='font-Roboto font-bold text-2xl text-center mr-3 w-8 relative left-[95%]
                    bg-[rgb(255,0,0)] text-[rgb(255,255,255)] cursor-pointer' onClick={() => {setPopupState(false)}} id='close'>
                        <button onClick={() => {setPopupState(false)}} id='close'> 
                            ×
                        </button>
                    </div>
                    <div className='flex flex-col w-[100%]'>
                        <h2 className='flex font-Outfit font-bold text-2xl justify-center mb-[5%]'>Hi! My Name is Adhy</h2>
                        <p className='flex font-Roboto text-xl justify-center text-justify mx-[10%]'>This is my first ever project using react where i want to showcase computer vision capabilities 
                            through a website, hoping to develop greater things in the future!</p>
                    </div>
                    <div className='flex w-[100%] h-[35%] items-end justify-center'>
                        <ul className='flex'>
                            <li className='mx-10'>
                                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                                <a className='font-Roboto font-semibold ml-2' href='https://github.com/AdhyaksaWP'>GitHub</a>
                            </li>
                            <li className='mx-10'>
                                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                <a className='font-Roboto font-semibold ml-2' href='https://github.com/AdhyaksaWP'>Instagram</a>
                            </li>
                            <li className='mx-10'>
                                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                <a className='font-Roboto font-semibold ml-2' href='https://github.com/AdhyaksaWP'>LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </motion.div>
        )
    }

    return(
        <header>
            <nav className="nav h-[13.7vh] w-[100vw] items-center justify-between px-40 border-b-indigo-dye
            border-b-4 bg-alabaster">
                <ul className="nav nav-elements text-2xl">
                    <li>
                        <a className="nav-option mr-20 font-extrabold" href="/">Home</a>
                    </li>
                    <li>
                        <button onClick={() => {setPopupState(true)}}>
                            <a className="nav-option font-extrabold" href="#">About</a>
                        </button>
                    </li>
                </ul>
                <button className="nav nav-elements 
                rounded-3xl w-32 h-11 items-center justify-center bg-indigo-dye
                 text-ivory border-4 border-sky-500 font-bold hover:bg-[rgb(88,179,185)] hover:transition-colors hover:ease-in"><a href="/CVApp">Try it Now!</a></button>
           </nav>
           {popupState && aboutPopup()}
        </header>
    );
}

export default Header