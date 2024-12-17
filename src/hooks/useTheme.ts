import { useSystemStore } from "@/stores/system";

export type ThemeName = "light" | "dark";

export const useTheme = () => {
  const systemStore = useSystemStore();
  const isDark = systemStore.isDark;

  const switchTheme = () => {
    const body = document.documentElement as HTMLElement;
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      systemStore.setDark();
    } else {
      body.classList.add("dark");
      systemStore.setDark();
    }
  };

  const initTheme = () => {
    const value = isDark;
    const body = document.documentElement as HTMLElement;
    body.classList.add(value ? "dark" : "light");
  };

  return { isDark, initTheme, switchTheme };
};
