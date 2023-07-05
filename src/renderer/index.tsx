import { TooltipProvider } from "@radix-ui/react-tooltip";
import React from "react";
import { createRoot } from "react-dom/client";
import { FakeWindow } from './components/FakeWindow';
import { Tooltip } from './components/Tooltip';
import "./index.css";

function App() {
    return (
        <TooltipProvider>
            <FakeWindow>
                <Tooltip content="Wow!">Hover me</Tooltip>
            </FakeWindow>
        </TooltipProvider>
    );
}

const root = createRoot(document.getElementById("react-root")!);

root.render(<App />);
