import './style.css'
import logo from '../../Assests/Vector.png'

export const HeaderComponent = () =>{
    return (
        <header>
            <img src={logo} alt="CyferLogo" />
           <div className='Navigation'>
                <div className='gradientBackground'></div>
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
        </header>
    )
}