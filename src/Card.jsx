import "./App.css";


const Card = (props) => {
  return (
    <>
      <div className=" col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.source} height={"300 px"} width={"240 px"} class="card-img-top" alt="mythis" />
          <div class="card-body">
            <h5 class="card-title font-weight-bold">{props.heading}</h5>
            <p class="card-text">
              {props.des}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
