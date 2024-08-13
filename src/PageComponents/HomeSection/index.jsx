import VectorObject from '../../Assests/Vector Smart Object 1.png'
import Background from '../../Assests/background.png'
import asset from '../../Assests/Asset 9@4x 1.png'
import artwork from '../../Assests/Arwork 1.png'
import ball from '../../Assests/Asset 4@10x 1.png'
import "./style.css"

const handleDragStart = (event) => {
    event.preventDefault();
  };

export const HomeSection = () =>{
    return(
        <section>
            <div className="BackgroundBlur"><img className="BackgroundBlur no-drag" src={Background} alt="BackgroundBlur" onDragStart={handleDragStart}/></div>
            <div className='ImageContainer'>
                <img className='artwork no-drag' src={artwork} alt="artwork"  onDragStart={handleDragStart}/>
                <img className='VectorObject no-drag' src={VectorObject} alt="Vector Object" onDragStart={handleDragStart} />
                <img className='Ball no-drag' src={ball} alt="BallImage" onDragStart={handleDragStart}/>
                <img className='asset-94 no-drag' src={asset} alt="asset" onDragStart={handleDragStart}/>
            </div>
            <div className='TextContainer'>
                <h6>Unlocking the Future of Finance</h6>
                <p>In a digital age driven by innovation, cryptocurrency has emerged as a revolutionary force that is reshaping the way we perceive and interact with money. At [Your Crypto Platform], we are your gateway to this exciting world of decentralized finance, empowering you to explore, invest, and transact with confidence.</p>
                <div className='BtnContainer'>
                    <button className='ContactUsBtn'>Contact Us</button>
                    <button className='LearnMoreBtn'>Learn More</button>
                </div>
            </div>
        </section>
    )
}