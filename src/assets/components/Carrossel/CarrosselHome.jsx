import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import imagem1 from '../../img/imagem1.jpg'
import imagem2 from '../../img/imagem2.jpg'
import imagem3 from '../../img/imagem3.jpg'
import imagem4 from '../../img/imagem4.jpg'
import "./CarrosselHome.css"




 
class CarrosselHome extends React.Component {
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
  
          <div>  
             <img src={imagem1} className='imagem1'></img>
             <h1 className='legenda'>Sociedade</h1>
          </div>
          <div>
          <img src={imagem2} className='imagem2'></img>
          <h1 className='legenda'>Sustentabilidade</h1>
          </div>
          <div>
          <img src={imagem3} className='imagem3'></img>
          <h1 className='legenda'>Segurança</h1>
          </div>
          <div>
          <img src={imagem4} className='imagem4'></img>
       
          </div>
  
    
      
        </Slider>
      );
    }
  }
  
  export default CarrosselHome;