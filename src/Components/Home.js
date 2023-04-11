import React, { useContext } from 'react'
import Nav from './Nav'
import './container.css'
import NoteContext from './Context/NoteContext'
import { Link } from 'react-router-dom'

function Home() {
  const a = useContext(NoteContext)
  return (
    <>
      <Nav />

      <div className='imgcon'>
        <div>
        <Link to='/bollywood/Bollyfour'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpFB9bqM4R9AsTAVu2_QJJeqbKgBhpvu17xQkAdBdN2f88pky" alt="" className='image' />
          </Link>
          </div>

        <div>
        <Link to='/Hollywood/Hollyfour'>
          <img src="https://movies.universalpictures.com/media/01-cb-dm-mobile-banner-1080x745-pl-f01-112222-638e6de200084-1.jpg" alt="purple scene" className='image1' />
          </Link>
          </div>

        <div>
        <Link to='/technology/Techsix'>
          <img src="https://i0.wp.com/epthinktank.eu/wp-content/uploads/2022/06/AdobeStock_161157955.png?fit=820%2C656&ssl=1" alt="purple scene" className='image2' />
          </Link>
          </div>
      </div>

      <div className='container'>
        <br />
        <h1 className='head'>Latest Articles</h1>
        <hr className='hr1' />
        <hr className="no" style={{ width: '68%' }} />

        <div className="midcon">
          <div className='midcon1'>
            <div className="midcons">
              {/* grey card */}
              <Link to='/bollywood/Bollytwo'>
              <img src="https://m.media-amazon.com/images/M/MV5BZGM0MTI2NjAtNjZmNC00YzQ0LTljZDgtMjdjMTMyNjUyOTUwXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_FMjpg_UX1000_.jpg" className="img" alt="purple scene" />
              </Link>
              <div className='cardcontent'>
                {/* content */}
                <h3 className='card1'>{a.cardkanjoos}</h3>
                <p className='card1para'>{a.desccardkanjos}</p>
                <p className='card1footer'>Bollywood <span className='light'>/ April 08 2023</span></p>
              </div>
            </div>

            <div className="midcons">
            <Link to='/Hollywood/Hollytwo'>
              <img src="https://m.media-amazon.com/images/M/MV5BODBjM2M4YTQtNmJlMS00MGU2LWI4ZGYtZTA1MzdmZDAyMjFkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" className="img" alt="purple scene" />
              </Link>
              <div className='cardcontent'>
                <h3 className='card1'>{a.cardscream}</h3>
                <p className='card1para'>{a.desccardscream}</p>
                <p className='card1footer'>Hollywood <span className='light'>/ April 08 2023</span></p>
              </div>
            </div>
            <div className="midcons">
            <Link to='/technology/Techfive'>
              <img src="https://aidoos.com//media/main-image/digital-twin/Digital-twin.jpg" className="img" alt="purple scene" />
              </Link>
              <div className='cardcontent'>
                <h3 className='card1'>{a.carddigitwin}</h3>
                <p className='card1para'>{a.desccarddigitwin}</p>
                <p className='card1footer'>Technology <span className='light'>/ April 08 2023</span></p>
              </div>
            </div>
            <div className="midcons">
            <Link to='/food/Foodfive'>
              <img src="https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Pork-carnitas-b94893e.jpg?quality=90&resize=556,505" className="img" alt="purple scene" />
              </Link>
              <div className='cardcontent'>
                <h3 className='card1'>{a.cardmexican}</h3>
                <p className='card1para'>{a.desccardmexican}</p>
                <p className='card1footer'>Food <span className='light'>/ April 08 2023</span></p>
              </div>
            </div>
          </div>

          <div className="midcon2">
            {/* grey ad container */}
            <div className='add'>
              Advertisement
            </div>

          </div>
        </div>
        <h1 className='head left'>Top Posts</h1>
        <hr className='hr1 hrleft' />
        <Link to='/food/Foodsix'>
        <img src="https://cdn.tasteatlas.com/images/toplistarticles/9b66fcce6cc04ec59acbc4ce78e2ca23.jpg?m=facebook" className="img1" alt="purple scene" />
        </Link>
        <div className='cardcontent1'>
          <h3 className='card1'>{a.cardgreek}</h3>

          <p className='card1footer'>Food <span className='light'>/ April 08 2023</span></p>
        </div>
      </div>

      <div className='lastimg'>
      <Link to='/technology/Techthree'>
        <img src="https://www.ecommercetimes.com/wp-content/uploads/sites/5/2022/02/metaverse-shopping.jpg" className="imagee" alt="purple scene" />
</Link>
        <h3 className='cardctnt'>{a.cardmeta}</h3>
        <p className='cardfooter'>Technology <span className='light'>/ April 08 2023</span></p>
      </div>

      <div className='small small1'>
      <Link to='/fitness/Fitfour'>
        <img src="https://media.istockphoto.com/id/1346624734/vector/child-boy-in-sportswear-running-fast-flat-cartoon-vector-illustration-isolated.jpg?s=170667a&w=0&k=20&c=VmsXRxNqidqMpSDlAMm6BwN0kR-mmHVmVC-8SUfW7PU=" className="imgright" alt="purple scene" />
        </Link>
        <div className='ctnt'>
          <h3 className='cardctntright'>{a.cardrunning}</h3>

          <p className='cardfooterright'>Fitness <span className='light'>/ April 08 2023</span></p>
        </div>
      </div>

      <div className='small small1'>
      <Link to='/fitness/Fitone'>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/697d91121710739.60cb38b635671.png" className="imgright" alt="purple scene" />
        </Link>
        <div className='ctnt1'>
          <h3 className='cardctntright1'>{a.cardyoga}</h3>
        </div>
        <div className='fit'>
        <p className='cardfooterright1'>Fitness <span className='light'>/ April 08 2023</span></p>
        </div>
      </div>
      <div className='small small2'>
      <Link to='/fitness/Fitfive'>
        <img src="https://media.istockphoto.com/id/1359291135/vector/sport-road-cyclists.jpg?s=612x612&w=0&k=20&c=3wNqA5gh5wVNwjnjRuG7yhey8jNbTWKmmT5dky8wtkI=" className="imgright2" alt="purple scene" />
        </Link>
        <div className='ctnt2'>
          <h3 className='cardctntright2'>{a.cardcycle}</h3>
        </div>
        <div className='foot'>
        <p className='cardfooterright2'>Fitness <span className='light'>/ April 08 2023</span></p></div>
      </div>
      

    </>
  )
}

export default Home
