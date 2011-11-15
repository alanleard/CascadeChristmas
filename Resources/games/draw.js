Titanium.Paint = Ti.Paint = require('ti.paint');
var close = Ti.UI.createButton({title:'Done', width:50, height:30, top:2,left:2});
var win = Ti.UI.currentWindow;

var imageView = Ti.UI.createImageView({backgroundColor:'#fff'});
var gManLrg = Ti.UI.createImageView({
    image: '../images/gManBlk.png',
    top:0,
    //height:'auto',
    //width:'auto',
   // height:Ti.Platform.displayCaps.platformHeight-85,
    width:'auto',
    bottom:50
});

imageView.add(gManLrg);
var painter = Ti.Paint.createPaintView({
    top:2, right:2, bottom:2, left:2,
    // strokeWidth (float), strokeColor (string), strokeAlpha (int, 0-255)
    strokeColor:'#FF00CC',
    // strokeAlpha:0, 
    strokeWidth:10,
    eraseMode:false
});
imageView.add(painter);
win.add(imageView);

//Create a Control View to contain all the controls so they can be hidden easily
var controlView = Titanium.UI.createView({
  bottom:3,
  left:2,
  right:2,
  height:50
});

win.add(controlView);
//win.add(close);
win.leftNavButton = close;
close.addEventListener('click', function(){
	var confirm = Ti.UI.createAlertDialog({title:'Are you sure?', message:'Are you sure you are done decorating your cookie?  Be sure to save before leaving.', buttonNames:['Leave', 'Cancel'], cancel:1});
	confirm.show();
	confirm.addEventListener('click', function(e){
		if(e.index === 0){
			win.close();
		}
	});
	/*var win3 = Ti.UI.createWindow({

		url:'win3.js'
	});
	Titanium.UI.currentTab.open(win3,{animated:true, transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	*/
	
});
//Create a View to contain all our buttons
var buttonScroll = Titanium.UI.createView({

  bottom:0,
  right:0,
  height:45,
  width:'auto',
  backgroundColor:'transparent'

});

controlView.add(buttonScroll);

//Create scroll view to contain color options
var colorScroll = Titanium.UI.createScrollView({
  contentWidth:400,
  contentHeight:35,
  bottom:0,
  left:0,
  height:41,
  width:'39%',
  borderRadius:10,
  borderWidth:2,
  scrollType:'horizontal',
  backgroundColor:'white'

});

controlView.add(colorScroll);

//Create color options
var whiteView = Ti.UI.createView({
	bottom:3,
	left:5,
	width:35,
	height:35,
	borderRadius:10,
  borderWidth:1,
	backgroundColor:'#FFFFCC'
});

colorScroll.add(whiteView);

var blueView = Ti.UI.createView({
	bottom:3,
	width:35,
	height:35,
	left:45,
	borderRadius:10,
	borderWidth:1,
	backgroundColor:'#3300CC'
});

colorScroll.add(blueView);

var blackView = Ti.UI.createView({
	bottom:3,
	left:85,
	width:35,
	height:35,
	borderRadius:10,
	borderWidth:1,
	backgroundColor:'#000000'
});

colorScroll.add(blackView);

var redView = Ti.UI.createView({
  bottom:3,
  left:125,
  width:35,
  height:35,
  borderRadius:10,
  borderWidth:1,
  backgroundColor:'#cc0000'
});

colorScroll.add(redView);

var greenView = Ti.UI.createView({
  bottom:3,
  left:165,
  width:35,
  height:35,
  borderRadius:10,
  borderWidth:1,
  borderwidth:1,
  backgroundColor:'#006600'
});

colorScroll.add(greenView);

var yellowView = Ti.UI.createView({
  bottom:3,
  left:205,
  width:35,
  height:35,
  borderRadius:10,
  borderWidth:1,
  borderwidth:1,
  backgroundColor:'#FF00CC'
});

colorScroll.add(yellowView);

var purpleView = Ti.UI.createView({
  bottom:3,
  left:245,
  width:35,
  height:35,
  borderRadius:10,
  borderWidth:1,
  borderwidth:1,
  backgroundColor:'#660066'
});

colorScroll.add(purpleView);

var brownView = Ti.UI.createView({
  bottom:3,
  left:285,
  width:35,
  height:35,
  borderRadius:10,
  borderWidth:1,
  borderwidth:1,
  backgroundColor:'#663300'
});

colorScroll.add(brownView);

var ltblueView = Ti.UI.createView({
  bottom:3,
  left:325,
  width:35,
  height:35,
  borderRadius:10,
  borderWidth:1,
  borderwidth:1,
  backgroundColor:'#66ffff'
});

colorScroll.add(ltblueView);

