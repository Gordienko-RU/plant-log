const path = require('path');
const url = require('url');
const { app, BrowserWindow, ipcMain } = require('electron');
const {
  default: installExtension,
  REDUX_DEVTOOLS,
  ANGULARJS_BATARANG
} = require('electron-devtools-installer');
const { createUrl } = require('./utils');
const { mainWindowOptions } = require('./windowsOptions');

let mainWindow;

const createWindow = () => {
  const sourceUrl = createUrl('../dist/index.html');
  mainWindow = new BrowserWindow(mainWindowOptions);
  mainWindow.loadURL(sourceUrl);

  if (process.env.NODE_ENV !== 'production') {
    mainWindow.openDevTools();

    [REDUX_DEVTOOLS, ANGULARJS_BATARANG].forEach((extension) => {
      installExtension(extension);
    });
  }
};

app.on('ready', createWindow)
