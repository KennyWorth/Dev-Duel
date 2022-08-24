import { atom } from 'recoil';

export const inspectUserState = atom({
    key: 'inspectUserState',
    default: {
        user: {}
    }
});

const duelUser1State = atom({
    key: 'duelUser1State',
    default: {
        user: {}
    }
});

const duelUser2State = atom({
    key: 'duelUser2State',
    default: {
        user: {}
    }
});

