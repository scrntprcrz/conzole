const socketio = require("socket.io");
const events = [
  "log",
  "groupCollapsed",
  "info",
  "time",
  "timeEnd",
  "trace",
  "warn",
  "error",
  "group",
  "groupEnd",
  "table",
  "assert",
  "clear",
  "count",
  "countReset",
  "debug",
  "dir",
  "dirxml",
];
module.exports = (app, port) => {
  var server = app.listen(port, "0.0.0.0", function () {
    console.log(
      "App server up and running on %s and port %s",
      server.address().address,
      server.address().port
    );
  });

  var io = socketio(server);

  io.on("connection", function (socket) {
    events.forEach((v) => {
      socket.on(v, function (data) {
        socket.broadcast.emit(v, data);
      });
    });
    socket.on("eval", function (data) {
      socket.broadcast.emit("eval", data);
    });
  });

  return events.reduce((a, v) => {
    a[v] = (...args) => {
      io.emit(v, { args });
    };
    return a;
  }, {});
};
