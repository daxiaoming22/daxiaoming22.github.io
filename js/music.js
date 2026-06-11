(function(){
  var e=document.createElement("link");e.rel="stylesheet",e.href="https://cdn.jsdelivr.net/npm/aplayer@1/dist/APlayer.min.css",document.head.appendChild(e);
  var s=document.createElement("script");s.src="https://cdn.jsdelivr.net/npm/aplayer@1/dist/APlayer.min.js",s.onload=function(){
    var ap=new APlayer({container:document.getElementById("aplayer"),fixed:true,mini:true,autoplay:false,theme:"#49b1f5",loop:"all",order:"random",preload:"auto",volume:.5,
      audio:[{name:"晴天",artist:"周杰伦",url:"https://music.163.com/song/media/outer/url?id=186016.mp3",cover:"https://p2.music.126.net/2VQoEXJTmfDcS25CzH_Abw==/109951167817751443.jpg"},
             {name:"夜曲",artist:"周杰伦",url:"https://music.163.com/song/media/outer/url?id=186001.mp3",cover:"https://p2.music.126.net/6cNXqILTHP1lZJIdOGMDRg==/109951167817755527.jpg"},
             {name:"七里香",artist:"周杰伦",url:"https://music.163.com/song/media/outer/url?id=186019.mp3",cover:"https://p2.music.126.net/ZCHEFUQ3GKe3vJs1DhmWfQ==/109951167817750625.jpg"}]})},
  document.body.appendChild(s);
  var d=document.createElement("div");d.id="aplayer",document.body.appendChild(d);
})();
