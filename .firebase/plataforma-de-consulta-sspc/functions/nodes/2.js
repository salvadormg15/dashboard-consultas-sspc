

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.345cfb9d.js","_app/immutable/chunks/scheduler.3b9cec2b.js","_app/immutable/chunks/index.79fa63c1.js","_app/immutable/chunks/AccountCircle.0dbb5ce3.js"];
export const stylesheets = ["_app/immutable/assets/2.2713eec0.css","_app/immutable/assets/app.aa38a313.css"];
export const fonts = [];
