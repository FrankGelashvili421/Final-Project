import instagram from '../../Assests/instagram.png'
import pfp3 from '../../Assests/Frame 719 (2).png'
import pfp2 from '../../Assests/Frame 719 (1).png'
import facebook from '../../Assests/facebook.png'
import tweeter from '../../Assests/tweeter.png'
import pfp from '../../Assests/Frame 719.png'
import './style.css'

export const ClientCommentSection = ()=>{
    return(
        <section className='Clients'>
            <div className='ClientsHead'>
                <button><p>Testimonials</p></button>
                <h1>What Our Clients Have to Say</h1>
                <p>While you may think you are safe online, these real-life stories prove otherwise</p>
            </div>
            <div className='ClientsMain'>
                <div className='ClientsBox'>
                    <div className='ClientInfo'>
                        <img src={pfp} alt="pfp" />
                        <div className='ClientBox'>
                            <h1>Wade Werren</h1>
                            <p>Co-Founder of Superlink</p>
                            <div className='Links'>
                                <img src={facebook} alt="fb" />
                                <img src={tweeter} alt="tweeter"/>
                                <img src={instagram} alt="instagram" />
                            </div>
                        </div>
                    </div>
                    <div className='ClientComment'>
                        <p>Lorem ipsum dolor sit amet consectetur. Erat donec eleifend vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu tempus hendrerit. Non donec ut aenean placerat pulvinar quis.</p>
                    </div>
                </div>
                <div className='ClientsBox'>
                    <div className='ClientInfo'>
                        <img src={pfp2} alt="pfp" />
                        <div>
                            <h1>Wade Werren</h1>
                            <p>Co-Founder of Superlink</p>
                            <div className='Links'>
                                <img src={facebook} alt="fb" />
                                <img src={tweeter} alt="tweeter"/>
                                <img src={instagram} alt="instagram" />
                            </div>
                        </div>
                    </div>
                    <div className='ClientComment'>
                        <p>Lorem ipsum dolor sit amet consectetur. Erat donec eleifend vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu tempus hendrerit. Non donec ut aenean placerat pulvinar quis.</p>
                    </div>
                </div>
                <div className='ClientsBox'>
                    <div className='ClientInfo'>
                        <img src={pfp3} alt="pfp" />
                        <div>
                            <h1>Wade Werren</h1>
                            <p>Co-Founder of Superlink</p>
                            <div className='Links'>
                                <img src={facebook} alt="fb" />
                                <img src={tweeter} alt="tweeter"/>
                                <img src={instagram} alt="instagram" />
                            </div>
                        </div>
                    </div>
                    <div className='ClientComment'>
                        <p>Lorem ipsum dolor sit amet consectetur. Erat donec eleifend vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu tempus hendrerit. Non donec ut aenean placerat pulvinar quis.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}