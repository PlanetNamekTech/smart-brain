import Tilt from 'react-parallax-tilt';
import './logo.css'
import brain from './brain_3.png'

const Logo = () => {
    return ( 
    <div className="ma4 mt0">
      <Tilt className='tilt'> 
          <img src={brain} alt="brain logo" />
      </Tilt>
    </div>
     );
}
 
export default Logo;