<script>
	import Affiche from "$lib/images/poster-campaign.png";
	import GooglPlayLogo from "$lib/logo-dl/google-play-logo.svg";
	import AppStoreLogo from "$lib/logo-dl/app-store-logo.svg";

	import WaterfallInfos from "./components/WaterfallInfos.svelte";
</script>


<div class="text-lg/8 text-slate-600">
	<div class="flex flex-col md:flex-row md:max-w-screen-lg md:mx-auto">
		<div class="flex flex-col md:w-1/2 px-16 md:pl-16 md:p-0 justify-center">
			<h1 class="text-3xl font-semibold mb-5 text-center">Presentation of the POP App</h1>
			<p>
				ProtectAnimals is an innovative app designed to combat the mistreatment and abandonment of domestic animals.
				This platform allows every citizen to quickly and easily report worrying situations involving animals in danger.
				With an intuitive and user-friendly interface, users can provide detailed information about animals in distress,
				such as photos, videos, and the exact geolocation of the incident.
			</p>
		</div>

		<div class="flex flex-col justify-center md:w-1/2 mx-10 md:mx-0">
			<img src={Affiche} class="w-5/6 my-16 md:w-4/6 mx-auto drop-shadow-xl rounded" alt="poster campaign" />
		</div>
	</div>

	<div class="flex flex-row justify-center">
		<h3>DOWNLOAD NOW !</h3>
		<img src="{GooglPlayLogo}" class="md:w-1/6" alt="Google Play Logo" />
		<img src="{AppStoreLogo}" class="md:w-1/6" alt="App Store Logo" />
	</div>

	<WaterfallInfos />

	<div>
		<p class="text-center">
			As you may know, many animals are living in very poor conditions, such as chickens being force-fed by farmers, cows being pressured to produce excessive milk, or animals being abandoned in the wild.
			Our project is dedicated to addressing this issue. [Link to our project page]
		</p>
	</div>
</div>

<style>

</style>
