<script>
	import '../app.postcss';
	import AccountCircle from 'svelte-material-icons/AccountCircle.svelte';
</script>


<div class="login-content mx-auto my-10 p-6 flex flex-col items-center space-y-4">
<!--	TODO: Remove alert-->
	<div role="alert" class="alert alert-info">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
		<span>Funcionalidad en desarrollo.</span>
	</div>
	<AccountCircle width="100px" height="100px" />
	<div class="form-control w-full max-w-xs">
		<label class="label">
			<span class="label-text text-white">Correo Electronico</span>
		</label>
		<input
			type="text"
			placeholder="Escribe tu correo"
			class="input input-bordered w-full max-w-xs"
		/>
	</div>

	<div class="form-control w-full max-w-xs">
		<label class="label">
			<span class="label-text text-white">Contraseña</span>
		</label>
		<input
			type="password"
			placeholder="Escribe tu contraseña"
			class="input input-bordered w-full max-w-xs"
		/>
	</div>

	<div class="form-control w-52">
		<label class="cursor-pointer label">
			<span class="label-text text-white">Recordar Contraseña</span>
			<input type="checkbox" class="toggle toggle-accent" checked />
		</label>
	</div>

	<button class="btn btn-success">Login</button>
</div>

<style>
	.login-content {
		color: white;
		background-color: rgb(39, 62, 112);
		border-radius: 10px;
		max-width: 400px; /* Ajusta el ancho máximo */
	}
</style>
