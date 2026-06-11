document.addEventListener("DOMContentLoaded", function() {
  var meting = new Meting({
    server: "netease",
    type: "playlist",
    id: "8543070918",
    fixed: true,
    mini: true,
    autoplay: false,
    theme: "#49b1f5",
    loop: "all",
    order: "random",
    preload: "auto",
    volume: 0.5
  });
  meting.init();
});
