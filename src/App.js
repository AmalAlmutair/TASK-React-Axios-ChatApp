import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import ChatRoomsList from "./components/ChatRoomsList";
import { Route, Routes } from "react-router-dom";
// import axios from "axios";
// import CreateRoomModal from "./components/CreateRoomModal";
import roomsStore from "./RoomsStore";

const App = () => {
  // const [rooms, setRooms] = useState([]);

  // const fetchRooms = async () => {
  //   try {
  //     const roomsList = await axios.get(
  //       "https://coded-task-axios-be.herokuapp.com/rooms"
  //     );
  //     setRooms = roomsList;
  //     // console.log(rooms);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const createRoom = async ({ room }) => {
  //   // to do : call BE to create a room
  //   try {
  //     const newRoom = await axios.create(
  //       "https://coded-task-axios-be.herokuapp.com/rooms"
  //     );
  //     setRooms = rooms.push(newRoom);
  //     // <ChatRoomsList rooms={rooms} />;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const deleteRoom = async (id) => {
  //   // to do : call BE to delete a room
  //   try {
  //     await axios.delete(
  //       `https://coded-task-axios-be.herokuapp.com/rooms/${id}`
  //     );
  //     rooms = rooms.filter((room) => room.id != id);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   roomsStore.fetchRooms();
  // });

  return (
    <div className="__main">
      <div className="main__chatbody">
        <center>
          <Routes>
            <Route
              path="/room/:roomSlug"
              element={<ChatRoom rooms={roomsStore.rooms} />}
            />

            <Route
              exact
              path="/"
              element={
                <ChatRoomsList
                  createRoom={roomsStore.createRoom()}
                  deleteRoom={roomsStore.deleteRoom()}
                />
              }
            />
          </Routes>
        </center>
      </div>
    </div>
  );
};

export default App;
