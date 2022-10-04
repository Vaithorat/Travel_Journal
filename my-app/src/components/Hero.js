import React from "react";
export default function hero(props) {
  return (
    <>
      <main className="hero">
        <img className="loc--pic" src={props.item.locpic} alt="" />
        <div className="container">
          <div className="title-pointer">
            <img
              className="loc--pointer"
              src="./icons/Fill 219.png"
              alt="location"
            />
            <span className="location">{props.item.location}</span>
              <a className="link" href={props.link}>View on Google Maps</a>
          </div>
          <h1 className="title">{props.item.title}</h1>
          <h4 className="date">{props.item.date}</h4>
          <p className="description">{props.item.description}</p>
        </div>
      </main>
      <hr className="break" color="#f5f5f5" />
    </>
  );
}
