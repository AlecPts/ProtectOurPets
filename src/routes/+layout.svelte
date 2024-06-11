<script>
	import "../app.css";
	import Header from './Header.svelte'
</script>


<header>
	<Header />
</header>

<main class="mx-10 my-36">
	<slot></slot>
</main>

<footer class="bottom-0 py-2 text-center w-full bg-white">
	fait par Alec
</footer>
