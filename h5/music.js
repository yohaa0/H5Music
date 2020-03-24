var musicNode = document.getElementsByClassName('music')[0];
var mlist = document.getElementsByClassName('mlist')[0];
var lis = document.getElementsByTagName('li');
var len = lis.length;

musicNode.src = musicsrc[0];
for (var i = 0; i < len; i++) { //单击改变playmusic
    (function (i) {
        lis[i].onclick = function () {
            musicNode.src = musicsrc[i];
            musicNode.load();
            musicNode.play();
            for (var j = 0; j < len; j++) {
                lis[j].className = '';
            }
            this.className = 'play';
        }
    })(i);
}
musicNode.onended = function () { //音乐播放下一曲
    var ended = getPlay();
    if (ended == 2) { //若为最后一曲则放第一曲
        musicNode.src = musicsrc[0];
        lis[0].className = 'play'
            lis[ended].className = '';
        musicNode.load();
        musicNode.play();
    } else {
        musicNode.src = musicsrc[ended + 1];
        lis[ended + 1].className = 'play';
        lis[ended].className = '';
        musicNode.load();
        musicNode.play();
    }

}
function getPlay() { //获取正在播放music的li
    for (var i = 0; i < len; i++) {
        if (lis[i].getAttribute('class') == 'play') {
            return i
        }
    }
}
