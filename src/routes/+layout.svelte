<script>
	import "../app.css";
	import Header from './components/Header.svelte'
</script>


<header>
	<Header />
</header>

<main class="my-36 md:my-24">
	<slot></slot>
</main>

<footer class="bottom-0 py-2 text-center w-full bg-white">
	fait par Alec
</footer>
