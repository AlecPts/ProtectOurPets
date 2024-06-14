<script>
    import axios from 'axios';
    import { Label, Input, Radio } from 'flowbite-svelte';

    axios.defaults.baseURL = 'http://localhost:8000';
</script>

<form class="mt-48 md:max-w-screen-lg md:mx-auto">
    <div class="mb-6">
        <Label for="question-1" class="block mb-2">Have you ever witnessed animal cruelty ?</Label>
        <Radio name="question-1">Yes</Radio>
        <Radio name="question-1">No</Radio>
    </div>
    <div class="mb-6 text-lg flex flex-col">
        <h5>How do you define animal cruelty? (Multiple answers possible)</h5>

        <label for="question-1" class="text-gray-900">
            <input id="question-1" type="radio" name="question-1-radio" class="size-5 mr-3 bg-gray-100 border-gray-300 focus:ring-primary-500 focus:bg-primary-600 focus:ring-2">
            Default radio
        </label>

        <label for="question-1" class="ms-2 text-gray-900">
            <input id="question-1" type="radio" name="question-1-radio" class="size-5 bg-gray-100 border-gray-300 focus:ring-primary-500 focus:bg-primary-600 focus:ring-2">
            Default radio
        </label>

        <label for="question-1" class="ms-2 text-gray-900">
            <input id="question-1" type="radio" name="question-1-radio" class="size-5 bg-gray-100 border-gray-300 focus:ring-primary-500 focus:bg-primary-600 focus:ring-2">
            Default radio
        </label>

        <label for="question-1" class="ms-2 text-gray-900">
            <input id="question-1" type="radio" name="question-1-radio" class="size-5 bg-gray-100 border-gray-300 focus:ring-primary-500 focus:bg-primary-600 focus:ring-2">
            Default radio
        </label>
    </div>
    <div class="mb-6">
        <Label for="question-3" class="block mb-2">Which types of animals do you think are most vulnerable to cruelty? (Multiple answers possible)</Label>
        <Input id="question-3" placeholder="Default input" />
    </div>
    <div class="mb-6">
        <Label for="question-4" class="block mb-2">Which types of animals do you think are most vulnerable to cruelty? (Multiple answers possible)</Label>
        <Input id="question-4" placeholder="Default input" />
    </div>
    <div class="mb-6">
        <Label for="question-5" class="block mb-2">Which types of animals do you think are most vulnerable to cruelty? (Multiple answers possible)</Label>
        <Input id="question-5" placeholder="Default input" />
    </div>
    <div class="mb-6">
        <Label for="question-6" class="block mb-2">Which types of animals do you think are most vulnerable to cruelty? (Multiple answers possible)</Label>
        <Input id="question-6" placeholder="Default input" />
    </div>
    <div class="mb-6">
        <Label for="question-7" class="block mb-2">Which types of animals do you think are most vulnerable to cruelty? (Multiple answers possible)</Label>
        <Input id="question-7" placeholder="Default input" />
    </div>

</form>

