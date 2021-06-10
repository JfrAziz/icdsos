(function (w, d, s, u) {
  w.RocketChat = function (c) {
    w.RocketChat._.push(c);
  };
  w.RocketChat._ = [];
  w.RocketChat.url = u;
  var h = d.getElementsByTagName(s)[0],
    j = d.createElement(s);
  j.async = true;
  j.src =
    "https://halo.stis.ac.id/livechat/rocketchat-livechat.min.js?_=201903270000";
  h.parentNode.insertBefore(j, h);
})(window, document, "script", "https://halo.stis.ac.id/livechat");

RocketChat(function () {
  this.initialize({
    theme: {
      color: "#FFFFFF", // widget title background color
      fontColor: "#04436A", // widget title font color
      iconColor: "#1d74f5", // widget icon color
      title: "Welcome to ICDSOS Livechat", // default widget title when the status of service is online
      offlineTitle: "ICDSOS Livechat is currently offline", // default widget title when the status of service is online
    },
    language: "en",
  });
});