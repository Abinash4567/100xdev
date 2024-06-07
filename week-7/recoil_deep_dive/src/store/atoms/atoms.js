import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 102,
});

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
})

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 0
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 12
})

export const summedAtom = selector({
    key: "summedAtom",
    get: ({get})=>{
        const networkCount = get(networkAtom);
        const jobsCount = get(jobsAtom);
        const notificationCount = get(notificationAtom);
        const messagingCount = get(messagingAtom);

        return networkCount + jobsCount + notificationCount + messagingCount;
    }
})