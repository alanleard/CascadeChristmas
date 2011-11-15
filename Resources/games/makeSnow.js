var win = Ti.UI.currentWindow;
  var view = Ti.UI.createView();
  win.add(view);
  	snow = function( options )
	{
		
		
		var topView = Ti.UI.createView({ backgroundColor:'transparent', top:0, bottom:-1000 });
		
		var box2d = require("ti.box2d");
		var	world = box2d.createWorld(topView);
		
		function generateRandomColor()
		{
			return '#' + (function co(lor){   return (lor +=  [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])   && (lor.length == 6) ?  lor : co(lor); })('');
		}//end generateRandomColor
		
		function generateNewBox() 
		{
			var left = Math.random() * Ti.Platform.displayCaps.platformWidth - 50;
			var top = Math.random() * 10;	
			//var color = generateRandomColor();
			var color = '#fff';
			var size = Math.random() * 50;
			if(size<15){
				size=(size*2);
			}
			var box = Ti.UI.createView({
				center:{x:left,y:top},
				width:size,
				height:size,
				backgroundImage:'../images/snowflake.png'
			});		
			world.addBody(box,{
				density:4,
				restitution:0.2
				
			});
		}//end generateNewBox
		//world.setGravity(.1,.1);
		//setInterval(generateNewBox,300);
		
		Ti.Accelerometer.addEventListener("update",function(e)
		{
		if(Ti.Platform.displayCaps.platformWidth<Ti.Platform.displayCaps.platformHeight){
			world.setGravity(e.x * 9.81, e.y * 9.81);
		}else{
			world.setGravity(-(e.y * 9.81), (e.x * 9.81));
		}
		});//end addEventListener
		
		world.addEventListener("collision",function(e)
		{
			//Ti.API.info("collision between "+e.a+" -> "+e.b+" => "+e.phase);	
			//world.destroyBody(e.a)
		});//end addEventListener
		
		topView.addEventListener("click",function(e)
		{
			//var color = generateRandomColor();
			//generateNewBox()
			var size = Math.random() * 40;
			if(size<15){
				size=(size*2)+10;
			}
			var box = Ti.UI.createView({
				center:{x:e.x,y:e.y},
				width:size,
				height:size,
				backgroundImage:'../images/snowflake.png'
			});		
			var body = world.addBody(box,{
				density:0.5,
				restitution:0.1
			});
		
// 			
		});//end addEventListener
		topView.addEventListener("touchmove",function(e)
		{
			
			//var color = generateRandomColor();
			//generateNewBox()
			var size = Math.random() * 40;
			if(size<15){
				size=(size*2)+10;
			}
			var box = Ti.UI.createView({
				center:{x:e.x,y:e.y},
				width:size,
				height:size,
				backgroundImage:'../images/snowflake.png'
			});		
			world.addBody(box,{
				density:0.5,
				restitution:0.1
			});
			
			
// 			
		});//end addEventListener
		
		world.start();
		
		return topView;
	}//end factoryView
	
var button = Ti.UI.createButton({title:'Snap Shot'});
win.rightNavButton =button;
var actInd = Ti.UI.createActivityIndicator({
	
	});
	var hideView = Ti.UI.createView({
	top:0,
	bottom:0,
	left:0,
	right:0,
	opacity:0.8,
	backgroundColor:'#000',
	visible:false
});
win.add(hideView);
	if(Ti.Platform.osname !='android'){
		hideView.add(actInd);
		
	} 
	
	actInd.show();
button.addEventListener('click', function(){
	 var saveimage = win.toImage();
	hideView.show();

      Titanium.Media.saveToPhotoGallery(saveimage,{
        success: function(e) {
        	hideView.hide();
          var alert1 = Titanium.UI.createAlertDialog({
            title:'Snow Scene Saved',
            message:'Your current snow scene has been saved to your Photo Gallery.'
          })
          alert1.show();
          }   
          }); 
});

win.addEventListener('open', function(){
	var alert1 = Ti.UI.createAlertDialog({
		title:'Make it Snow!', message:'Pick a picture, then make it snow by tapping the screen!'
	});
	alert1.show();
	

  Titanium.Media.openPhotoGallery(
  { 
    success:function(event)
    {hideView.show();
      var image = event.media;
      if(image.width>image.height){
      	Titanium.UI.orientation = Titanium.UI.LANDSCAPE_RIGHT;
      	win.orientationModes = [Titanium.UI.LANDSCAPE_RIGHT]; 

      } else {
      	Titanium.UI.orientation = Titanium.UI.PORTRAIT;
      	win.orientationModes = [Titanium.UI.PORTRAIT]; 

      }
      // create new file name and remove old
      var filename = Titanium.Filesystem.applicationDataDirectory + "/" + new Date().getTime() + ".jpg";
      
      bgImage = Titanium.Filesystem.getFile(filename);
      bgImage.write(image);
            
      view.backgroundImage = bgImage.nativePath; 
      hideView.hide();
    },
    cancel:function()
    {
  		win.close();
    },
    error:function(error)
    {
    }
  });
	win.add(snow());


});



