const path = require('path');
const url = require('url');
const { app, BrowserWindow } = require('electron');

let win;

const createWindow = () => {

  const options = {
    width: 800,
    height: 600,
  }

  win = new BrowserWindow({ width: 800, height: 600, });

  const sourceUrl = url.format({
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file',
    slashes: true,
  });

  win.loadURL(sourceUrl);

  if (process.env.NODE_ENV !== 'poduction') {
    win.openDevTools();
  }
};

app.on('ready', createWindow)
