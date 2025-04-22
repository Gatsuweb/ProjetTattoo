import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel, onChange, onClickItem, onClickThumb } from 'react-responsive-carousel';
import Flash1 from "../assets/flash/f1.jpg";
import Flash2 from "../assets/flash/f2.jpg";
import Flash3 from "../assets/flash/f3.jpg";
import Flash4 from "../assets/flash/f4.jpg";
import Flash5 from "../assets/flash/f5.jpg";
import Flash6 from "../assets/flash/f6.jpg";
import Flash7 from "../assets/flash/f7.jpg";
import Flash20 from "../assets/flash/f20.jpg";
import Flash21 from "../assets/flash/f21.jpg";
import Flash15 from "../assets/flash/flash9.jpg";  
import Flash16 from "../assets/flash/flash10.jpg";
import Flash1000 from "../assets/flash/flash4.jpg";
import FlashBis from "../assets/flash/flashbis.jpg";
import Flash101 from "../assets/flash/flash101.jpg";
import Flash103 from "../assets/flash/flash103.jpg";
// import Flash104 from "../assets/flash/flash104.jpg";
import Flash105 from "../assets/flash/flash105.jpg";
import Flash106 from "../assets/flash/flash106.jpg";
import Flash107 from "../assets/flash/flash107.jpg";
import Flash108 from "../assets/flash/flash108.jpg";
import Flash109 from "../assets/flash/flashx.jpg";
import Flash110 from "../assets/flash/flashxx.jpg";
import Flash111 from "../assets/flash/flashxxx.jpg";
import Flash112 from "../assets/flash/flashxxxx.jpg";
import Flash113 from "../assets/flash/flashxxxxx.jpg";
import Flash114 from "../assets/flash/raie.jpg";

import "../styles/CarousselFlash.css"

export const CarousselFlash = () => {
  return (
    <div className="carousselContainer">
    <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb} thumbWidth={50}  className="carousselContent">
    <div>
        <img src={Flash109} />
    </div>
    <div>
        <img src={Flash114} />
    </div>
    <div>
        <img src={Flash113} />
    </div>
    <div>
        <img src={Flash110} />
    </div>
    <div>
        <img src={Flash111} />
    </div>
    <div>
        <img src={Flash112} />
    </div>
    <div>
        <img src={Flash1} />
    </div>
    <div>
        <img  src={Flash2} />
      
    </div>
    <div>
        <img  src={Flash3} />
     
    </div>
    <div>
        <img  src={Flash4} />
    </div>
    <div>
        <img  src={Flash5} />
    </div>
    <div>
        <img  src={Flash6} />
    </div>
    <div>
        <img  src={Flash20} />
    </div>
    <div>
        <img  src={Flash21} />
    </div>
    <div>
        <img  src={Flash15} />
    </div>
    <div>
        <img  src={Flash16} />
    </div>
    <div>
        <img  src={Flash7} />
    </div>
    <div>
        
        <img  src={Flash1000} />
    </div>
    <div>
        <img  src={FlashBis} />
    </div>
    <div>
        <img  src={Flash101} />
    </div>
    <div>
        <img  src={Flash103} />
    </div>
    {/* <div>
        <img  src={Flash104} />
    </div> */}
    <div>
        <img  src={Flash105} />
    </div>
    <div>
        <img  src={Flash106} />
    </div>
    <div>
        <img  src={Flash107} />
    </div>
    <div>
        <img  src={Flash108} />
    </div>
 
</Carousel>
    </div>
  )
}
