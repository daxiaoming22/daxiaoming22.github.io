(function(){
  var l=document.createElement("link");
  l.rel="stylesheet",l.href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css",document.head.appendChild(l);

  var a=document.createElement("script");
  a.src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js";
  a.onload=function(){
    var m=document.createElement("script");
    m.src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js";
    m.onload=function(){
      var el=document.createElement("meting-js");
      el.setAttribute("server","netease");
      el.setAttribute("type","playlist");
      el.setAttribute("id","17927434884");
      el.setAttribute("fixed","true");
      el.setAttribute("mini","true");
      el.setAttribute("autoplay","false");
      el.setAttribute("theme","#49b1f5");
      el.setAttribute("loop","all");
      el.setAttribute("order","random");
      el.setAttribute("preload","auto");
      el.setAttribute("volume","0.5");
      document.getElementById("aplayer").appendChild(el);
    };
    document.body.appendChild(m);
  };
  document.body.appendChild(a);

  var d=document.createElement("div");d.id="aplayer",document.body.appendChild(d);
})();
