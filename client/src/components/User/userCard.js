import React from "react";
import UserItem from "./userItem";

export const UserCard = (props) => {
    return (
        <div className={props.user.winner ? "winner-user-card" : "user-card"}>
            <UserItem user={props} />
        </div>
    )
}
export default UserCard;