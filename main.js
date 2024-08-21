const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,  // Permet utilitzar mòduls de Node.js en el frontend
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: false // Permet la geolocalització sense restriccions CSP
    }
  });

  // Carrega l'HTML principal
  win.loadFile(path.join(__dirname, 'src', 'index.html'));
}

// Quan l'aplicació està llesta, crea la finestra
app.whenReady().then(createWindow);

// Gestiona el tancament de totes les finestres 
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// Torna a obrir la finestra si es fa clic en la icona 
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
