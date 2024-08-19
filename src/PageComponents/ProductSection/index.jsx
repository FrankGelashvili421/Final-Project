import Logo from '../../Assests/Group.png'
import Logo2 from '../../Assests/Group (1).png'
import Logo3 from '../../Assests/Group (2).png'
import './style.css'

export const ProductSection = () =>{
    return(
        <section className='productsSection'>
            <button><p>Our Product</p></button>
            <h1>Our Range of Crypto Product</h1>
            <div className='BtnContainer'>
                <div className='BtnBox'>
                    <div className='LogoSection'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className='ParagraphSection'>
                        <h1>Sakura</h1>
                        <p>Vitae Vel Froin</p>
                    </div>
                </div>
                <div className='BtnBox ChangedBorder'>
                    <div className='LogoSection'>
                        <img src={Logo2} alt="logo" />
                    </div>
                    <div className='ParagraphSection'>
                        <h1>Komorebi</h1>
                        <p>Vitae Vel Froin</p>
                    </div>
                </div>
                <div className='BtnBox'>
                    <div className='LogoSection'>
                        <img src={Logo3} alt="logo" />
                    </div>
                    <div className='ParagraphSection'>
                        <h1>Yugen</h1>
                        <p>Vitae Vel Froin</p>
                    </div>
                </div>
            </div>
        </section>
    )
}