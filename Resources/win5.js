var win = Ti.UI.currentWindow;
var win2 = Ti.UI.createWindow({url:'fblogin.js'});
Titanium.Facebook.appid = '192082434200773';
Titanium.Facebook.permissions = ['publish_stream', 'read_stream', "user_checkins", "publish_checkins"];

Titanium.Facebook.addEventListener('login', function(e) {
    if (e.success) {
        alert('You have logged in to Facebook.');
    }
});
Titanium.Facebook.addEventListener('logout', function(e) {
    alert('You have logged out of Facebook.');
});

function fbshare(feed,data){
	
	if(Titanium.Facebook.loggedIn){
	// Now create the status message after you've confirmed that authorize() succeeded
	Titanium.Facebook.requestWithGraphPath(feed, data, "POST", function(e) {
	    postView.hide();
	    if (e.success) {
	    	
	        var successAlert = Ti.UI.createAlertDialog({title:"Facebook Post", message:'You have successfully posted to Facebook.\nThanks for sharing!'});
	        successAlert.show();
	    } else {
	        var failAlert = Ti.UI.createAlertDialog({title:"Facebook Post Failed", message:"Oops, something when wrong.\nCheck your internet connection and be sure you're logged in to Facebook."});
	        failAlert.show();
	    }
	});
	} else {
		postView.hide();
		var loginAlert = Ti.UI.createAlertDialog({title:"Login to Facebook", message:"Oops, please login first."});
	        loginAlert.show();
	}
	
}
var fbImage = Ti.UI.createImageView({
	image:'images/fb.png',
	height:40,
	width:40,
	left:10,
	top:10
});

win.add(fbImage);

