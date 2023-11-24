<script>
	import '../app.postcss';
</script>
<div class="navbar bg-dark-blue text-neutral-content">
    <div class="navbar-start hover:text-white">
        <a href="/"><div class="w-20 rounded-full">
            <img src="/logo_sspc.png" alt="Logo SSPC" />
        </div></a>
        <a class="btn btn-ghost n text-2xl" href="/">
            Plataforma de consultas SSPC
        </a>
    </div>
    <div class="navbar-center">
        <ul class="menu menu-horizontal px-1 text-xl">
            <li><a class="hover:text-white" href="CarRequest">Solicitudes</a></li>
            <li><a class="hover:text-white" href="UserManagement">Gestión de usuarios</a></li>
        </ul>
    </div>
    <div class="navbar-end">
        <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost">
                <div class="w-20">
                    <!--TODO:Replace with mdi icon library (svelte-material.icons)-->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </div>
            </label>
            <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-black">
                <li><a>Cerrar Sesión</a></li>
            </ul>
        </div>
    </div>
</div>
<svelte:head>
    <title>SSPC Consultas</title>
</svelte:head>
<slot />
