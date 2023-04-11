import React, { useContext } from 'react'
import '../Bollyctnt/bollycont.css'
import NoteContext from '../../Context/NoteContext'
import { Link } from 'react-router-dom'

function Techtwo() {
  const a = useContext(NoteContext)

  return (
    <>
<Link to='/technology'>
    <div className="header">
    <h1 className='heading2'><span className='the2'>The</span> Siren</h1>
    </div>
    </Link>

    <div className='container'> 
        <h2 className='gl'>{a.cardchat}</h2>
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
        <img src="https://media.nationthailand.com/uploads/images/md/2023/02/LnHGoajYyVef4oiO3bbg.webp?x-image-process=style/lg" className="bolimg" alt="purple scene" />

       
    </div>
    <div className='content'>
      <p>{a.contentchat}</p>
      <p>{a.contentchat1}</p>
      <p>{a.contentchat2}</p>
      <p>{a.contentchat3}</p>
      <p>{a.contentchat4}</p>
    </div>
    </>
  )
}

export default Techtwo