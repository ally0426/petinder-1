myApp.controller('PetsController', function (UserService, PetsService) {
    console.log('PetsController created');
    var self = this;
    self.userService = UserService;
    self.petsService = PetsService;
    self.pets = PetsService.getPets();

    console.log('PetsController loaded');

    self.getNextPet = function () {
        //need this line i think
        // self.currentPet = PetsService.getPets();
        self.petsService.count = self.petsService.count+1;
    };

    self.lovePet = function (petId) {
        PetsService.saveThisPet(petId);
        //saves pet info when like is clicked
        console.log('save button clicked');
        console.log('pet loved is', petId);
        //sends object to service to send to post route to db 
        self.getNextPet();
    };

    self.showMore = function () {
        self.showPetData = true;
    }

    self.hideMore = function () {
        self.showPetData = false;
    }


});
