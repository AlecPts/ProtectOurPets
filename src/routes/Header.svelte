<script>
	import Logo from '.././lib/images/logo-variants/pop_lightgreen.png';
	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	$: activeUrl = $page.url.pathname;
</script>
  
<Navbar class="drop-shadow-lg">
	<NavBrand href="/">
		<img src={Logo} class="mx-5 my-3 h-12" alt="POP Logo" />
	</NavBrand>
	<NavHamburger />
	<NavUl {activeUrl}>
		<NavLi href="/">About</NavLi>
		<NavLi href="/quizz">Quizz and Poll</NavLi>
		<NavLi href="/report">Report</NavLi>
		<NavLi href="/donation">Donation</NavLi>
	</NavUl>
</Navbar>