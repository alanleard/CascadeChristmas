var actInd = Titanium.UI.createActivityIndicator({ 
				height:50,
				width:50,
				style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN,
				color:'#fff'
});

Facebook = {
		login: function(e){
			if(!e){ e = {}; }
			if(!e.bottom){ e.width = 'auto'; }
			Titanium.Facebook.appid = '192082434200773';
			Titanium.Facebook.permissions = ['publish_stream'];
	
			Titanium.Facebook.addEventListener('login', function(e) {
			    if (e.success) {
			    }
			});
			Titanium.Facebook.addEventListener('logout', function(e) {
			    Ti.UI.createAlertDialog({title:'A Cascade Christmas', message:'You have successfully logged out of Facebook.'}).show();
			});
			
			return Titanium.Facebook.createLoginButton(e);
		},
		publish: function(e){
			Titanium.Facebook.appid = '192082434200773';
			Titanium.Facebook.permissions = ['publish_stream'];
			
			function fbcall(){
				 var closeBTN = Ti.UI.createButton({title:'Cancel'});
				 var post = Ti.UI.createButton({
				 	title:'Post',
				 	//backgroundImage:'images/generic/generic-button-bg.png',
				 	//width:60,
				 	//right:10,
				 	//top:10,
				 	//height:40
				 });
				 
				var popwin = Ti.UI.createWindow({modal:true, backgroundColor:'#000', leftNavButton:closeBTN,rightNavButton:post, title: 'Facebook Post', barColor:'#000'});
				var fbicon = Ti.UI.createImageView({
					image:'images/fb.png',
					height:40,
					width:40,
					left:10,
					top:120
				})
				 var textfield = Ti.UI.createTextField({
				 	left:60,
				 	right:10,
				 	height:40,
				 	top:120,
				 	hintText:'Add a personal message...',
				 	//backgroundColor:'white',
				 	enabled:true,
				 	borderStyle: 3
				 	
				 });

				 
				 var fbpicture = Ti.UI.createImageView({
				 	image: 'images/main.jpg',
				 	top:10,
				 	right:10,
				 	left:10,
				 	height:'auto'
				 });
				 
				 popwin.add(fbicon);
				 
				 popwin.add(textfield);
				 //popwin.add(fbname);
				 popwin.add(fbpicture);

				 
				 popwin.open();
				 closeBTN.addEventListener('click', function(){
				 	popwin.close();
				 })
				 post.addEventListener('click', function(){
				 e.data.message = textfield.value;
				 var hideView = Ti.UI.createView({
				 	backgroundColor:'#000',
				 	opacity:0.8,
				 	height:'100%',
				 	width:'100%'
				 });
				 actInd.top='100';
				 hideView.add(actInd);
				 
				 actInd.message = 'Posting to Facebook...'
				 
				 actInd.show();
				 popwin.add(hideView);
				 
				 
				  
				  Titanium.Facebook.requestWithGraphPath('me/feed', e.data, 'POST', function(x) {
				    if (x.success) {
				        
				      	popwin.close();
				        Ti.UI.createAlertDialog({title:'A Cascade Christmas',message:"You've successfully posted to Facebook.  Thanks for sharing!"}).show();
				        
				    } 
				    else {
				        if (x.error) {
				            alert("Uh Oh!\n"+x.error);
				        } else {
				            //alert("Unkown result");
				        }
				    }
				    
				});
				
				});
			}
			
			if(Ti.Facebook.loggedIn==true){
				fbcall();
				//Titanium.Facebook.dialog("feed", e.data, function(x) {
				
				//popwin.close();
			} else {
				Titanium.Facebook.authorize();
				Titanium.Facebook.addEventListener('login', function() {
			 	fbcall();
				});
			}
			
			
			
			
		}
		
	}
