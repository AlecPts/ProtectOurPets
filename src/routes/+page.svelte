<script>
	import Affiche from "$lib/images/poster-campaign.png";
	import WaterfallInfos from "./components/WaterfallInfos.svelte";
</script>


<div class="text-lg/8 text-slate-600">
	<div class="flex flex-col md:flex-row md:max-w-screen-lg md:mx-auto">
		<div class="flex flex-col md:w-1/2 mb-16 px-16 md:p-0 justify-center">
			<h1 class="text-3xl font-semibold mb-5 text-center">Presentation of the POP App</h1>
			<p>
				ProtectAnimals is an innovative app designed to combat the mistreatment and abandonment of domestic animals.
				This platform allows every citizen to quickly and easily report worrying situations involving animals in danger.
				With an intuitive and user-friendly interface, users can provide detailed information about animals in distress,
				such as photos, videos, and the exact geolocation of the incident.
			</p>
		</div>

		<div class="md:w-1/2 mx-10 md:mx-0">
			<img src={Affiche} class="size-9/12 md:size-10/12 mx-auto drop-shadow-xl rounded" alt="poster campaign" />
		</div>
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
