import "./App.css";
import Card from "./Card";
import Sdata from "./Sdata";

const Services = () => {
  return (
    <>
      <div className=" my-5">
        <h1 className=" text-center"> My Skills </h1>
      </div>
      <div className="abs container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className=" row gy-5">
              {Sdata.map(({ imgsrc, title, description }, ind) => {
                return <>
                  <Card 
                    key={ind}
                    source={imgsrc}
                    heading={title}
                    des={description}
                  />
                </>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
