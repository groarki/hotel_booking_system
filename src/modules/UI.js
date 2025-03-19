function UI(hotel) {
  this.hotel = hotel;
}

UI.prototype.renderRooms = function () {
  const hotelCont = document.querySelector(".roomContainer");

  const rendered = this.hotel.rooms
    .map((room) => {
      return `<div class="room ${room.isAvailable ? "" : "booked"}">
        <h3>Room ${room.number} ${room.type}</h3>
        <p>Status: ${room.isAvailable ? "Available" : "Booked"}</p>
        <button type="button" onclick="bookRoom(${room.number})" ${
        room.isAvailable ? "" : "disabled"
      }>Book</button>
        <button type="button" onclick="cancelBooking(${room.number})" ${
        room.isAvailable ? "disabled" : ""
      }>Cancel</button>
      </div>`;
    })
    .join("");

  hotelCont.innerHTML = rendered;
};

module.exports = UI;
