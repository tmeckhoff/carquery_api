/**
 * Created by Tara on 10/13/15.
 */

var myApp = angular.module('myApp', []);


myApp.controller("appController", ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http){

    $scope.vehicle = {};
    $scope.vehicleData = {};
    $scope.allVehicleData = [];



    $rootScope.$on('hideMessages', function(){
        $scope.$apply(function(){
            $scope.showNoDataMessage = false;
        });

    });


$scope.getTrims = function() {
    console.log($scope.search);

    $scope.allVehicleData = [];//empty array of old search results

    $http.jsonp('http://www.carqueryapi.com/api/0.3/?callback=JSON_CALLBACK&cmd=getTrims&keyword=' + $scope.search)
        .then(function (res) {
            $scope.search = "";//clear out search input

            if (res.status !== 200) {
                throw new Error("Failed to fetch vehicles!");

            } else if (res.data.Trims === null) {//if no data comes back, show this message
                $scope.noDataMessage = "Failed to retrieve any vehicles based on that information.";
                $scope.showNoDataMessage = true;

            } else {

                setTimeout(function() {
                    $(".alert").fadeTo(1500, 0).slideUp(500, function(){
                        $scope.showNoDataMessage = false;
                    });
                }, 3000);

                console.log(res.data.Trims);

                for (var i = 0; i < res.data.Trims.length; i++) {
                    $scope.vehicleData.year = res.data.Trims[i].model_year;
                    $scope.vehicleData.make = res.data.Trims[i].make_display;
                    $scope.vehicleData.model = res.data.Trims[i].model_name;
                    $scope.vehicleData.trim = res.data.Trims[i].model_trim;

                    if(res.data.Trims[i].model_engine_cc !== null){
                        $scope.vehicleData.engineCc = res.data.Trims[i].model_engine_cc / 1000;
                        $scope.vehicleData.engineType = res.data.Trims[i].model_engine_type;
                        $scope.vehicleData.engineCycle = res.data.Trims[i].model_engine_cycle;
                    }

                    $scope.vehicleData.transmission = res.data.Trims[i].model_transmission_type;
                    $scope.vehicleData.horsepower = res.data.Trims[i].model_engine_power_ps;
                    $scope.vehicleData.vehicleId = res.data.Trims[i].model_id;
                    $scope.vehicle = {
                        year: $scope.vehicleData.year,
                        make: $scope.vehicleData.make,
                        model: $scope.vehicleData.model,
                        trim: $scope.vehicleData.trim,
                        engineCc: $scope.vehicleData.engineCc,
                        engineType: $scope.vehicleData.engineType,
                        engineCycle: $scope.vehicleData.engineCycle,
                        transmission: $scope.vehicleData.transmission,
                        horsepower: $scope.vehicleData.horsepower,
                        vehicleId: $scope.vehicleData.vehicleId
                    };
                    $scope.allVehicleData.push($scope.vehicle);
                    console.log($scope.allVehicleData);
                }

            }

        });
};


}]);//end of controller

