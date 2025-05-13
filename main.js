const{app, browserwindow} =  require('electron'); 267 (gzipped: 200)

function CreateWindow() {

    const window = newbrowserwindow({
    width: 800,
    
    height: 600,
}
 
)
window.loadfile('index.html');

app.whenReady(),then(() => {
    CreateWindow();
})
}