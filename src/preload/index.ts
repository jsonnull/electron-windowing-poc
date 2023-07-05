import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
    createWindow: () => ipcRenderer.send('create-window')
})
