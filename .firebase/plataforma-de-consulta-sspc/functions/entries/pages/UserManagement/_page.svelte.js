import { c as create_ssr_component, h as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/ssr.js";
import { A as AccountCircle } from "../../../chunks/AccountCircle.js";
import "../../../chunks/axios.js";
const DeleteCircle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { ariaHidden = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { desc = void 0 } = $$props;
  let { class: className = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.ariaHidden === void 0 && $$bindings.ariaHidden && ariaHidden !== void 0)
    $$bindings.ariaHidden(ariaHidden);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg${add_attribute("viewBox", viewBox, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("class", className, 0)}${add_attribute("aria-label", ariaLabel, 0)}${add_attribute("aria-hidden", ariaHidden, 0)}>${desc ? `<desc>${escape(desc)}</desc>` : ``}${title ? `<title>${escape(title)}</title>` : ``}<path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const PencilBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { ariaHidden = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { desc = void 0 } = $$props;
  let { class: className = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.ariaHidden === void 0 && $$bindings.ariaHidden && ariaHidden !== void 0)
    $$bindings.ariaHidden(ariaHidden);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg${add_attribute("viewBox", viewBox, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("class", className, 0)}${add_attribute("aria-label", ariaLabel, 0)}${add_attribute("aria-hidden", ariaHidden, 0)}>${desc ? `<desc>${escape(desc)}</desc>` : ``}${title ? `<title>${escape(title)}</title>` : ``}<path d="M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M16.7,9.35C16.92,9.14 16.92,8.79 16.7,8.58L15.42,7.3C15.21,7.08 14.86,7.08 14.65,7.3L13.65,8.3L15.7,10.35L16.7,9.35M7,14.94V17H9.06L15.12,10.94L13.06,8.88L7,14.94Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let users;
  const baseUser = {
    chatId: 0,
    chatStatus: "Free",
    group: "",
    name: "",
    roles: {
      admin: false,
      analyst: false,
      requester: false
    },
    telegramUsername: ""
  };
  const baseAssignment = {
    assignmentId: "",
    crp: "",
    loginDate: null,
    sector: ""
  };
  var selectedUser = JSON.parse(JSON.stringify(baseUser));
  let officerAssignment = JSON.parse(JSON.stringify(baseAssignment));
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  users = data.users;
  return `<div class="p-4 mx-auto flex flex-row items-center justify-center space-x-4"><h1 class="text-center text-2xl" data-svelte-h="svelte-1t8t4fk">Página de administración de usuarios</h1> <button class="btn btn-success" onclick="editUserModal.showModal()" data-svelte-h="svelte-mtxbns">+ Agregar usuario</button></div> <div class="p-4 mx-auto w-3/4"><h1 class="text-center text-2xl mb-4" data-svelte-h="svelte-wmsugs">Tabla de Usuarios</h1> <div class="overflow-x-auto"><table class="table w-full border border-solid border-blue-950"><thead><tr><th class="text-left py-2" data-svelte-h="svelte-fn3y99">Nombre</th> <th class="text-left py-2" data-svelte-h="svelte-1f1bov">Agrupación</th> <th class="text-left py-2" data-svelte-h="svelte-ayln3z">Telegram</th> <th class="text-left py-2" data-svelte-h="svelte-2q1z3">Administrador</th> <th class="text-left py-2" data-svelte-h="svelte-1usjfg5">Analista</th> <th class="text-left py-2" data-svelte-h="svelte-14czxl8">Oficial de Campo</th> <th class="text-left py-2" data-svelte-h="svelte-1xodrx5">Acciones</th></tr></thead> <tbody>${each(users, (user) => {
    return `<tr><td>${escape(user.name)}</td> <td>${escape(user.group)}</td> <td>${escape(user.telegramUsername)}</td> <td><input type="checkbox" ${user.roles.admin ? "checked" : ""} class="checkbox" disabled></td> <td><input type="checkbox" ${user.roles.analyst ? "checked" : ""} class="checkbox" disabled></td> <td><input type="checkbox" ${user.roles.requester ? "checked" : ""} class="checkbox" disabled></td> <td><div><button onclick="editUserModal.showModal()" class="btn btn-warning">${validate_component(PencilBox, "PencilBox").$$render($$result, {}, {}, {})}</button> <button onclick="deleteUserModal.showModal()" class="btn btn-error">${validate_component(DeleteCircle, "DeleteCircle").$$render($$result, {}, {}, {})}</button> </div></td> </tr>`;
  })}</tbody></table></div> <dialog id="deleteUserModal" class="modal"><div class="modal-box items-center space-y-4"><div class="text-center"><h2 class="card-title" style="color: black;" data-svelte-h="svelte-cr7tb2">¿Desea eliminar a este usuario?</h2> <br><br> <button class="btn btn-active btn-neutral" onclick="deleteUserModal.close()" data-svelte-h="svelte-ilepo7">No</button> <button class="btn btn-active btn-primary" onclick="deleteUserModal.close()" data-svelte-h="svelte-12epi0n">Sí</button></div></div></dialog> <dialog id="editUserModal" class="modal"><div class="modal-box items-center space-y-4"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" data-svelte-h="svelte-1u7l87q">✕</button></form> <div class="flex flex-col text-center items-center"><div class="avatar"><div class="text-center">${validate_component(AccountCircle, "AccountCircle").$$render($$result, { width: "70px", height: "70px" }, {}, {})}</div></div> ${``} <p data-svelte-h="svelte-oxsq80">Nombre completo:</p> <input type="text" class="input input-bordered input-primary w-full max-w-xs bg-gray-100"${add_attribute("value", selectedUser.name, 0)}> <p data-svelte-h="svelte-1e2pwmt">Agrupación</p> <input type="text" class="input input-bordered input-primary w-full max-w-xs bg-gray-100"${add_attribute("value", selectedUser.group, 0)}> <p data-svelte-h="svelte-anf965">Roles</p> <div><table class="table w-full"><thead><tr><th class="text-left py-2" data-svelte-h="svelte-2q1z3">Administrador</th> <th class="text-left py-2" data-svelte-h="svelte-1usjfg5">Analista</th> <th class="text-left py-2" data-svelte-h="svelte-ggwmk">Oficial de campo</th></tr></thead> <tbody><tr><td class="flex flex-col items-center"><input type="checkbox" class="checkbox input-bordered input-primary"${add_attribute("checked", selectedUser.roles.admin, 1)}></td> <td><input type="checkbox" class="checkbox input-bordered input-primary"${add_attribute("checked", selectedUser.roles.analyst, 1)}></td> <td class="flex flex-col items-center"><input type="checkbox" class="checkbox input-bordered input-primary"${add_attribute("checked", selectedUser.roles.requester, 1)}></td></tr></tbody></table> ${selectedUser.roles.requester ? `<p data-svelte-h="svelte-1kufuuf">CRP</p> <input type="text" class="input input-bordered input-primary w-full max-w-xs bg-gray-100"${add_attribute("value", officerAssignment.crp, 0)}> <p data-svelte-h="svelte-1pz2o4u">Sector</p> <input type="text" class="input input-bordered input-primary w-full max-w-xs bg-gray-100"${add_attribute("value", officerAssignment.sector, 0)}> <p data-svelte-h="svelte-kpmg5u">Usuario de Telegram</p> <input type="text" placeholder="Sin @" class="input input-bordered input-primary w-full max-w-xs bg-gray-100"${add_attribute("value", selectedUser.telegramUsername, 0)}>` : ``}</div> <br> <br> <div class="card-actions justify-center">${``} ${``} <dialog id="exitModal" class="modal"><div class="modal-box" style="background-color: white; color: black;">${``} ${``} <button class="btn btn-primary mt-5" onclick="exitModal.close(); editUserModal.close();" data-svelte-h="svelte-12l7sck">Ok</button></div></dialog></div></div></div></dialog></div>`;
});
export {
  Page as default
};
