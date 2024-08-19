import triangle from '../../Assests/rektangle.png'
import './style.css'

export const FormSection = () =>{
    return(
        <section className='FormSection'>
            <div className='FormTitle'>
                <h1>Embark an a Digital Journey</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Erat donec eleifend vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu tempus.</p>
                <img src={triangle} alt="triangle" />
            </div>
            <form>
              <div className='inputflex'>
                <label htmlFor="name">Full Name</label>
                <input className='PolygonChange' id='name' type="text"/>
              </div>
              <div  className='InputContainer'>
                <div  className='inputflex'>
                    <label htmlFor="name1"> Name</label>
                    <input className='polygonChangeLeft' id='name1' type="text"/>
                </div>
                <div  className='inputflex'>
                    <label htmlFor="name2">Surname</label>
                    <input className='poligonChangeRight' id='name2' type="text"/>
                </div>
              </div>
              <div  className='inputflex'>
                <label htmlFor="name3">email</label>
                <input className='PolygonChange' id='name3' type="text"/>
              </div>
              <div className='inputflex'>
                  <label htmlFor="name4">tell us Whats Wrong?</label>
                  <input  type="title" id='name4' className='BigInput'/>
              </div>
              <div className='CheckboxSide'>
                  <input id='check' type="checkbox"/>
                  <label htmlFor="check" >I have read and accepted the terms and conditions specified in the <p>Privacy Policy</p> and do here by consent to the collecting, processing and/or disclosing of the personal data provided by me to fulfil the above-said purposes.</label>
              </div>
              <button>Contact Now</button>
            </form>
        </section>
    )
}