<script>
	import "../app.css";
	import Header from './Header.svelte'
</script>


<header>
	<Header />
</header>

<main class="mx-3 my-4">
	<slot></slot>
</main>

<footer class="absolute bottom-1 text-center w-full">
	fait par Alec
</footer>
