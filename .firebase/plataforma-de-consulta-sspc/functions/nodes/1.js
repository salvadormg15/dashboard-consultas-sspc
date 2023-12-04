

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.14642c8b.js","_app/immutable/chunks/scheduler.3b9cec2b.js","_app/immutable/chunks/index.79fa63c1.js","_app/immutable/chunks/singletons.631e477f.js"];
export const stylesheets = [];
export const fonts = [];
