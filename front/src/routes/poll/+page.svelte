<script>
    import axios from 'axios';
    import { Label, Input } from 'flowbite-svelte';

    axios.defaults.baseURL = 'http://localhost:8000';
</script>

<form class="mt-48 md:max-w-screen-lg md:mx-auto">
    <div class="mb-6">
        <Label for="question-1" class="block mb-2">Have you ever witnessed animal cruelty ?</Label>
        <Input id="question-1" placeholder="Default input" />
    </div>
    <div class="mb-6">
        <Label for="question-2" class="block mb-2">How do you define animal cruelty? (Multiple answers possible)</Label>
        <Input id="question-2" placeholder="Default input" />
    </div>
    <div class="mb-6">
        <Label for="question-3" class="block mb-2">Which types of animals do you think are most vulnerable to cruelty? (Multiple answers possible)</Label>
        <Input id="question-3" placeholder="Default input" />
    </div>
</form>

<button onclick={axios.get('/')}>Fetch</button>
