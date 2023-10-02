import React from "react";
import { users } from "./Data";
import { useParams, useNavigate } from "react-router-dom";
import "../Style.css/socialCard.css";

export default function ProfileDetails() {
    const { id } = useParams();
    const navigate =useNavigate()
    const { name, email, avatar, about,} = users.find(
      (u) => u.id === parseInt(id)
    );

  return (
    <div className="details">
      <button onClick={()=> navigate('/')}>Back to List</button>
      <h3>{name}</h3>
      <img src={avatar} alt={name} />
      <p>{email}</p>
      <span>{about}</span>
    </div>
  );
}