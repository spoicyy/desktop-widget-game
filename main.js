const { app, BrowserWindow } = require("electron");

let win;

app.whenReady().then(() => {
    console.log("Electron app is starting...");

    win = new BrowserWindow({
        width: 250,
        height: 450,
        frame: false,
        alwaysOnTop: true,
        transparent: true,
        resizeable: false,
        webPreferences: {
            nodeIntegration: true,
        }
    });

    win.loadFile("index.html").then(() => {
        console.log("Window loaded sucessfully!");
    }).catch(err => console.error("Error loading window.", err));

    win.on("closed", () => {
        console.log("Window closed.");
    });

    app.on("window-all-closed", () => {
        console.log("All windows closed.");
        if (process.platform !== "darwin") app.quit();
    });
});