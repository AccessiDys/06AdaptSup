cnedApp.directive('ckEditor', [function() {
    return {
        require: '?ngModel',
        link: function($scope, elm, attr, ngModel) {

            var ck = CKEDITOR.replace(elm[0]);

            ck.on('pasteState', function() {
                $scope.$apply(function() {
                    ngModel.$setViewValue(ck.getData());
                });
            });

            ngModel.$render = function(value) {
                ck.setData(ngModel.$modelValue);
            };

            function updateModel() {
                $scope.$apply(function() {
                    ngModel.$setViewValue(ck.getData());
                });
            }

            ck.on('change', updateModel);
            ck.on('key', updateModel);
            ck.on('dataReady', updateModel);
        }
    };
}]);