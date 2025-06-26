import './Clients.css'
import Marquee from "react-fast-marquee";
import sannidhi from '../assets/sannidgi.png'
import prc from '../assets/PRC.png'
import nw from '../assets/designerweb.png'
import vrr from '../assets/vrr-logo.png'
import lr from '../assets/landrise.png'
import be from '../assets/british-elderly-care.png'

function Clients () {
  return (
    <div className='clients-container' >
      <Marquee pauseOnHover>
      <div className='client'>
        <img src={sannidhi} alt='Sannidhi Group' />
      </div>
      <div className='client'>
        <img src={prc} alt='PRC' />
      </div>
      <div className='client'>
        <img src={nw} alt='Designer Web' />
      </div>
      <div className='client'>
        <img src={vrr} alt='VRR' />
      </div>
      <div className='client'>
        <img src={lr} alt='landrise' />
      </div>
      <div className='client'>
        <img src={be} alt='landrise' />
      </div>
      </Marquee>
    </div>
  )
}

export default Clients
