import React, { useState } from 'react';
import { Box, IconButton, Img, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

//Import Brands logo SVG
import logoArmani from '../../assets/logo/brandsLogo/armani.svg';
import logoBenetton from '../../assets/logo/brandsLogo/benetton.svg';
import logoBoss from '../../assets/logo/brandsLogo/boss.svg';
import logoCalvin from '../../assets/logo/brandsLogo/calvin.svg';
import logoChanel from '../../assets/logo/brandsLogo/chanel.svg';
import logoDior from '../../assets/logo/brandsLogo/christian.svg';
import logoConverse from '../../assets/logo/brandsLogo/converse.svg';
import logoDiesel from '../../assets/logo/brandsLogo/diesel.svg';
import logoDolce from '../../assets/logo/brandsLogo/dolce.svg';
import logoFila from '../../assets/logo/brandsLogo/fila.svg';
import logoGucci from '../../assets/logo/brandsLogo/gucci.svg';
import logoHelli from '../../assets/logo/brandsLogo/helly.svg';
import logoLacoste from '../../assets/logo/brandsLogo/lacoste.svg';
import logoKors from '../../assets/logo/brandsLogo/michael.svg';
import logoMoschino from '../../assets/logo/brandsLogo/moschino.svg';
import logoNike from '../../assets/logo/brandsLogo/nike.svg';
import logoPaul from '../../assets/logo/brandsLogo/paul.svg';
import logoCavalli from '../../assets/logo/brandsLogo/roberto.svg';
import logoTimberland from '../../assets/logo/brandsLogo/timberland.svg';
import logoTommy from '../../assets/logo/brandsLogo/tommy.svg';
import logoVercace from '../../assets/logo/brandsLogo/versace.svg';
import logoYves from '../../assets/logo/brandsLogo/yves.svg';
import { NavLink } from 'react-router-dom';

export default function LogoGrid() {
  // Settings for the slider

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 4,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
  };
  // These are the images used in the slide
  const cards = [
    { src: logoArmani, alt: 'Giorgio Armani' },
    { src: logoBoss, alt: 'Boss' },
    { src: logoCalvin, alt: 'Benetton' },
    { src: logoBenetton, alt: 'Calvin' },
    { src: logoCavalli, alt: 'Cavalli' },
    { src: logoChanel, alt: 'Chanel' },
    { src: logoConverse, alt: 'Converse' },
    { src: logoDiesel, alt: 'Diesel' },
    { src: logoDior, alt: 'Dior' },
    { src: logoDolce, alt: 'Dolce' },
    { src: logoFila, alt: 'Fila' },
    { src: logoGucci, alt: 'Gucci' },
    { src: logoHelli, alt: 'Helli' },
    { src: logoKors, alt: 'Kors' },
    { src: logoLacoste, alt: 'lacoste' },
    { src: logoMoschino, alt: 'Moschino' },
    { src: logoNike, alt: 'Nike' },
    { src: logoPaul, alt: 'paul' },
    { src: logoTimberland, alt: 'Timberland' },
    { src: logoTommy, alt: 'Tommy' },
    { src: logoVercace, alt: 'vercace' },
    { src: logoYves, alt: 'Yves' },
  ];

  return (
    <Box
      position={'relative'}
      height={'200px'}
      width={'full'}
      overflow={'hidden'}
      paddingTop={'3%'}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Slider */}
      <Slider {...settings}>
        {cards.map(card => (
          <Img
            key={card.alt}
            maxHeight={'80px'}
            maxWidth={'200px'}
            src={card.src}
            alt={card.alt}
          />
        ))}
      </Slider>
    </Box>
  );
}
