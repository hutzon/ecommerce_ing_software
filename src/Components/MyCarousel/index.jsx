import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Configuración para el carrusel, puedes ajustar estos valores según necesites
const settings = {
  dots: true, // Muestra puntos de navegación en la parte inferior del carrusel
  infinite: true, // Infinito loop
  speed: 500, // Velocidad de transición
  slidesToShow: 1, // Muestra un slide a la vez
  slidesToScroll: 1, // Desplaza un slide a la vez
  adaptiveHeight: true,
};

const MyCarousel = () => {
  return (
    <Slider {...settings} className="h-64 min-h-[300px]">
      <h1>Funcionando... </h1>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
      {/* Continúa con más divs e h1s según sea necesario */}
    </Slider>
  );
};

export default MyCarousel;
