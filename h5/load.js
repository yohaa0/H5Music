window.onload = function() {
		  TagCanvas.textFont = 'Impact,"Arial Black",sans-serif';
		  TagCanvas.textColour = '#00f';
		  TagCanvas.textHeight = 25;
		  TagCanvas.weightSizeMax=45;
		  TagCanvas.weightSizeMin=15;
		  TagCanvas.outlineColour = '#f60';
		  TagCanvas.outlineThickness = 5;
		  TagCanvas.outlineOffset = 1;
		  TagCanvas.outlineMethod = 'block';
		  TagCanvas.maxSpeed = 0.06;
		  TagCanvas.minBrightness = 0.1;
		  TagCanvas.depth = 0.95;
		  TagCanvas.pulsateTo = 0.2;
		  TagCanvas.pulsateTime = 0.75;
		  TagCanvas.decel = 0.9;
		  TagCanvas.reverse = false;
		  TagCanvas.hideTags = false;
		  TagCanvas.shadow = '#ccf';
		  TagCanvas.shadowBlur = 3;
		  TagCanvas.wheelZoom = false;
		  TagCanvas.fadeIn = 800;
        try {
          TagCanvas.Start('myCanvas','tags',{
            textFont: null,
			textColour: null,
			weight: true,
            outlineColour: '#fff',//文字轮廓颜色
            reverse: false,
            depth: 0.8,
            maxSpeed: 0.05
          });
        } catch(e) {
          // something went wrong, hide the canvas container
          document.getElementById('myCanvasContainer').style.display = 'none';
        }
      };