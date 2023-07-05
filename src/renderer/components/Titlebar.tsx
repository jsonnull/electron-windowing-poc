import React from "react";

export const Titlebar = () => {
    return <div className="h-6 bg-slate-300 flex flex-row items-center justify-center"
        style={{ WebkitAppRegion: "drag", WebkitUserSelect: "none" } as any}
    >
        Titlebar
        <div className="absolute top-0 right-0 h-6 w-6 text-slate-500 flex flex-col items-center hover:bg-red-500 hover:text-white cursor-pointer" onClick={() => window.close()} style={{ WebkitAppRegion: "no-drag" } as any}>x</div>
    </div>;
}
