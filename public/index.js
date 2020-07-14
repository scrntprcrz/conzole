function Conzole(uri) {
  var socket = io(uri);
  socket.on("eval", function (data) {
    eval(data.args);
  });

  this.eval = (args) => {
    socket.emit("eval", { args });
  };

  [
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
  ].forEach((v) => {
    socket.on(v, function (data) {
      console[v].apply(null, data.args);
    });

    this[v] = (...args) => {
      socket.emit(v, { args });
    };
  });
}
