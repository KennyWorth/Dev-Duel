import React from "react";
import styled from "styled-components";

const StyledHome = styled("div")`
    align-items: center;
    justify-content: center;
    text-align: center;
    color: blueviolet;
`
const HomeScreen = () => {
    return (
        <StyledHome>
            <div style={{ justifyContent: "center", alignItems: "center", paddingTop: "10%" }}>
                <h1>Welcome to Dev-Duel!</h1>
                <h3>Where GitHub members go head-to-head to see who's the best.</h3>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", paddingTop: "10%" }}>
                    <div style={{ paddingRight: "20vw" }}>
                        <a href="/inspect"><button className="submit">Inspect</button></a>
                        <p>Look up a fellow dev's Github info</p>
                    </div>
                    <div>
                        <a href="/duel"><button className="submit">Duel</button></a>
                        <p>Pick two devs to go head to head.</p>
                    </div>
                    <br />

                </div>
            </div>
        </StyledHome>
    );
}

export default HomeScreen;
