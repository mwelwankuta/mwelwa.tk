import { writable, Writable } from "svelte/store";

const darkMode: Writable<boolean> = writable(false);

export { darkMode };
