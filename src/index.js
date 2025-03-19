const Hotel = require("./modules/Hotel");
const Room = require("./modules/room");
const UI = require("./modules/UI");

const hotel = new Hotel("Aliance Hotel");
const room1 = new Room(11, "single");
const room2 = new Room(12, "single");
const room3 = new Room(14, "single");
const room4 = new Room(15, "single");
const room5 = new Room(16, "single");
const room6 = new Room(17, "single");

hotel.addRoom(room1);
hotel.addRoom(room2);
hotel.addRoom(room3);
hotel.addRoom(room4);
hotel.addRoom(room5);
hotel.addRoom(room6);

const ui = new UI(hotel);
ui.renderRooms();

window.bookRoom = function (number) {
  const room = hotel.rooms.find((r) => r.number === number);
  if (room) {
    alert(room.book());
    ui.renderRooms();
  }
};
window.cancelBooking = function (number) {
  const room = hotel.rooms.find((r) => r.number === number);
  if (room) {
    alert(room.cancelBooking());
    ui.renderRooms();
  }
};
