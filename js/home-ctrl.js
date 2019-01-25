var app = angular.module('homeApp', []);

app.controller('homeCtrl', ['$scope','$filter',function($scope, $filter) {
    var ctrl = $scope.ctrl = {};
	$('#selectCharacter').modal('show');
    ctrl.availableCharacters = [{id:0, name: 'Jake'},{id:1, name: 'Debro'},{id:2, name: 'Derek'}];
    

    ctrl.loadChar = function() {
        var temp = ctrl.inputedPassword;
        temp = ctrl.selectedCharacter;
        //$('#selectCharacter').modal('hide');
        jQuery.ajax({
            type: "POST",
            url: 'connect.php',
            dataType: 'json',
            data: {characterId: ctrl.selectedCharacter.name},
            success: function (msg) {
                    alert(msg);
            },
            error: function (msg) {
                    alert(msg);
            }
        });
    }
}]);