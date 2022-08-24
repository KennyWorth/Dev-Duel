import React from "react";

export const User = (props) => {
    console.log(props)
    return (
        props.user.user.username !== undefined ?
            <div>
                <div className="card-container">
                    <div>
                        <h1>{props.user.user.winner ? "🌟🌟WINNER!🌟🌟" : ""}</h1>
                        <img className="profile-pic-container" src={props.user.user["avatar-url"]} alt="avatar" />
                    </div>
                    <div style={{ width: "100%", marginLeft: "10px" }}>
                        <h1>Username:  {props.user.user.username}</h1>
                        <h1>Name:  {props.user.user.name}</h1>
                        <h1>Location:  {props.user.user.location}</h1>
                        <h1 className={props.user.user.titlesWinner === true ? "winner-single" : ""}>Titles:  {props.user.user.titles !== undefined ? props.user.user.titles.join(", ") : props.user.user.titles}</h1>
                        <h1>Fav Language:  {props.user.user["favorite-language"]}</h1>
                        <h1 className={props.user.user.totalStarsWinner === true ? "winner-single" : ""}>Total Stars:  {props.user.user["total-stars"]}</h1>
                        <h1 className={props.user.user.highStarsWinner === true ? "winner-single" : ""}>Highest Star Count:  {props.user.user["highest-starred"]}</h1>
                        <h1 className={props.user.user.publicReposWinner === true ? "winner-single" : ""}>Public Repos:  {props.user.user["public-repos"]}</h1>
                        <h1 className={props.user.user.perfectReposWinner === true ? "winner-single" : ""}>Perfect Repos:  {props.user.user["perfect-repos"]}</h1>
                        <h1 className={props.user.user.followerWinner === true ? "winner-single" : ""}>Followers:  {props.user.user.followers}</h1>
                        <h1 className={props.user.user.followingWinner === true ? "winner-single" : ""}>Following  {props.user.user.following}</h1>
                    </div>
                </div>
            </div>
            : < h1 style={{ backgroundColor: "yellow" }} > Loading. Please wait...</h1>
    )
}
export default User;