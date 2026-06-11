(function(){
  var s=document.createElement("script");
  s.src="https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js";
  s.onload=function(){
    var el=document.createElement("meting-js");
    el.setAttribute("server","netease");
    el.setAttribute("type","playlist");
    el.setAttribute("id","8543070918");
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
  document.body.appendChild(s);
  var d=document.createElement("div");d.id="aplayer",document.body.appendChild(d);
})();
