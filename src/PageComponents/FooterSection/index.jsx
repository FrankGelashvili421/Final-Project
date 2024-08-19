import social from '../../Assests/Frame 651.png'
import Logo from '../../Assests/Vector.png'
import './style.css'

export const FooterSection =()=>{
    return(
        <footer>
                <div className='FooterTitle'>
                    <img className='logoimage' src={Logo}alt="logo"/>
                    <p>Lorem ipsum dolor sit amet consectetur. Erat donec eleifend vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu tempus hendrerit. Non donec ut aenean placerat pulvinar quis.</p>
                    <img className='socialimage' src={social} alt="socials" />
                </div>
                <div className='FooterMain'>
                    <ul>
                        <li><h1>Navigation</h1></li>
                        <li><p>About Us</p></li>
                        <li><p>What we do</p></li>
                        <li><p>News</p></li>
                        <li><p>Projects</p></li>
                        <li><p>FAQ</p></li>
                        <li><p>Offices</p></li>
                    </ul>
                    <ul>
                        <li><h1>Resources</h1></li>
                        <li><p>About Us</p></li>
                        <li><p>What we do</p></li>
                        <li><p>News</p></li>
                        <li><p>Projects</p></li>
                        <li><p>FAQ</p></li>
                        <li><p>Offices</p></li>
                    </ul>
                    <ul>
                        <li><h1>Contact Info</h1></li>
                        <li className='ContactInfo'><p>828 Timbercest Road, Healy City AK 99743</p></li>
                        <li><p>Telephone: +(012) 346 6789</p></li>
                        <li><p>Fax: +(012) 345 6789</p></li>
                        <li><p>Email : contact@cyfer.com</p></li>
                    </ul>
                </div>
                <p>Copyright ©2023 Dotcreativemarket., Ltd. All right reserved</p>
        </footer>
    )
}