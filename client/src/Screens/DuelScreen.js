import React, { useState } from "react";
import UserCard from "../components/User/userCard";
import { duelUsers } from "../services/userService";

export const DuelScreen = (props) => {

    const [userName1, setUserName1] = useState("");
    const [userName2, setUserName2] = useState("");

    const [user1, setUser1] = useState({});
    const [user2, setUser2] = useState({});
    const [searched, setSearched] = useState(false);
    const fetchData = async () => {
        try {
            const success = await duelUsers(userName1, userName2);
            if (success) {
                setUser1(success[0]);
                setUser2(success[1]);
            }
        }
        catch (error) {
            setUser1({ ...user1, error: error.message });
            setUser2({ ...user2, error: error.message });
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearched(true)
        fetchData()
        setUserName1("")
        setUserName2("")
        e.target.reset();
    }

    const handleChange1 = (e) => {
        setUserName1(e.target.value)
    }
    const handleChange2 = (e) => {
        setUserName2(e.target.value)
    }

    return (
        <div>
            <div className="search-duel-container">
                <form onSubmit={handleSubmit} >
                    <input style={{ marginRight: "35vw" }} type="text" onChange={handleChange1} placeholder="Search Github user" />
                    <input type="text" onChange={handleChange2} placeholder="Search Github User" />
                    <br />
                    <button style={{ marginLeft: "35%", marginTop: "7vh", height: "7vh", width: "20vw" }} type="submit" >Duel!</button>
                </form>
            </div>
            <div className="duel-flex-container">
                {!searched ? <div></div> : <UserCard user={user1} />}
                {!searched ? <div></div> : <UserCard user={user2} />}
            </div>
        </div>
    )
}
export default DuelScreen;