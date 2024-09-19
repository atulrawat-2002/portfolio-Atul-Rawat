import { NavLink } from "react-router-dom";
import "./App.css";

const Comman = (props) => {
  return (
    <>
      <section id="header" className=" d-flex align-items-center">
        <div className="abs container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className=" row">
                <div className=" col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name" id="logo">  AtulRawat</strong>
                  </h1>
                  <h2 className=" my-3 "  id="tagline" >
                    {props.tag}
                  </h2>
                  <div className=" mt-3">
                    <NavLink to={props.visit} className="btn-get-started ">
                     {props.btntext}
                    </NavLink>
                  </div>
                </div>
              
              <div className=" col-lg-6 order-1 header-img" >
                <img src={props.imgsrc}  className=" img-thumbnail animated " id="animated_img" alt="this" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comman;
