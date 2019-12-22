import React from 'react';

const StringToNumber = (input: string): number => {
    return Number(input);
}

export const OtherFile = () => (
    <div>
        Hello world! {StringToNumber("4.1234")}
    </div>
);
