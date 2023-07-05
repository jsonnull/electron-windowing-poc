import { BrowserWindow, app, shell, screen } from "electron";
import { join } from "node:path";

app.on("ready", async () => {
    const win = new BrowserWindow({
        frame: false,
        webPreferences: {
            preload: join(__dirname, "../preload/index.js"),
        },
        width: 900,
        height: 600,
        show: false,
        transparent: true,
    });

    win.webContents.setWindowOpenHandler((details) => {
        shell.openExternal(details.url);
        return { action: "deny" };
    });

    if (!app.isPackaged && process.env["ELECTRON_RENDERER_URL"]) {
        win.loadURL(process.env["ELECTRON_RENDERER_URL"]);
    } else {
        win.loadFile(join(__dirname, "../renderer/index.html"));
    }

    win.once("ready-to-show", () => {
        win.show();
    });

    const interval = setInterval(() => {
        const point = screen.getCursorScreenPoint();
        const [x, y] = win.getPosition();
        const [w, h] = win.getSize();

        if (point.x > x && point.x < x + w && point.y > y && point.y < y + h) {
            updateIgnoreMouseEvents(point.x - x, point.y - y);
        }
    }, 100);

    const updateIgnoreMouseEvents = async (x, y) => {
        // capture 1x1 image of mouse position.
        const image = await win.webContents.capturePage({
            x,
            y,
            width: 1,
            height: 1,
        });

        var buffer = image.getBitmap();

        const shouldIgnore = buffer[3] === 0;
        win.setIgnoreMouseEvents(shouldIgnore);
    };

    win.on("close", () => {
        clearInterval(interval);
    });
});
