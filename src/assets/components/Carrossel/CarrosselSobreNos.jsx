import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import alysson from '../../img/Alysson.jpeg'
import gabriel from '../../img/gabriel.jpeg'
import luiz from '../../img/luiz.jpeg'
import carlos from '../../img/carlos.jpeg'
import giullia from '../../img/giullia.jpeg'
import linkedin from '../../img/linkedin.jpg'
import { background } from '@chakra-ui/react';
import "./CarrosselSobreNos.css"




 
class CarrosselSobreNos extends React.Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        

      };
      return (
        <Slider {...settings}>
    
          <div >
            
             <img src={alysson} className='alysson'></img>

             <h3>Alysson Rafael</h3>
             <h3>Idade: 22 anos</h3>
             <h3>Cursando Sistemas para internet</h3>
             <a href='https://www.linkedin.com/in/alysson-rafael-0941ba1b3/'>
             <img src={linkedin} className='linkedin'></img>
             </a>


          </div>
          <div>

          <img src={gabriel} className='gabriel'></img>

            <h3>Gabriel Pereira</h3>
            <h3>Idade: 21 anos</h3>
            <h3>Cursando Sistemas para internet</h3>
            <a href='https://www.linkedin.com/in/gabrielp03'>
             <img src={linkedin} className='linkedin'></img>
             </a>
            
            
          </div>
          <div>

          <img src={luiz} className='luiz'></img>

            <h3>Luiz</h3>
            <h3>Idade: 20 anos</h3>
            <h3>Cursando Sistemas para internet</h3>
            <a href='https://www.linkedin.com/in/luizhenriqueneto/'>
             <img src={linkedin} className='linkedin'></img>
             </a>
          </div>
          <div>

          <img src={carlos}className='carlos'></img>
            <h3>Carlos</h3>
            <h3>Idade: 23 anos</h3>
            <h3>Cursando Sistemas para internet</h3>
            <a href='https://www.linkedin.com/in/eduardo-lima-177w/'>
             <img src={linkedin} className='linkedin'></img>
             </a>
          </div>
          <div>
          <img src={giullia} className='giullia'></img>

            <h3>Giullia</h3>
            <h3>Idade: 19 anos</h3>
            <h3>Cursando Sistemas para internet</h3>
            <a href='https://www.linkedin.com/in/giulliavieira/'>
             <img src={linkedin} className='linkedin'></img>
             </a>
          </div>
          
        </Slider>
      );
    }
  }
  
  export default CarrosselSobreNos;