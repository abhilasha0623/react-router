import React from "react";
import { users } from "./Data";
import "../Style.css/socialCard.css"
import List from "./List";


const SocialProfile = () => {
    return (<>
        <section className="social-container">
            <h1 style ={{textAlign : "center"}}>Social Book</h1>
            <div className="social-card">
                {users && users.map((user, index) => <List user={user} key={index} />)}
            </div>

        </section>

    </>)
}

export default SocialProfile;