

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/CarRequest/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.e4152a91.js","_app/immutable/chunks/scheduler.3b9cec2b.js","_app/immutable/chunks/index.79fa63c1.js","_app/immutable/chunks/axios.daa5d853.js"];
export const stylesheets = [];
export const fonts = [];
