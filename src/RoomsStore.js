import { makeAutoObservable } from "mobx";
import axios from "axios";

class RoomsStore {
  rooms = [];
  constructor() {
    makeAutoObservable(this);
  }

  fetchRooms = async () => {
    try {
      const roomsList = await axios.get(
        "https://coded-task-axios-be.herokuapp.com/rooms"
      );
      this.rooms = roomsList.data;
      // console.log(rooms);
    } catch (error) {
      console.log(error);
    }
  };

  deleteRoom = async (id) => {
    // to do : call BE to delete a room
    try {
      await axios.delete(
        `https://coded-task-axios-be.herokuapp.com/rooms/${id}`
      );
      this.rooms = this.rooms.filter((room) => room._id != id);
    } catch (error) {
      console.log(error);
    }
  };
  createRoom = async (room) => {
    // to do : call BE to create a room
    try {
      // const { id } = req.params;
      const newRoom = await axios.post(
        "https://coded-task-axios-be.herokuapp.com/rooms",
        room
      );
      this.rooms = [...this.rooms, newRoom.data];
      // <ChatRoomsList rooms={rooms} />;
    } catch (error) {
      console.log(error);
    }
  };
}
const roomsStore = new RoomsStore();
roomsStore.fetchRooms();

export default roomsStore;
