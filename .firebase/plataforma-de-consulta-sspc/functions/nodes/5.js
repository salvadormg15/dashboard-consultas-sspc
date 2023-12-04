import * as universal from '../entries/pages/UserManagement/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/UserManagement/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/UserManagement/+page.js";
export const imports = ["_app/immutable/nodes/5.fcbd16df.js","_app/immutable/chunks/axios.daa5d853.js","_app/immutable/chunks/navigation.a5f7d5b8.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/singletons.631e477f.js","_app/immutable/chunks/scheduler.3b9cec2b.js","_app/immutable/chunks/index.79fa63c1.js","_app/immutable/chunks/AccountCircle.0dbb5ce3.js"];
export const stylesheets = [];
export const fonts = [];
