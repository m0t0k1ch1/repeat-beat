var mainCtrl = function($scope) {
    $scope.playlists = [];
    $scope.searchPlaylists = function() {
        SC.get('/playlists', { q: $scope.keyword }, function(playlists) {
            for (var i in playlists) {
                $scope.playlists.push(playlists[i]);
                console.lot('piyo');
            }
        });
    }
}
