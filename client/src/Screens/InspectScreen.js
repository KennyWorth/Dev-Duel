import React, { useState } from "react";
import UserCard from "../components/User/userCard";
import { inspectUser } from "../services/userService";

let userName = ""

export const InspectScreen = (props) => {
    const [loading, setLoading] = useState(false);
    const [searching, setSearching] = useState(false);
    const [user, setUser] = useState({});
    const fetchData = async () => {
        try {
            const success = await inspectUser(userName);
            if (success) {
                setUser(success);
            }
        }
        catch (error) {
            setUser({ ...user, error: error.message });
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSearching(true);
        fetchData();
        setLoading(false);
        e.target.reset()
    }
    const handleChange = (e) => {
        userName = e.target.value;
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div className="search-container">
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <input style={{ width: "20em" }} type="text" onChange={handleChange} placeholder="Search a Github user" />
                    <br />
                    <button style={{ marginTop: "7vh", height: "7vh", width: "20em" }} type="submit">{!loading ? "Inspect" : "Loading..."}</button>
                </form>
            </div>
            <div style={{ width: "100vw" }}>
                {!searching ? <div></div> : <UserCard user={user} />}
            </div>
        </div>
    )
}
export default InspectScreen;