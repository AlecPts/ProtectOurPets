<script>
    import axios from 'axios';

    axios.defaults.baseURL = 'http://localhost:8000';
</script>


<div class="mt-48 mb-24 text-center px-10">
    <h1 class="text-4xl font-semibold mb-8">Help us improve POP app !</h1>
    <p class="mb-24">
        Would you like to help us make our application better ? Answer this poll.
        In our opinion, user feedback is the most important factor in a project that lives up to our commitments :)
    </p>
</div>

<hr class="w-40 h-1 mx-auto bg-gray-300 border-0 rounded" />

<form class="mt-24 px-10 md:max-w-screen-sm md:mx-auto">
    <div class="my-16 flex flex-col">
        <h5 class="font-semibold mb-5">1. Have you ever witnessed animal cruelty ?</h5>
        <label>
            <input id="question-1.1" type="radio" name="question-1.1-radio">
            Yes
        </label>

        <label>
            <input id="question-1.2" type="radio" name="question-1.2-radio">
            No
        </label>
    </div>

    <div class="my-16 flex flex-col">
        <h5 class="font-semibold mb-5">2. How do you define animal cruelty? (Multiple answers possible)</h5>
        <label>
            <input id="question-2.1" type="checkbox" name="question-2.1-checkbox" >
            Physical violence
        </label>
        <label>
            <input id="question-2.2" type="checkbox" name="question-2.2-checkbox">
            Exploitation (animal testing, performances)
        </label>
        <label>
            <input id="question-2.3" type="checkbox" name="question-2.3-checkbox">
            Abandonment
        </label>
        <label>
            <input id="question-2.4" type="checkbox" name="question-2.4-checkbox">
            Psychological abuse
        </label>
        <label for="question-2.5">
            Other :
            <input id="question-2.5" type="text" name="question-2.5-text">
        </label>
    </div>

    <div class="my-16 flex flex-col">
        <h5 class="font-semibold mb-5">3. Which types of animals do you think are most vulnerable to cruelty? (Multiple answers possible)</h5>
        <label>
            <input id="question-3.1" type="checkbox" name="question-3.1-checkbox">
            Dogs
        </label>
        <label>
            <input id="question-3.2" type="checkbox" name="question-3.2-checkbox">
            Cats
        </label>
        <label>
            <input id="question-3.3" type="checkbox" name="question-3.3-checkbox">
            Farm animals (cows, pigs, chickens, etc.)
        </label>
        <label>
            <input id="question-3.4" type="checkbox" name="question-3.4-checkbox">
            Exotic animals (snakes, chameleon, etc.)
        </label>
        <label>
            Other :
            <input id="question-2.5" type="text" name="question-2.5-text">
        </label>
    </div>

    <div class="my-16 flex flex-col">
        <h5 class="font-semibold mb-5">4. On a scale of 1 to 5, how serious do you think animal cruelty is in your community ?</h5>
        <label>
            <input id="question-4.1" type="radio" name="question-4.1-radio">
            1 (Not serious at all)
        </label>
        <label>
            <input id="question-4.2" type="radio" name="question-4.2-radio">
            2
        </label>
        <label>
            <input id="question-4.3" type="radio" name="question-4.3-radio">
            3
        </label>
        <label>
            <input id="question-4.4" type="radio" name="question-4.4-radio">
            4
        </label>
        <label>
            <input id="question-4.5" type="radio" name="question-4.5-radio">
            5 (Very serious)
        </label>
    </div>

    <div class="my-16 flex flex-col">
        <h5 class="font-semibold mb-5">5. Are you aware of the laws and regulations regarding animal protection in your country/region ?</h5>
        <label>
            <input id="question-5.1" type="radio" name="question-5.1-radio">
            Yes
        </label>
        <label>
            <input id="question-5.2" type="radio" name="question-5.2-radio">
            No
        </label>
    </div>

    <div class="my-16 flex flex-col">
        <h5 class="font-semibold mb-5">6. What actions do you think are most effective in preventing animal cruelty? (Multiple answers possible</h5>
        <label>
            <input id="question-6.1" type="checkbox" name="question-6.1-checkbox">
            Public education and awareness
        </label>
        <label>
            <input id="question-6.2" type="checkbox" name="question-6.2-checkbox">
            Stricter penalties for perpetrators
        </label>
        <label>
            <input id="question-6.3" type="checkbox" name="question-6.3-checkbox">
            Spaying and neutering campaigns
        </label>
        <label>
            <input id="question-6.4" type="checkbox" name="question-6.4-checkbox">
            Rescuing and adopting abandoned animals
        </label>
        <label>
            <input id="question-6.5" type="checkbox" name="question-6.5-checkbox">
            Regulation and control of animal sales
        </label>
        <label>
            Other :
            <input id="question-6.6" type="text" name="question-6.6-text">
        </label>
    </div>

    <div class="my-16 flex flex-col">
        <h5 class="font-semibold mb-5">7. Do you currently use a mobile application to get information or report cases of animal cruelty ?</h5>
        <label>
            <input id="question-7.1" type="radio" name="question-5.1-radio">
            Yes
        </label>
        <label>
            <input id="question-7.2" type="radio" name="question-5.2-radio">
            No
        </label>
    </div>

    <div class="my-16 flex flex-col">
        <h5 class="font-semibold mb-5">8. If yes, which features do you find most useful in this application ? (Multiple answers possible)</h5>
        <label>
            <input id="question-8.1" type="checkbox" name="question-8.1-checkbox">
            Anonymous reporting of cruelty cases
        </label>
        <label>
            <input id="question-8.2" type="checkbox" name="question-8.2-checkbox">
            Information on laws and regulations
        </label>
        <label>
            <input id="question-8.3" type="checkbox" name="question-8.3-checkbox">
            Tips and resources for animal welfare
        </label>
        <label>
            <input id="question-8.4" type="checkbox" name="question-8.4-checkbox">
            News and awareness campaigns
        </label>
        <label>
            <input id="question-8.5" type="checkbox" name="question-8.5-checkbox">
            Social media and support communities
        </label>
        <label>
            Other :
            <input id="question-8.6" type="text" name="question-8.6-text">
        </label>
    </div>

    <div class="my-16 flex flex-col">
        <h5 class="font-semibold mb-5">9. What new features would you like to see in an application dedicated to preventing animal cruelty? (Multiple answers possible)</h5>
        <label>
            <input id="question-9.1" type="checkbox" name="question-9.1-checkbox">
            Real-time alerts for reported cruelty cases in the area
        </label>
        <label>
            <input id="question-9.2" type="checkbox" name="question-9.2-checkbox">
            Interactive educational tools for children
        </label>
        <label>
            <input id="question-9.3" type="checkbox" name="question-9.3-checkbox">
            Volunteer and donation programs
        </label>
        <label>
            <input id="question-9.4" type="checkbox" name="question-9.4-checkbox">
            Directory of shelters and veterinary clinics
        </label>
        <label>
            <input id="question-9.5" type="checkbox" name="question-9.5-checkbox">
            Online support from animal protection experts
        </label>
        <label>
            Other :
            <input id="question-9.6" type="text" name="question-9.6-text">
        </label>
    </div>

    <div class="my-16 flex flex-col">
        <h5 class="font-semibold mb-5">10. Do you have any suggestions or comments to improve our animal cruelty prevention application ?</h5>
        <p>Yes</p>
        <textarea id="story" name="story" rows="5" cols="33" />
        <label>
            <input id="question-7.2" type="radio" name="question-5.2-radio">
            No
        </label>
    </div>

    <div class="w-60 mx-auto">
        <button type="submit" value="Submit" class="w-full text-white bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-sm py-3 text-center me-2 mb-2">Submit</button>
    </div>
</form>



