import React from 'react';
import { Titlebar } from './Titlebar';

export const FakeWindow = ({ children }: { children: React.ReactNode }) => {
    return <div className="fixed inset-x-20 inset-y-20 flex flex-col rounded overflow-hidden">
        <Titlebar />
        <div className="flex flex-col flex-1 bg-slate-100">
            {children}
        </div>
    </div>
}
