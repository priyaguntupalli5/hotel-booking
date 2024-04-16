import React from "react";

// import react-router-dom
import { Link } from "react-router-dom";

// imports components
import Hero from "../Components/Hero/Hero";
import RoomContainer from "../Components/RoomsContainer/RoomsContainer";

function Room() {
  return (
    <>
      <Hero hero="roomsHero">
      </Hero>

      <RoomContainer />
    </>
  );
}

export default Room;
