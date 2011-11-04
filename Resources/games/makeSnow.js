var win = Ti.UI.currentWindow;
  
  	snow = function( options )
	{
		var topView = Ti.UI.createView({ backgroundColor:'#043A46', top:0, bottom:0 });
		
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
				density:2,
				restitution:0.2
			});
		}//end generateNewBox
		
		//setInterval(generateNewBox,300);
		
		Ti.Accelerometer.addEventListener("update",function(e)
		{
			world.setGravity(e.x * 9.81, e.y * 9.81);
		});//end addEventListener
		
		world.addEventListener("collision",function(e)
		{
			Ti.API.info("collision between "+e.a+" -> "+e.b+" => "+e.phase);	
			
		});//end addEventListener
		
		topView.addEventListener("click",function(e)
		{
			//var color = generateRandomColor();
			//generateNewBox()
			var size = Math.random() * 50;
			if(size<15){
				size=(size*2);
			}
			var box = Ti.UI.createView({
				center:{x:e.x,y:e.y},
				width:size,
				height:size,
				backgroundImage:'../images/snowflake.png'
			});		
			world.addBody(box,{
				density:4,
				restitution:0.3
			});
// 			
		});//end addEventListener
		
		world.start();
		
		return topView;
	}//end factoryView
	
win.addEventListener('open', function(){
	win.add(snow());
});

