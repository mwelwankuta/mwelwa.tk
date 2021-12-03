import { writable, Writable } from "svelte/store";
import type { User } from "./types/User";

const user: Writable<User> = writable();

const darkMode: Writable<boolean> = writable(false);

export { user, darkMode };
