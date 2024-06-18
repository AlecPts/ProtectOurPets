<script>
	import { base } from '$app/paths';

	import Logo from '$lib/logo-variants/pop_lightgreen.png';
	import { page } from '$app/stores';
	import {Navbar, NavBrand, NavLi, NavUl, NavHamburger, Span} from 'flowbite-svelte';
	$: activeUrl = $page.url.pathname;
</script>
  
<Navbar class="fixed z-10 top-0 drop-shadow-lg bg-primary-50">
	<NavBrand href="/">
		<img src={Logo} class="mx-5 my-3 h-12" alt="POP Logo" />
		<span class="hidden md:block font-semibold" >Protect Our Pets</span>
	</NavBrand>

	<NavHamburger />

	<NavUl {activeUrl}>
		<NavLi href="{base}/" class="text-lg">About</NavLi>
		<NavLi href="{base}/poll" class="text-lg">Poll</NavLi>
		<NavLi href="{base}/report" class="text-lg">Report</NavLi>
	</NavUl>
</Navbar>