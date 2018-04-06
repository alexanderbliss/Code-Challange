myApp.controller('HomeController', function ($http, $location) {
    console.log('Home controller created');
    let vm = this;
    vm.createdTemplate = {
    }
    vm.templates = []
    vm.selectedTemplate = {}
    vm.selectedLocation = {}
    vm.selectedTimeOfDay = {}
    vm.selectedGuest = {}
    vm.locations = []
    vm.guests = []


// Creating new template route
    vm.createTemplate = function () {
        console.log('added template');
        console.log(vm.createdTemplate);
        $http.post('/template/new/template', vm.createdTemplate).then(function (response) {
            console.log(response);
        }).catch(function (error) {
        })
    }

    //Get route for retriving existing templates. 
vm.getTemplates = function () {
    $http.get('/template/get/templates').then(function(response){
        vm.templates = response.data;
        console.log('templates', vm.templates);
        
    }).catch(function(err) { 
        console.log('error in templpate get', err);
    })
}
vm.getTemplates();

//gets locations
    vm.getLocations = function () {
        $http.get('/template/get/locations').then(function (response) {
            vm.locations = response.data;
            console.log('vm.locations', vm.locations);
            
        }).catch(function (err) {
            console.log('error in locations get', err);
        })
    }
    vm.getLocations();

    //gets guests
    vm.getGuests = function () {
        $http.get('/template/get/guests').then(function (response) {
            vm.guests = response.data;
            console.log('vm.guests', vm.guests);
            
        }).catch(function (err) {
            console.log('error in guests get', err);
        })
    }
    vm.getGuests();


});
