import { create } from "zustand";
import { getHelloMessage } from "../services/useHello";

export interface HelloData {
  message: string;
  state: number;
}
interface HelloState {
  hello: HelloData | null;
  loading: boolean;
  error: string | null;
  fetchHello: () => Promise<void>;
}

const useHelloStore = create<HelloState>((set) => ({
  hello: null,
  loading: false,
  error: null,
  fetchHello: async () => {
    set({ loading: true, error: null });
    try {
      const hello = await getHelloMessage();
      set({ hello, loading: false });
    } catch (err) {
      set({ error: (err as any).message || "取得資料失敗", loading: false });
    }
  },
}));

export default useHelloStore;
