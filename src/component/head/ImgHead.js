import Icons from "./Icons";
import Navebar from "./Navebar";
import Toggle from "./Toggle";

const ImgHead = () => {
  
  return (
   <div
  className="position-relative"
  style={{
    backgroundImage: `url("http://jospa-sa.com/wp-content/uploads/2024/02/composition-with-spa-soft-towels-candles-black-hot-stones-lotus-flowers-wooden-white-floor-close-view-spa-concept-romantic-cozy.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '270px',
  padding:'5px'
  }}
>

 
 
  <Icons/>

  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{ backgroundColor: 'rgba(134, 61,10, 0.5)' }} // black tint with 50% opacity
  ></div>

  <div className="position-relative text-white text-center ">
      <Toggle/>
     <Navebar/>
    
    <h1> Cotton Msaage</h1>
  </div>
   
</div>

  );
};

export default ImgHead;
