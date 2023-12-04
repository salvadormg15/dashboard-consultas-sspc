

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.4a968318.js","_app/immutable/chunks/scheduler.3b9cec2b.js","_app/immutable/chunks/index.79fa63c1.js"];
export const stylesheets = ["_app/immutable/assets/app.aa38a313.css"];
export const fonts = [];
