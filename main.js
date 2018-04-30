const path = require('path');
const url = require('url');
const { app, BrowserWindow } = require('electron');
const {
  default: installExtension,
  REDUX_DEVTOOLS,
  ANGULARJS_BATARANG
} = require('electron-devtools-installer');

let win;

const createWindow = () => {
  const options = {
    width: 800,
    height: 600,
  }
  const sourceUrl = url.format({
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file',
    slashes: true,
  });

  win = new BrowserWindow({ width: 800, height: 600, });
  win.loadURL(sourceUrl);

  if (process.env.NODE_ENV !== 'production') {
    win.openDevTools();

    [REDUX_DEVTOOLS, ANGULARJS_BATARANG].forEach((extension) => {
      installExtension(extension);
    });
  }
};

app.on('ready', createWindow)
