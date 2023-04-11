import React,{useContext} from 'react'
import Nav from './Nav'
import './bolly.css'
import './container.css'
import { Link } from 'react-router-dom'
import NoteContext from './Context/NoteContext'



function Bollywood() {
  const a = useContext(NoteContext)

  return (
    <>
      <Nav/>
      <div className='container'>
        <div className='containerhead'>
            <div className="compcon1">
              <h1 className='head'>Bollywood</h1>
              <hr className='hr11'/> 
            </div>
        </div>

        <div className="containercontent">
          <div className="contentcard">

          <Link to='/bollywood/Bollyone'>
          <img src="https://images.livemint.com/img/2023/03/21/600x338/The-film-has-been-produced-by-Tips-Films-and-Music_1679375273338.png" className="bolimg" alt="purple scene" />
          </Link>

            <div className='pcontent'>
              <p className='p1content'>{a.cardgaslight}</p>
              <p className='p2content'>{a.desccardgaslight}</p>
            </div>
          </div>

          <div className="contentcard">

          <Link to='/bollywood/Bollytwo'>
          <img src="https://m.media-amazon.com/images/M/MV5BZGM0MTI2NjAtNjZmNC00YzQ0LTljZDgtMjdjMTMyNjUyOTUwXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_FMjpg_UX1000_.jpg" className="bolimg" alt="purple scene" />
          </Link>

          <div className='pcontent'>
            
              <p className='p1content'>{a.cardkanjoos}</p>
              <p className='p2content'>{a.desccardkanjos}</p>
            </div>
          </div>

          <div className="contentcard">
          <Link to='/bollywood/Bollythree'>
          <img src="https://m.media-amazon.com/images/M/MV5BYjBkMGE5ZjEtOTdkNC00OTA5LWIzOWQtMmJmODRlMmRhM2YxXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg" className="bolimg" alt="purple scene" />
          </Link>
          <div className='pcontent'>
              <p className='p1content'>{a.cardblurr}</p>
              <p className='p2content'>{a.desccardblurr}</p>
            </div>        
          </div>          
        </div>

        <div className="anothercontainercontent">
          <div className="conctnts">
            <div className="conctnt">
            <Link to='/bollywood/Bollyfour'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpFB9bqM4R9AsTAVu2_QJJeqbKgBhpvu17xQkAdBdN2f88pky" className="bolimg" alt="purple scene" />
              </Link>
              <div className='pcontent1'>
                <p className='p1'>{a.cardfreddy}</p>
                <p className='p2'>{a.desccardfreddy}</p>
              </div>
            </div>
  
            <div className="conctnt">
            <Link to='/bollywood/Bollyfive'>
          <img src="https://pbs.twimg.com/media/FnDTY_oaEAAI3VK?format=jpg&name=medium" className="bolimg" alt="purple scene" />
          </Link>
              <div className='pcontent1'>
                  <p className='p1'>{a.cardbhola}</p>
                  <p className='p2'>{a.desccardbhola}</p>
              </div>
            </div>

            <div className="conctnt">
            <Link to='/bollywood/Bollysix'>
          <img src="https://m.media-amazon.com/images/M/MV5BNmU2NjI5MDUtODIzZS00ODNlLTg0ODItMTI5YTM5YWE5NzJmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg" className="bolimg" alt="purple scene" />
          </Link>
              <div className='pcontent1'>
                <p className='p1'>{a.cardyodha}</p>
                <p className='p2'>{a.desccardyodha}</p>
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

export default Bollywood
