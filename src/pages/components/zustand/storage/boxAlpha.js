import { create } from 'zustand';

export const useBoxAlpha = create((set) => ({

    child2Ref: null,
    setChild2Ref: (ref) => set({ child2Ref: ref }),

    child3Ref: null,
    setChild3Ref: (ref) => set({ child3Ref: ref }),

}));