import assestWvetianixd from '../../Assests/Asset 7@4x 1.png'
import assestX from  '../../Assests/Asset 21@4x 1.png'
import Background from '../../Assests/Mask group.png'
import artworkLaptop from '../../Assests/Arwork 2 1.png'

import './style.css'

const handleDragStart= (event)=>{
    event.preventDefault();
}
export const DiscoverSection = ()=>{
    return(
        <section className='DiscoverSection'>
            <img className='BackgroundIMG no-drag' src={Background} alt="backgroundImg" onDragStart={handleDragStart}/>
            <div className='imageContainer'>
                <img className='X no-drag' src={assestX} alt="X" onDragStart={handleDragStart}/>
                <img className='Wvetiani no-drag' src={assestWvetianixd} alt="wvetianiragaca" onDragStart={handleDragStart}/>
                <img className='laptop no-drag' src={artworkLaptop} alt="LaptopIMG" onDragStart={handleDragStart} />
            </div>
            <div className='ParagraphContainer'>
                <h1>Discover Cryptocurrency</h1>
                <div className='paragraph'>
                    <p>Lorem ipsum dolor sit amet consectetur. Blandit duis vestibulum a sed quis ante vitae vitae. Vitae vel proin quis iaculis. Senectus morbi sit volutpat id egestas augue tempor. Augue faucibus est at curabitur adipiscing ornare nunc sem libero.</p>
                    <p>Diam vivamus neque a fusce facilisis id ipsum cursus fermentum. Lectus mauris magna duis viverra velit vestibulum. Nunc sagittis amet enim pretium elit suscipit. Sagittis facilisi aliquet purus neque.</p>
                </div>
            </div>
        </section>
    )
}