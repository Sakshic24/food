import React from "react";

const Card = () => {
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem" }}>
        <img
          data-chromatic="ignore"
          src="https://media.istockphoto.com/id/1041137232/photo/100-gluten-free-low-carb-hamburger-and-bun.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=fuhvJBYQdA11bRSbyIa32Zb3FShRaLlvhBaa0jYN2RQ="
          class="Dx12RubSbJ7ka4288okt"
          alt="recently viewed asset"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is important message</p>
          <div className="w-100">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
