import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            
Founded on a commitment to revolutionize healthcare, Zeecare Medical Initiatives stands at the forefront of innovation in the medical field. By merging cutting-edge technology with compassionate care, Zeecare strives to enhance medical outcomes and improve patient well-being on a global scale. With a steadfast dedication to excellence and a focus on personalized healthcare solutions, Zeecare continues to set new standards in the industry, ensuring accessible and effective healthcare for all.
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;