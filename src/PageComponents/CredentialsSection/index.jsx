import vector1 from '../../Assests/vector 1 (1).png'
import vector2 from '../../Assests/vector 1 (2).png'
import vector3 from '../../Assests/vector 1 (3).png'
import vector4 from '../../Assests/vector 1 (4).png'
import vector5 from '../../Assests/vector 1 (5).png'
import vector6 from '../../Assests/vector 1 (6).png'
import shape1 from '../../Assests/shapes (1).png'
import shape2 from '../../Assests/shapes (2).png'
import './style.css'


export const CredentialsSection = () =>{
    return(
        <section className='CredentialsBox'>
            <div className='CredentialsImageSide'>
                <div className='CredentialsImageSideParagraph'>
                    <p>Our Digital Partners</p>
                    <p className='RightSideParagraph'>Blockchain Standards</p>
                </div>
                <div className='ImageBox'>
                    <img src={vector1} alt="vector"/>
                    <img src={vector2} alt="vector"/>
                    <img src={vector3} alt="vector"/>
                    <img src={vector4} alt="vector"/>
                    <img src={vector5} alt="vector"/>
                    <img src={vector6} alt="vector"/>
                </div>
                <div className='CredentialsImageSideShape'>
                    <img src={shape1} alt="shapes" />
                </div>
            </div>   
               <div className='CredentialsTitleSide'>
                    <button><p>Our Credentials</p></button>
                    <h1>Expertise You Can Rely On</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Blandit duis vestibulum a sed quis ante vitae vitae. Vitae vel proin quis iaculis. Senectus morbi sit volutpat id egestas augue tempor. Augue faucibus est at curabitur adipiscing ornare nunc sem libero. Diam vivamus neque a fusce facilisis id ipsum cursus fermentum.</p>
                    <div className='CredentialsTitleSideShape'>
                        <img  src={shape2} alt="shapes" />
                    </div>
               </div>
         </section>
    )
}