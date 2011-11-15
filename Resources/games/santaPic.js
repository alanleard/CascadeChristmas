var win = Ti.UI.currentWindow;

var santa = Titanium.UI.createImageView({
	image:'../images/santahat.png',
	height:350,
	width:250,
	top:20
});

var box = Ti.UI.createView({
	borderRadius:2,
	borderColor:'red',
	height:190,
	width:170
})


var button = Titanium.UI.createButton({
	bottom:5,
	right:10,
	height:40,
	left:10,
	font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Take Picture'
});


var overlay = Titanium.UI.createView();
overlay.add(santa);
overlay.add(button);


button.addEventListener('click',function()
{
	//Ti.Media.vibrate();
	Ti.Media.takePicture();
	
});




Titanium.Media.showCamera({

	success:function(event)
	{
		alert('Great Picture, now just move the santa hat in place and save the photo.');
		var view = Ti.UI.createView({top:0, left:0, right:0, bottom:0});
		// place our picture into our window
		var imageView = Ti.UI.createImageView({
			image:event.media,
			width:win.width,
			height:win.height
		});
		view.add(imageView);
		
		//var santaZoom = Ti.UI.createScrollView({minZoomScale:1.0, maxZoomScale:3.0, height:350, width:250});
		//santaZoom.add(santa);
		
		//view.add(santaZoom);
		
		santa.addEventListener('touchmove', function(e){
			santa.center = e.globalPoint;
		});
		
		view.add(santa);
		win.add(view);
		
		// programatically hide the camera
		//Ti.Media.hideCamera();
		
		var save = Ti.UI.createButton({
			title:'Save',
			bottom:5,
			right:5,
			width:60,
			height:40
		});
		win.add(save);
		save.addEventListener('click', function(){
			Titanium.Media.saveToPhotoGallery(view.toImage());
			alert('Image saved to Gallery');
			win.close();
		});
	},
	cancel:function()
	{
	},
	error:function(error)
	{
		var a = Titanium.UI.createAlertDialog({title:'Camera'});
		if (error.code == Titanium.Media.NO_CAMERA)
		{
			a.setMessage('Sorry, you need a camera.');
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
	
