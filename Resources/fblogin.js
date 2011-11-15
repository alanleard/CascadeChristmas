var win = Ti.UI.currentWindow;
Ti.Facebook.authorize();

Titanium.Facebook.addEventListener('login', function(e) {
        
        win.close();

});