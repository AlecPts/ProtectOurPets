<script>
    import Logo from '$lib/logo-variants/pop_lightgreen.png';
    import InstagramLogo from '$lib/logo-mobile/instagram.png';
    import { Footer, FooterCopyright, FooterLinkGroup, FooterBrand, FooterLink } from 'flowbite-svelte';
</script>


<Footer class="bg-gray-100 px-10 py-5 text-center">
    <div class="flex flex-row justify-between text-slate-600">
        <FooterBrand href="/" src={Logo} spanClass="text-xl font-semibold" alt="POP Logo" name="Protect Our Pets" />
        <FooterLinkGroup ulClass="flex flex-wrap items-center text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <FooterLink href="https://www.instagram.com/protect_our_animals_pop"><img src={InstagramLogo} class="w-16 p-3" style="filter: opacity(70%)" alt="Instagram" /></FooterLink>
        </FooterLinkGroup>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    <FooterCopyright href="/" by="Alec, Thomas & Enzo" />
</Footer>


