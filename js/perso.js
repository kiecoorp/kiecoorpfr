angular.module('jekyllApp',[]).filter('matchesQuery', function(){
  return function(items, query){

    console.log(query);
    if (!query || query.length < 3) return [];

    if (typeof query == "undefined") return [];
    var alternate = query.replace(/ /g,"_").toLowerCase();
    var lcQuery = query.toLowerCase();
    var arrayToReturn = [];
    for (var i=0; i<items.length; i++) {
      if (items[i] && (items[i].title.toLowerCase().indexOf(lcQuery) !== -1  || items[i].tags.indexOf(alternate) !== -1 || items[i].categories.indexOf(alternate) !== -1 || items[i].content.indexOf(alternate) !== -1)) {
        arrayToReturn.push(items[i]);
      }
    }
    return arrayToReturn;
  };
});

function PostListCtrl($scope, $http) {
  $scope.query = "";
  $scope.posts = [];
  $http.get('/search.json').success(function(data) {
    $scope.posts = data;
  });
}

