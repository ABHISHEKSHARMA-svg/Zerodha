import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-6 p-5">
          <img src={imageURL}  style={{maxWidth:"100%"}}/>
        </div>
        <div className="col-6 p-5 mt-5" >
          <h1>{productName}</h1>
          <p className="text-muted" style={{fontSize:"1rem" ,fontWeight:"400"}}>{productDescription}</p>

          <div >
            <a href={tryDemo}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
            <a href={learnMore} style={{marginLeft:"50px"}} >Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
          </div>

          <div className="mt-3">
            <a href={googlePlay}>
              {" "}
              <img src="media/images/googlePlayBadge.svg" alt="" />{" "}
            </a>
            <a href={appStore}>
              {" "}
              <img src="media/images/appstoreBadge.svg" style={{marginLeft:"50px"}} alt="" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
