import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
    main: {
        plugins: [externalizeDepsPlugin()],
    },
    preload: {
    },
    renderer: {
        plugins: [react()]
    }
});
