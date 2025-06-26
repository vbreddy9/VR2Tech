import './Hero.css'
import social from '../assets/social.png'

function Hero() {

  
  return (
  <div className='hero'>
    <div>
    <img src={social} alt="social" className='hero-img'/>  
    </div>  
    <div className="hero-title">Digital Marketing Agency
      <h2 className="hero-banner-title">Start <span>Connecting</span> with your online customers</h2>
      <p className="hero-title-text">VR2 Technologies is a bright and results driven digital marketing agency, grow your audience and expand your reach..</p>
      <div className="learn-more-btn-section">
      <button className="btn btn btn-danger" onClick={() => window.open('https://wa.link/tovlso', '_blank')}>Start your business</button>
      </div>
    </div>

  </div>
  )
}

export default Hero