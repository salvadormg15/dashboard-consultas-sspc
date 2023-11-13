<script>
	import DeleteCircle from 'svelte-material-icons/DeleteCircle.svelte';
	import PencilBox from 'svelte-material-icons/PencilBox.svelte';

	let users = [
		{ name: 'John Doe', role: 'Developer' },
		{ name: 'Jane Smith', role: 'Designer' },
		{ name: 'Bob Johnson', role: 'Manager' }
		// Puedes añadir más usuarios a la lista
	];
</script>

<div class="p-4 mx-auto flex flex-row items-center justify-center space-x-4">
	<h1 class="text-center text-2xl">Página de administración de usuarios</h1>
	<button class="btn btn-success">+ Agregar usuario</button>
</div>

<div class="p-4 mx-auto max-w-3xl">
	<h1 class="text-center text-2xl mb-4">Tabla de Usuarios</h1>
	<div class="overflow-x-auto">
		<table class="table w-full border border-solid border-cyan-400">
			<thead>
				<tr>
					<th class="text-left py-2">Nombre</th>
					<th class="text-left py-2">Apellidos</th>
					<th class="text-left py-2">Cargo</th>
					<th class="text-left py-2">Acciones</th>
				</tr>
			</thead>
			<tbody>
				{#each users as user}
					<tr>
						<td class="py-2">{user.name}</td>
						<td class="py-2">{user.name}</td>
						<td class="py-2">{user.role}</td>
						<td class="py-2">
							<div class="flex space-x-2">
								<button class="btn btn-warning">
									<PencilBox />
								</button>
								<button class="btn btn-error">
									<DeleteCircle />
								</button>
							</div>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
