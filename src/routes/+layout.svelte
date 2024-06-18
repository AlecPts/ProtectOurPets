<script>
	import "../app.css";
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
</script>


<header>
	<Header />
</header>

<main class="my-36 md:my-24 md:max-w-screen-lg md:mx-auto">
	<slot></slot>
</main>

<footer>
	<Footer />
</footer>
