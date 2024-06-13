<script>
    import Logo from '$lib/logo-variants/pop_lightgreen.png';
    import InstagramLogo from '$lib/logo-mobile/instagram.png';
    import { Footer, FooterCopyright, FooterLinkGroup, FooterBrand, FooterLink } from 'flowbite-svelte';
</script>


<Footer class="bg-gray-100 p-12">
    <div class="sm:flex sm:items-center sm:justify-between text-slate-600">
        <FooterBrand href="/" src={Logo} spanClass="text-xl font-semibold" alt="POP Logo" name="ProtectOurPets" />
        <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <FooterLink href="https://www.instagram.com/protect_our_animals_pop"><img src={InstagramLogo} class="w-16 p-3" style="filter: opacity(70%)" alt="Instagram" /></FooterLink>
        </FooterLinkGroup>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <FooterCopyright href="/" by="Alec, Thomas & Enzo" />
</Footer>


