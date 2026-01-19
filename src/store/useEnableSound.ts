import { create } from "zustand";

type EnableSoundState = {
  enableSound: boolean;
  setEnableSound: (enableSound: boolean) => void;
};
export const useEnableSound = create<EnableSoundState>((set) => ({
  enableSound: true,
  setEnableSound: (enableSound: boolean) => set({ enableSound }),
}));