var message = Ti.UI.createTextField({
	left:60,
	right:10,
	hintText:'Share your thoughts!',
	height:40,
	top:10,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(message);
var cascadeData = {
		    link: "http://www.cascadetheatre.org",
		    name: "A Cascade Christmas",
		    //message: message.value,
		    //caption: "Don't miss a",
		    picture: "http://winewebdesign.com/accicon.png",
		    //description: "Be sure to get your tickets for this locally produced show!"
		}
var cascadeShare = Ti.UI.createButton({
		title:'Post on the Cascade Theatre wall',
		feed:'194564246214/feed',
		height:40,
		width:300,
		top:60
});

win.add(cascadeShare);

checkinData = {
            "place" : "194564246214",
            "coordinates" : JSON.stringify({
                'latitude' : 40.582025838732,
                'longitude' : -122.38946197944,
            }),
            "access_token" : Ti.Facebook.accessToken
}

var cascadeCheckin = Ti.UI.createButton({
		title:'Check-in at the Cascade Theatre',
		feed:'me/checkins',
		height:40,
		width:300,
		top:110
});

win.add(cascadeCheckin);

meData = {
		    link: "http://www.cascadetheatre.org",
		    name: "A Cascade Christmas at the Cascade Theatre",
		    //message: message.value,
		    //caption: "Don't miss a",
		    picture: "http://winewebdesign.com/acclogo.jpg",
		    //description: "Be sure to get your tickets for this locally produced show!"
		}

var meShare = Ti.UI.createButton({
		title:'Make a post on your wall',
		feed:'me/feed',
		height:40,
		width:300,
		top:160
});

win.add(meShare);

var postView = Ti.UI.createView({
	top:0,
	bottom:0,
	lefT:0,
	right:0,
	backgroundColor:'#000',
	opacity:0.8,
	visible:false
});

var actInd = Ti.UI.createActivityIndicator({
	color:'#fff',
	message:'Posting...',
	top:100,
	height:'auto'
});

postView.add(actInd);
actInd.show();
win.add(postView);

meShare.addEventListener('click', function(e){
	postView.show();
	if(message.value.length<1){
		var alertD = Ti.UI.createAlertDialog({title:'Blank Post?', message:'Do you want to add a message to your post?', buttonNames:['Add', 'Post']});
		alertD.show();
		alertD.addEventListener('click', function(e){
			if(e.index === 1){
				//alert('cancel');
				meData.message = message.value;
				//alert(data.message)
				fbshare(meShare.feed,meData);
			} else {
				postView.hide();
			}
		})
	} else {
		meData.message = message.value;
				//alert(data.message)
				fbshare(meShare.feed,meData);
	} 	
	
});

cascadeShare.addEventListener('click', function(e){
	postView.show();
	if(message.value.length<1){
		var alertD = Ti.UI.createAlertDialog({title:'Blank Post?', message:'Do you want to add a personal message to your wall post?', buttonNames:['Add', 'Post']});
		alertD.show();
		alertD.addEventListener('click', function(e){
			if(e.index === 1){
				cascadeData.message = message.value;
				//alert(data.message)
				fbshare(cascadeShare.feed,cascadeData);
			} else {
				postView.hide();
			}
		})
	}  else {
		cascadeData.message = message.value;
				//alert(data.message)
				fbshare(cascadeShare.feed,cascadeData);
	}	
	
});

cascadeCheckin.addEventListener('click', function(e){
	postView.show();
	if(message.value.length<1){
		var alertD = Ti.UI.createAlertDialog({title:'Add a Message!', message:'Do you want to add a message to your checkin?', buttonNames:['Add', 'Check-in']});
		alertD.show();
		alertD.addEventListener('click', function(e){
			if(e.index === 1){
				checkinData.message = message.value;
				//alert(data.message)
				fbshare(cascadeCheckin.feed,checkinData);

			} else {
				postView.hide();
			}
		})
	} else {
		checkinData.message = message.value;
				//alert(data.message)
				fbshare(cascadeCheckin.feed,checkinData);
	}	
	
});
win.addEventListener('open', function(){
	if(!Titanium.Facebook.loggedIn){
		win2.open();
	}
});

var cascadeLabel = Ti.UI.createLabel({text:'Cascade Theatre Resources', height:'auto',color:'#fff', left:10, right:10, textAlign:'center', bottom:70});



var line = Ti.UI.createView({borderWidth:2, borderColor:'#fff', height:1, bottom:60, left:10, right:10});

win.add(line);
win.add(cascadeLabel);
var buttonView = Ti.UI.createView({
	bottom:0,
	left:0,
	right:0,
	height:50,
	layout:'horizontal'
});
win.add(buttonView);

var space = (Ti.Platform.displayCaps.platformWidth-200)/6
var facebook = Ti.UI.createImageView({
	image:'images/fb.png',
	height:40,
	width:40,
	left:space,
	bottom:10
});

buttonView.add(facebook);

facebook.addEventListener('click', function(){
	if(Ti.Platform.osname !='android'){if(Ti.Platform.canOpenURL('fb://profile/194564246214/wall')){
		Ti.Platform.openURL('fb://profile/194564246214/wall');
	} else {
		Ti.Platform.openURL('http://www.facebook.com/cascadetheatre');
	}
	} else {
		Ti.Platform.openURL('http://www.facebook.com/cascadetheatre');
	}
	
});

var app = Ti.UI.createButton({
	image:'images/appstore.png',
	height:40,
	left:space,
	width:40,
	bottom:10
})

app.addEventListener('click', function(){
	Ti.Platform.openURL('http://itunes.apple.com/us/app/cascade-theatre-redding-ca/id388337024?mt=8');
});
buttonView.add(app);
var call = Ti.UI.createButton({
	image:'images/call.png',
	height:40,
	left:space,
	width:40,
	bottom:10
});
buttonView.add(call);
call.addEventListener('click', function(){
	Ti.Platform.openURL('tel:5302438877');
});

var map = Ti.UI.createButton({
	image:'images/map.png',
	height:40,
	left:space,
	width:40,
	bottom:10
});
buttonView.add(map);
map.addEventListener('click', function(){
	Ti.Platform.openURL('http://maps.google.com/maps?q=cascade+theatre,+redding,+ca&hl=en&sll=37.0625,-95.677068&sspn=48.77566,113.291016&vpsrc=6&hq=cascade+theatre,&hnear=Redding,+Shasta,+California&t=m&z=16');
});

var web = Ti.UI.createImageView({
	image:'images/safari.png',
	height:40,
	width:40,
	bottom:10,
	left:space
});
buttonView.add(web);

web.addEventListener('click', function(){
	Ti.Platform.openURL('http://www.cascadetheatre.org');
});
