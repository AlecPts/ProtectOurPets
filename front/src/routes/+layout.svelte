<script>
	import "../app.css";
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
</script>


<header>
	<Header />
</header>

<main class="my-36 md:my-24">
	<slot></slot>
</main>

<footer>
	<Footer />
</footer>
