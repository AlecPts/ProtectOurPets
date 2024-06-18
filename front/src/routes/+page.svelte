<script>
	import Affiche from "$lib/images/poster-campaign.png";
	import GooglePlayLogo from "$lib/logo-mobile/google-play-logo.png";
	import AppStoreLogo from "$lib/logo-mobile/app-store-logo.png";
	import InstagramColoredLogo from "$lib/logo-mobile/instagram-colored.png";

	import WaterfallInfos from "./components/WaterfallInfos.svelte";
</script>


<div>
	<div class="mt-48 mb-24 text-center px-10">
		<h1 class="text-4xl font-semibold mb-8">Helping animals has never been easier !</h1>
		<p class="mb-24">
			As you may know, many animals are living in very poor conditions, such as chickens being force-fed by farmers, cows being pressured to produce excessive milk, or animals being abandoned in the wild.
			Our project is dedicated to addressing this issue.
		</p>
	</div>

	<hr class="w-40 h-1 mx-auto bg-gray-300 border-0 rounded" />

	<div class="my-24 flex flex-col md:flex-row">
		<div class="flex flex-col md:w-1/2 justify-center px-10 md:pr-0">
			<h2 class="text-3xl font-semibold mb-5">Presentation of the POP App</h2>
			<p class="mb-24 md:mb-0">
				ProtectOurPets is an innovative app designed to combat the mistreatment and abandonment of domestic animals.
				This platform allows every citizen to quickly and easily report worrying situations involving animals in danger.
				With an intuitive and user-friendly interface, users can provide detailed information about animals in distress,
				such as photos, videos, and the exact geolocation of the incident.
			</p>
		</div>

		<div id="image" class="flex flex-col justify-center md:w-1/2 mx-10 md:mx-0">
			<img src={Affiche} class="w-5/6 md:w-4/6 mx-auto drop-shadow-xl rounded" alt="poster campaign" />
		</div>
	</div>

	<div class="my-24 md:max-w-screen-lg md:mx-auto">
		<h2 class="text-3xl font-semibold mb-8 text-center">DOWNLOAD NOW!</h2>
		<div class="flex flex-col md:flex-row mx-auto items-center justify-center">
			<a href="https://play.google.com/store/games?device=windows" class="w-3/6 md:max-w-60 mb-5 md:mb-0 md:mr-3"><img src="{GooglePlayLogo}" alt="Google Play Logo" /></a>
			<a href="https://www.apple.com/app-store/" class="w-3/6 md:max-w-60 mb-5 md:mb-0 md:mr-3"><img src="{AppStoreLogo}" alt="App Store Logo" /></a>
		</div>
	</div>

	<hr class="w-40 h-1 mx-auto bg-gray-300 border-0 rounded" />

	<WaterfallInfos />

	<div>
		<p class="text-center">

		</p>
	</div>

	<div class="my-24 flex w-full md:mx-auto flex-col items-center md:flex-row justify-center">
		<h2 class="text-3xl font-semibold mb-5 md:mb-0 text-center md:text-left md:mr-3">Follow our Instagram<br/>for more information</h2>
		<a href="https://www.instagram.com/protect_our_pets_pop" class="flex flex-row items-center">
			<img src={InstagramColoredLogo} class="m-3 w-20" alt="Instagram Logo" aria-label="instagram-logo" />
			<h2 class="text-3xl font-semibold md:flex items-center md:ml-3">@protect_our_pets_pop</h2>
		</a>
	</div>
</div>
