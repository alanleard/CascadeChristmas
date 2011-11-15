var win = Ti.UI.currentWindow;
win.backgroundColor = 'red';
win.title = 'Christmas Countdown'

dateFuture = new Date(2011,11,24,23,59,59);
//tzOffset = -8;

//dx = dateFuture.toGMTString();
//dx = dx.substr(0,dx.length -3);
//tzCurrent=(dateFuture.getTimezoneOffset()/60)*-2;
//dateFuture.setTime(Date.parse(dx))
//dateFuture.setHours(dateFuture.getHours() + tzCurrent - tzOffset);
var label = Ti.UI.createLabel({color:'#fff', textAlign:'center', height:'auto', top:50, font:{fontSize:32, fontWeight:'bold'}, minFontSize:12});
win.add(label);
var out;
var santa = Ti.UI.createImageView({
	image: '../images/santaBig.png',
	height:'auto',
	width:'auto',
	visible:false,
	top:100
});
win.add(santa);
function GetCount(){


	dateNow = new Date();									
	amount = dateFuture.getTime() - dateNow.getTime();
	
	delete dateNow;

	
	if(amount < 0){
		if(amount>(-86400000)){
			label.text='Merry Christmas!';
			santa.show();
		} else {
			dateFuture = new Date(2012,11,24,23,59,59);
		}
	}
	
	else{

		days=0;hours=0;mins=0;secs=0;out="";

		amount = Math.floor(amount/1000);//kill the "milliseconds" so just secs

		days=Math.floor(amount/86400);//days
		amount=amount%86400;

		hours=Math.floor(amount/3600);//hours
		amount=amount%3600;

		mins=Math.floor(amount/60);//minutes
		amount=amount%60;

		secs=Math.floor(amount);//seconds

		if(days != 0){out += days +" day"+((days!=1)?"s":"")+"\n"}
		if(days != 0 || hours != 0){out += hours +" hour"+((hours!=1)?"s":"")+"\n"}
		if(days != 0 || hours != 0 || mins != 0){out += mins +" minute"+((mins!=1)?"s":"")+"\n"}
		out += secs +" seconds\nuntil\nChristmas!";
		label.text = out;
	}
}
GetCount();
setInterval(function(){
	GetCount();
}, 1000);
