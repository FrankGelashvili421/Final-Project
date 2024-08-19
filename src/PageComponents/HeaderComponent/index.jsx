import { useEffect, useRef, useState } from 'react'
import logo from '../../Assests/Vector.png'
import './style.css'

export const HeaderComponent = () =>{
    const [dropdown , setDropDown]= useState(false)

    let menuref = useRef();

    useEffect(()=>{
        let handler = (e)=>{
            if(menuref.current.contains(e.target)){
                setDropDown(false)
            }
        }
        document.addEventListener('mousedown', handler)
    })
    const DropdownFunc = ()=>{
        setDropDown(!dropdown)
    }
    return (
        <header>
            <img src={logo} alt="CyferLogo" />
           <div className='Navigation'>
                <div className='gradientBackground'></div>
                <ul className='ResponsiveHidden'>
                    <li>Home</li>
                    <li>Products</li>
                    <li>services</li>
                    <li>Why Us</li>
                    <li>Resources</li>
                    <li>About</li>
                </ul>
           </div>
            <div className='ContactNowBtn ResponsiveHidden'>
                <button><p>Contact Now</p></button>
            </div>
            <div className='BurgerMenu' onClick={DropdownFunc}></div>
            <div ref={menuref} className={`ResponsiveShown ${dropdown ? 'active' : 'inactive'}`}>
                <div className='ResponsiveMenu'>
                    <div className='XButton' onClick={()=> !dropdown}></div>
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>services</li>
                        <li>Why Us</li>
                        <li>Resources</li>
                        <li>About</li>
                    </ul>
            </div>
                <div className='ContactNowBtn'>
                    <button><p>Contact Now</p></button>
                </div>
            </div>
        </header>
    )
}