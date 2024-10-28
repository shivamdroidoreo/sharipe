import React from "react";

class Cards extends React.Component {
  render() {
    const { image, title, text } = this.props; // Destructure props
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default Cards;
