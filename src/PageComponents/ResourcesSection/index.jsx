import unsplash2 from '../../Assests/unsplash_vZJdYl5JVXY 2.png'
import unspash1 from '../../Assests/unsplash_2JDDn7iSGH8 1.png'
import unsplash3 from '../../Assests/unsplash_gnyA8vd3Otc.png'
import background from '../../Assests/cubebackg.png'
import './style.css'

export const ResourcesSection =()=>{
    return(
        <section>
            <div className='ResourcesHeader'>
                <button><p>Our Resources</p></button>
                <h1>Latest News & Blog</h1>
            </div>
            <div className='ResourcesMiddle'>
                <div className='ResourcesMiddleTextSide'>
                    <p>Sercurity | 10min read</p>
                    <h1>Lorem ipsum dolor sit amet consectetur. Pretium amet facilisis.</h1>
                    <p className='ParagraphTitle'>Lorem ipsum dolor sit amet consectetur. Erat donec eleifend vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu tempus hendrerit. Non donec ut aenean placerat pulvinar quis.</p>
                    <p className='DateParagraph'>August 4. 2023</p>
                </div>
                <div className='ResourcesMiddleImageSide'>                
                    <img src={background} alt="Background" />
                </div>
            </div>
            <div className='ResourcesMain'>
                <div className="ResourcesCards">
                    <img src={unspash1} alt="imageError"/>
                    <div className='ResourcesParagraph'>
                        <p>Sercurity | 10min read</p>
                        <p>Lorem ipsum dolor sit amet consectetur. Erat donec eleifend vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu tempus hendrerit. Non donec ut aenean placerat pulvinar quis.</p>
                        <p className='DateParagraph'>August 4. 2023</p>
                    </div>
                </div>
                <div className="ResourcesCards">
                    <img src={unsplash2} alt="imageError"/>
                    <div className='ResourcesParagraph'>
                        <p>Sercurity | 10min read</p>
                        <p>Lorem ipsum dolor sit amet consectetur. Erat donec eleifend vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu tempus hendrerit. Non donec ut aenean placerat pulvinar quis.</p>
                        <p className='DateParagraph'>August 4. 2023</p>
                    </div>
                </div>
                <div className="ResourcesCards">
                    <img src={unsplash3} alt="imageError"/>
                    <div className='ResourcesParagraph'>
                        <p>Sercurity | 10min read</p>
                        <p>Lorem ipsum dolor sit amet consectetur. Erat donec eleifend vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu tempus hendrerit. Non donec ut aenean placerat pulvinar quis.</p>
                        <p className='DateParagraph'>August 4. 2023</p>
                    </div>
                </div>
            </div>
        </section>
    )
}