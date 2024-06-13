<script>
	import Logo from '$lib/logo-variants/pop_lightgreen.png';
	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	$: activeUrl = $page.url.pathname;
</script>
  
<Navbar class="fixed z-10 top-0 drop-shadow-lg bg-primary-50">
	<NavBrand href="/">
		<img src={Logo} class="mx-5 my-3 h-12" alt="POP Logo" />
	</NavBrand>

	<NavHamburger />

	<NavUl {activeUrl}>
		<NavLi href="/" class="text-lg">About</NavLi>
		<NavLi href="/poll" class="text-lg">Poll</NavLi>
		<NavLi href="/report" class="text-lg">Report</NavLi>
		<NavLi href="/donation" class="text-lg">Donation</NavLi>
	</NavUl>
</Navbar>