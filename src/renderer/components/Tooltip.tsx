import React from 'react';
import * as T from '@radix-ui/react-tooltip';

export const Tooltip = ({ children, content }: { children: React.ReactNode, content: React.ReactNode }) => {
    return (
        <T.Root delayDuration={0}>
            <T.Trigger>
                {children}
            </T.Trigger>
            <T.Portal>
                <T.Content className="bg-slate-900 text-white p-5 rounded" sideOffset={5}>
                    {content}
                    <T.Arrow className="color-slate-900" />
                </T.Content>
            </T.Portal>
        </T.Root>
    );
};