var ltbrownView = Ti.UI.createView({
  bottom:3,
  left:365,
  width:35,
  height:35,
  borderRadius:10,
  borderWidth:1,
  borderwidth:1,
  backgroundColor:'#ffcc66'
});

colorScroll.add(ltbrownView);



//Create control buttons

var hide = Ti.UI.createButton({  
  bottom:3,
  right:0, 
  height:35, 
  width:40, 
  title: 'Hide'
});

buttonScroll.add(hide);

var save = Ti.UI.createButton({
  bottom:3,
  right:43, 
  height:35, 
  width:45, 
  title: 'Save'
});
buttonScroll.add(save);

var clear = Ti.UI.createButton({
  bottom:3,
  right:91, 
  height:35, 
  width:45, 
  title: 'Clear'
});

buttonScroll.add(clear);

var buttonStrokeColorEraser = Ti.UI.createButton({   
	bottom:3,
  	right:139,
 	 width:50,
  	height:35,  
  	title:'Erase' });
buttonStrokeColorEraser.addEventListener('click', function(e) {
	painter.eraseMode = (painter.eraseMode) ? false : true;
	e.source.title = (painter.eraseMode) ? 'Draw' : 'Erase';
	e.source.color =  (painter.eraseMode) ? 'red' : '#324F85';
});
buttonScroll.add(buttonStrokeColorEraser);

//Create a text box to set stroke size
var strokeSize = Ti.UI.createTextField({
  height:30, 
  width:35, 
  value:10, 
  borderWidth:1, 
  borderRadius:10,
  top:0,
  left:0,
  keyboardType:Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
  paddingLeft:3,
  backgroundColor:'#ff00cc'
});

win.rightNavButton = strokeSize;

var show = Ti.UI.createLabel({  
  bottom:5,
  right:5, 
  height:20, 
  width:20,
  visible:false, 
  color:'#000',
  text:'+'});
 
win.add(show);

var help = Ti.UI.createButton({
  top: 5,
  left:5,
  style:Titanium.UI.iPhone.SystemButton.INFO_LIGHT
  
});

//win.add(help);

//Create event listener that will set the color of the brush
var background;//a variable to store a color to be used for the background on clear
colorScroll.addEventListener('click', function(e){
  painter.strokeColor = e.source.backgroundColor;
  background = e.source.backgroundColor;
  strokeSize.backgroundColor = background;
  //Add if statement to make sure strokeSize Text is visible
  if (background != '#FFFFCC' && background != '#ffff00' && background != '#ffcc66' && background != '#66ffff')
  {
    strokeSize.color='#ffffff';
    }
  else {
      strokeSize.color='#000000';
    };
});

//Use Titanium.Painter.clear to clean away all paint, then remove any background image
clear.addEventListener('click',function(){
  var confirm = Ti.UI.createAlertDialog({title:'Are you sure?', message:'Are you sure you want to start over?', buttonNames:['Clear', 'Cancel'], cancel:1})
	confirm.show();
	confirm.addEventListener('click', function(e){
		if(e.index == 0){
			painter.clear();
			win.backgroundImage='';
  			imageView.backgroundColor=background;
		}
	})
  
});

//Use Titanium.Painter.StrokeWidth to change to stroke based on our textField
strokeSize.addEventListener('return',function(e){
   painter.strokeWidth = e.source.value;
});

//Hide all controls to give the user a fullscreen experience
hide.addEventListener('click',function(){
 //Add if statement to make sure unhide is visible
  if (imageView.backgroundColor != '#fff' && imageView.backgroundColor != '#ffff00' && background != '#ffcc66' && background != '#66ffff')
  {
    show.color='#fff';
    }
  else {
      show.color='#000';
    }
    show.show();
    
  controlView.hide();
  strokeSize.hide();
  close.hide();
});

show.addEventListener('click',function(){
  controlView.show();
  strokeSize.show();
  close.show();
  show.hide();
});

