import React from "react";

// import context
import { withRoomConsumer } from "../../Context/Context";

// import components
import Loadings from "../Loading/Loading";
import RoomFilter from "./RoomsFilter";
import RoomList from "./RoomsList";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loadings />;
  }

  return (
    <div className="rooms-container">
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
      <FeaturedRooms />
      </div>
  );
}

export default withRoomConsumer(RoomContainer);
