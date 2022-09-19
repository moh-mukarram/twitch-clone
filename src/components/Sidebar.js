import React from 'react';
import {motion} from 'framer-motion';
import {TbArrowBarLeft,TbArrowBarRight,TbArrowsSort,TbHeart} from 'react-icons/tb'
import {useState} from 'react';

const Sidebar = ({children}) => {

    const [isOpen,setIsOpen] = useState(true);
    const toggle = () =>setIsOpen (!isOpen);
  return (
    
    <div className='main-container'>
        <motion.div animate={{width: isOpen? "250px" : "45px"}} className="sidebar">

            <div className='first-section'>
                {isOpen && <h2 className='for-you'>For You</h2>}
                <div className='collapse'>
                    {isOpen ? <TbArrowBarLeft size={20} onClick={toggle}/> : <TbArrowBarRight size={20} onClick={toggle}/>}
                    
                </div>
            </div>
            <div className='sec-section'>
                {isOpen && <h2 className='rec-channel'>RECOMMENDED CHANNELS</h2> }
                <div className='sort'>
                {isOpen ? <TbArrowsSort size={18} onClick={toggle}/> : <TbHeart size={18} onClick={toggle}/>}
                </div>
            </div>

        </motion.div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar;