import { TooltipProvider } from "@radix-ui/react-tooltip";
import React from "react";
import { createRoot } from "react-dom/client";
import { FakeWindow } from './components/FakeWindow';
import { Tooltip } from './components/Tooltip';
import "./index.css";

declare global {
    interface Window {
        electronAPI: {
            createWindow: () => void;
        }
    }
}

function App() {
    return (
        <TooltipProvider>
            <FakeWindow>
                <div className="mr-auto">
                    <Tooltip content="Wow!">Hover me</Tooltip>
                </div>

                <button className="bg-slate-200 hover:bg-slate-300 text-slate-900 hover:text-slate-800 rounded px-4 py-2 mr-auto" onClick={() => window.electronAPI.createWindow()}>Create Window</button>
            </FakeWindow>
        </TooltipProvider>
    );
}

const root = createRoot(document.getElementById("react-root")!);

root.render(<App />);
