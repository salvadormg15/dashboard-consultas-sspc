<script>
	import '../app.postcss';
</script>

<div class="login-content mx-auto my-10 p-6 flex flex-col items-center space-y-4">
	<i class="fa-solid fa-user text-white text-5xl" />
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
