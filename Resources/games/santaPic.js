var win = Ti.UI.currentWindow;

win.orientationModes = [
	Titanium.UI.LANDSCAPE_RIGHT
]; 

var santa = Titanium.UI.createImageView({
	image:'../images/santaBig.png',
	canScale:true,
	height:100,
	width:100,
	hiRes:true,
	left:50,
	bottom:100
});

var button = Titanium.UI.createButton({
	color:'#fff',
	bottom:10,
	width:301,
	height:57,
	font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Take Picture'
});

var messageView = Titanium.UI.createView({
	height:30,
	width:250,
	visible:false
});

var indView = Titanium.UI.createView({
	height:30,
	width:250,
	backgroundColor:'#000',
	borderRadius:10,
	opacity:0.7
});
messageView.add(indView);

// message
var message = Titanium.UI.createLabel({
	text:'Picture Taken',
	color:'#fff',
	font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	width:'auto',
	height:'auto'
});
messageView.add(message);

var overlay = Titanium.UI.createView();
overlay.add(santa);
overlay.add(button);
overlay.add(messageView);

button.addEventListener('click',function()
{
	//scanner.borderColor = 'blue';
	Ti.Media.takePicture();
	messageView.animate({visible:true});
	setTimeout(function()
	{
		//scanner.borderColor = 'red';
		messageView.animate({visible:false});
	},500);
});


Titanium.Media.showCamera({

	success:function(event)
	{
		Ti.API.debug("picture was taken");
		
		// place our picture into our window
		var imageView = Ti.UI.createImageView({
			image:event.media,
			width:win.width,
			height:win.height
		});
		win.add(imageView);
		win.add(santa);
		
		// programatically hide the camera
		Ti.Media.hideCamera();
	},
	cancel:function()
	{
	},
	error:function(error)
	{
		var a = Titanium.UI.createAlertDialog({title:'Camera'});
		if (error.code == Titanium.Media.NO_CAMERA)
		{
			a.setMessage('Please run this test on device');
		}
		else
		{
			a.setMessage('Unexpected error: ' + error.code);
		}
		a.show();
	},
	overlay:overlay,
	showControls:false,	// don't show system controls
	mediaTypes:Ti.Media.MEDIA_TYPE_PHOTO,
	autohide:true // tell the system not to auto-hide and we'll do it ourself
});

santa.addEventListener('touchmove', function(e){
	
	santa.left = e.globalPoint.y;
		santa.bottom = e.globalPoint.x;
})