function Room(number, type) {
  this.number = number;
  this.type = type;
  this.isAvailable = true;
}

Room.prototype.book = function () {
  this.isAvailable = false;
  return `Room ${this.number} is now booked`;
};

Room.prototype.cancelBooking = function () {
  this.isAvailable = true;
  return `Room ${this.number} is now awailable`;
};

module.exports = Room;
