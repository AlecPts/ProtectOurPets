<script>
    import PhoneImage from "$lib/images/phone-image.png";
    import DogIpadImage from "$lib/images/dog-ipad.png";
    import PandaImage from "$lib/images/panda-image.png";
</script>

<div class="my-24 md:max-w-7xl mx-auto">
    <div class="flex flex-col md:flex-row md mx-auto max-w-screen-2xl">
        <div class="w-full md:w-1/2">
            <img src={PhoneImage} class="size-full object-cover" alt="phone" />
        </div>

        <div class="flex flex-col p-16 justify-center w-full md:w-1/2">
            <h3 class="text-3xl font-semibold mb-5">WHICH FEATURES ?</h3>
            <p class="text-left">
                The app offers an anonymous reporting feature, ensuring user safety while encouraging them to participate in this noble cause.
                Reports are verified by a team of moderators and forwarded to the relevant authorities and partner animal protection organizations.
                Additionally, ProtectAnimals includes a case tracking system, allowing users to monitor the progress of actions taken for each report.
            </p>
        </div>
    </div>

    <div class="flex flex-col-reverse md:flex-row mx-auto max-w-screen-2xl md:text-right">
        <div class="flex flex-col p-16 justify-center w-full md:w-1/2">
            <h3 class="text-3xl font-semibold mb-5">WHY THIS PROJECT ?</h3>
            <p>
                As the founders of ProtectOurPets, we are passionate about animal welfare and believe that technology can play a key role in fighting abuse.
                With years of experience in mobile app development and a deep empathy for animals, we created this platform to give a voice to those who cannot defend themselves.
            </p>
        </div>

        <div class="w-full md:w-1/2">
            <img src={DogIpadImage} class="size-full object-cover" alt="dog ipad" />
        </div>
    </div>

    <div class="flex flex-col md:flex-row mx-auto max-w-screen-2xl">
        <div class="w-full md:w-1/2">
            <img src={PandaImage} class="size-full object-cover" alt="panda" />
        </div>

        <div class="flex flex-col p-16 justify-center w-full md:w-1/2">
            <h3 class="text-3xl font-semibold mb-5">JOIN US NOW !</h3>
            <p class="text-left">
                ProtectOurPets aims not only to save animal lives but also to raise public awareness about the importance of respecting and protecting animals.
                Together, through this app, we can make a real difference and build a more just and compassionate world for our furry friends. Join us in this mission and be part of the change with ProtectAnimals.
            </p>
        </div>
    </div>
</div>


<style>
    img {
        height: 550px;
    }
</style>