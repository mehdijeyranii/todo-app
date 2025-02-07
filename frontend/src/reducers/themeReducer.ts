export type Theme = "light" | "dark" | "system";

type ThemeAction = { type: "SET_THEME"; payload: Theme };

export const themeReducer = (state: Theme, action: ThemeAction): Theme => {
  switch (action.type) {
    case "SET_THEME":
      return action.payload;
    default:
      return state;
  }
};
