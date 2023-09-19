const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000' // Start React development server
      : `file://${path.join(__dirname, '../build/index.html')}` // Load the production build
  );

  if (isDev) {
    mainWindow.webContents.openDevTools(); // Open DevTools in development mode
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
