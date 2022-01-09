import React from "react";

function Cards({ data }) {
  return (
    <div>
      <div className="row">
        {data.map((data) => (
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src={data.recipe.image}
                alt="Card image cap"
              />

              <div class="card-body">
                <center>
                  <h5 class="card-title">{data.recipe.label}</h5>
                  <p class="card-text">
                    Total Amount of Calories :{Math.round(data.recipe.calories)}
                  </p>
                </center>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
