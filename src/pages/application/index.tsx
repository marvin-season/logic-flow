import React from 'react';

import chatHandle from '@/api/chat'

export default function ApplicationPage() {
    return (
        <>
            <button onClick={() => {
                chatHandle.chat('hi!')
            }}>chat</button>
        </>
    );
}

ApplicationPage.displayName = 'ApplicationPage';
