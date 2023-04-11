import React, { useContext } from 'react'
import '../Bollyctnt/bollycont.css'
import NoteContext from '../../Context/NoteContext'
import { Link } from 'react-router-dom'

function Techfive() {
  const a = useContext(NoteContext)
  return (
    <>
      <Link to='/technology'>
    <div className="header">
    <h1 className='heading2'><span className='the2'>The</span> Siren</h1>
    </div>
    </Link>
    <div className='container'> 
        <h2 className='gl'>{a.carddigitwinn}</h2>
        <hr />
        <div className='insidehead'>
          <div className='insides'>
            <div><img src="https://images-platform.99static.com/jQu2xohritutSVmnVq7np7rbkxg=/0x0:1920x1920/500x500/top/smart/99designs-contests-attachments/106/106359/attachment_106359975" alt="avatar"  className='avatar'/></div>
            <div>
              <p>Saya</p>
              <p>April 08 2023</p>
            </div>
            </div>
            <img src="https://freepngimg.com/thumb/social_media/74031-instagram-icons-media-youtube-computer-facebook-social-thumb.png" alt="logos" className='logos'/>
        </div>
        <img src="https://aidoos.com//media/main-image/digital-twin/Digital-twin.jpg" className="bolimg" alt="purple scene" />


       
    </div>
    <div className='content'>
      <p>{a.contentdigitwin}</p>
    </div>
    </>
  )
}

export default Techfive