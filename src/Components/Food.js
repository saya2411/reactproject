import React,{useContext} from 'react'
import NoteContext from './Context/NoteContext'
import Nav from './Nav'
import './container.css'
import './bolly.css'
import { Link } from 'react-router-dom'



function Food() {
  const a = useContext(NoteContext)

  return (
    <>
      <Nav/>
      <div className='container'>
        <div className='compcontainer'>
            <div className="compcon1">
              <h1 className='head'>Food</h1>
              <hr className='hr1'/>            
            </div>
        </div>

        <div className="containercontent">
          <div className="contentcard">
          <Link to='/food/Foodone'>
          <img src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content6054.jpg" className="bolimg" alt="purple scene" />
          </Link>
            <div className='pcontent'>
              <p className='p1content'>{a.cardindian}</p>
              <p className='p2content'>{a.desccardindian}</p>
            </div>
          </div>

          <div className="contentcard">
          <Link to='/food/Foodtwo'>
          <img src="https://www.foodandwine.com/thmb/ue_WDjrF9DKAnIpCfRD83lL2Zmg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Longevity-Noodles-FT-RECIPE1122-7844eba95b8a4094b41fa1153cefc3e3.jpg
" className="bolimg" alt="purple scene" />
          </Link>
          <div className='pcontent'>
              <p className='p1content'>{a.cardchinese}</p>
              <p className='p2content'>{a.desccardchinese}</p>
            </div>
          </div>

          <div className="contentcard">
          <Link to='/food/Foodthree'>
          <img src="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQSFqbWlV7IqvASUvK-OTW9ljoDeJa1lCkSKYSXH7YY1SAQ-y1ZIYIYCUcPyHsYsRaBO5SoNZNmxAMTWmo" className="bolimg" alt="purple scene" />
          </Link>
          <div className='pcontent'>
              <p className='p1content'>{a.cardfrench}</p>
              <p className='p2content'>{a.desccardfrench}</p>
            </div>        
          </div>          
        </div>

        <div className="anothercontainercontent">
        <div className="conctnts">
            <div className="conctnt">
            <Link to='/food/Foodfour'>
            <img src="https://www.thespruceeats.com/thmb/Jt-NMtRLzyC0tz1XJs8CBl0FdjE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/118465226-56a8d2e65f9b58b7d0f57825.jpg" className="bolimg" alt="purple scene" />
              </Link>
              <div className='pcontent1'>
                <p className='p1'>{a.cardspanish}</p>
                <p className='p2'>{a.desccardspanish}</p>
              </div>
            </div>
  
            <div className="conctnt">
            <Link to='/food/Foodfive'>
          <img src="https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Pork-carnitas-b94893e.jpg?quality=90&resize=556,505" className="bolimg" alt="purple scene" />
          </Link>
              <div className='pcontent1'>
                  <p className='p1'>{a.cardmexican}</p>
                  <p className='p2'>{a.desccardmexican}</p>
              </div>
            </div>

            <div className="conctnt">
            <Link to='/food/Foodsix'>
          <img src="https://cdn.tasteatlas.com/images/toplistarticles/9b66fcce6cc04ec59acbc4ce78e2ca23.jpg?m=facebook" className="bolimg" alt="purple scene" />
          </Link>
              <div className='pcontent1'>
                <p className='p1'>{a.cardgreek}</p>
                <p className='p2'>{a.desccardgreek}</p>
              </div>
            </div>
          </div>
          <div className="advertisement">
            <h2>Advertisement</h2>
          </div>
        </div>
            

        </div>
    </>
  )
}

export default Food
