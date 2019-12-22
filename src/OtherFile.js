import React, { type Node } from 'react';

const StringToNumber = (input: string): number => {
    return Number(input);
}

export const OtherFile = (): Node => (
    <div>
        Hello world! {StringToNumber("4.1234")}
    </div>
);