//Allow user to select background image to draw on (Reference from KitchenSink photo_gallery_bgimage.js)
var f = Ti.App.Properties.getString("filename");
var bgImage = null;
if (f != null)
{
  bgImage = Titanium.Filesystem.getFile(f);
  win.backgroundImage = bgImage.nativePath;
  
}
/*
bgImageBtn.addEventListener('click',function()
{   
  Titanium.Media.openPhotoGallery(
  { 
    success:function(event)
    {
      var image = event.media;
      
      // create new file name and remove old
      var filename = Titanium.Filesystem.applicationDataDirectory + "/" + new Date().getTime() + ".jpg";
      Ti.App.Properties.setString("filename", filename);
      if (bgImage != null)
      {
        bgImage.deleteFile();
      }
      bgImage = Titanium.Filesystem.getFile(filename);
      bgImage.write(image);
            
      win.backgroundImage = null;
      win.backgroundImage = bgImage.nativePath; 
    },
    cancel:function()
    {
  
    },
    error:function(error)
    {
    }
  });
});
*/
//Save Image to users Photo Gallery
save.addEventListener('click',function(){
var hideView = Ti.UI.createView({
	top:0,
	bottom:0,
	left:0,
	right:0,
	opacity:0.8,
	backgroundColor:'#000'
});
win.add(hideView);
var actInd = Ti.UI.createActivityIndicator({
	
});

if(Ti.Platform.osname !='android'){
	win.add(actInd);
	
} 

actInd.show();
 // controlView.hide();
 // strokeSize.hide();
 // close.hide();
  
 // Titanium.Media.takeScreenshot(function(event)
 //   {
      // set blob on image view

     var  saveimage = imageView.toImage();

      Titanium.Media.saveToPhotoGallery(saveimage,{
        success: function(e) {
        	actInd.hide();
			win.remove(hideView);
          var alert1 = Titanium.UI.createAlertDialog({
            title:'Gingerbread Man Saved',
            message:'Your current gingerbread man has been saved to your Photo Gallery.'
          })
          alert1.show();    
          // alert1.addEventListener('click', function(){
          	 // var alert2 = Titanium.UI.createAlertDialog({
		            // title:'Share your Gingerbread Man!',
		            // message:'Do you want tp share your Gingerbread Man on Facebook?', buttonNames:['Yes', 'No']
		          // });
		          // alert2.show(); 
		     // alert2.addEventListener('click', function(e){
		     	// if(e.index ===0){
		     		// First make sure this permission exists
					// Titanium.Facebook.permissions = ['publish_stream'];
					// Titanium.Facebook.authorize();
					
					// ...
					// ...
					
					// Now post the photo after you've confirmed that authorize() succeeded
					//var f = Ti.Filesystem.getFile('pumpkin.jpg');
					//var blob = f.read();
					// var data = {
					    // caption: 'Checkout my Gingerbread Man from the Cascade Christmas App!',
					    // picture: saveimage
					// };
					// Titanium.Facebook.request('photos.upload', data, function(e){
					    // if (e.success) {
					        // alert("You have posted your creation on Facebook!");
					    // } else {
					        // if (e.error) {
					            // alert("Sorry, something didn't work, but your Gingerbread Man is still in your gallery");
					        // } else {
					            // alert("Sorry, something didn't work, but your Gingerbread Man is still in your gallery");
					        // }
					    // }
					// });
				     // } else {
// 				     	
				     // }
				  // });
          
          //});
          
          
          
          
          
          
        },
        error: function(e) {
        	actInd.hide();
			win.remove(hideView);
          Titanium.UI.createAlertDialog({
            title:'Error saving',
            message:e.error
          }).show();
        }
      });

  });
  
  //controlView.show();
  //strokeSize.show();
  //close.show();
  
//});
/*
//Provide a Help Pop-up with some instructions
help.addEventListener('click', function(){
Titanium.UI.createAlertDialog({
            title:'Gingerbread Decorator',
            message:'Change your brush size by typing a value in the box in the upper right hand corner.  Set the background color by clicking on your color choice, then clicking "Clear". Hide the controls by clicking "Hide" and bring them back by clicking "+".  Click "Save" to save your drawing.'
          }).show();    
});

win.open();

var instView = Ti.UI.createView({
	opacity:0.8,
	left:0,
	right:0,
	top:0,
	bottom:0,
	backgroundColor:'#000'
});
*/
/*
var instructions = Ti.UI.createLabel({
	text:"Decorating Cookies\n\nTo decorate your gingerbread cookie, select a color by scrolling left and right in the color palate.  \nDraw on the cookie and the surrounding space.  \nPress 'Erase' to erase some of your drawing.  \nPress 'Clear' to start over.  \nYou can also select a color, and then press clear to start with a new background color.  \nPressing 'Save' will save your cookie to your photo gallery. \nChange the brush size in the upper right hand corner by type in a size number. \nThe 'Hide' button will hide the controls so you will have the full screen to draw.  \n\n Click anywhere on this screen to get started!",
	color:'#fff',
	textAlign:'center'
})
instView.add(instructions);
instView.addEventListener('click', function(){
	win.remove(instView);
	

})
win.add(instView);
*/
win.addEventListener('focus', function(){	
var start = Ti.UI.createAlertDialog({title:'Decorating Cookies', message:'Draw with your finger to decorate your gingerbread man.', buttonNames:['Start', 'Cancel']})
	start.show();
	start.addEventListener('click', function(e){
		if(e.index == 0){
			setTimeout(function(){
		colorScroll.scrollTo(250,0);
	}, 200);
	
	setTimeout(function(){
		colorScroll.scrollTo(100,0);
	}, 500);
		} else{
			win.close();
		}
});
});