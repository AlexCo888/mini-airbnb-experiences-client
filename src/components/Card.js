import React from "react";

export default function Card({
  title,
  price,
  coverImg,
  stats,
  location,
  openSpots,
}) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      <img
        src={`../images/${coverImg}`}
        className="card--image"
        alt="description"
      />
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" alt="star" />
        <span>{stats.rating}</span>
        <span className="gray">(6) • </span>
        <span className="gray">{location}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}
