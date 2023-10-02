import React from "react";
import "../Style.css/socialCard.css";
import {Link} from "react-router-dom";

const List = ({user}) =>{
return(<>
<div className="indiv-card">
    <h4>{user?.name}</h4>
    <p>{user?.email}</p>
    <Link to ={`/list/${user?.id}`} className="btn-container">View-Details</Link>
</div>
</>)
}

export default List