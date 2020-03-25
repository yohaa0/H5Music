window.onload = function () {
    TagCanvas.initial = [0.2, -0.4];
    TagCanvas.centreImage = 'logo.png'; //中间图片
    TagCanvas.clickToFront = '500'; //如果设置为数字，选中的标记将在激活前的数毫秒内移动到前面。
    TagCanvas.textFont = 'Impact,"Arial Black",sans-serif';
    TagCanvas.textColour = '#00f';
    TagCanvas.textHeight = 25;
    TagCanvas.weightSizeMax = 45;
    TagCanvas.weightSizeMin = 15;
    TagCanvas.outlineColour = '#f0f';
    TagCanvas.outlineThickness = 3;
    TagCanvas.outlineOffset = 0;
    TagCanvas.outlineMethod = 'outline';
    TagCanvas.outlineRadius = '5';
    TagCanvas.maxSpeed = 0.06;
    TagCanvas.minBrightness = 0.1;
    TagCanvas.depth = 0.95; //透视度
    TagCanvas.pulsateTo = 0.2;
    TagCanvas.pulsateTime = 0.75;
    TagCanvas.decel = 0.9;
    TagCanvas.reverse = false;
    TagCanvas.hideTags = false;
    TagCanvas.shadow = '#ccf';
    TagCanvas.shadowBlur = 3;
    TagCanvas.wheelZoom = false;
    TagCanvas.weightMode = 'both';
    TagCanvas.fadeIn = 800;
    try {
        TagCanvas.Start('myCanvas', 'tags', {
            textFont: null,
            textColour: null,
            weight: true,
            outlineColour: '#fcc', //文字轮廓颜色
            reverse: false,
            depth: 0.8,
            maxSpeed: 0.05
        });
    } catch (e) {
        // something went wrong, hide the canvas container
        document.getElementById('myCanvasContainer').style.display = 'none';
    }
	myplay()//调用music.js中方法
};
function opennew(){
//return newlist;
}
function addLink(){
    
    for (var i=0;i<arr.length;i++)
{
var addlk=document.createElement('li');
newlist =arr[i];
addlk.innerHTML=newlist;
document.getElementById('mzdata').appendChild(addlk);
}
    myplay()
}