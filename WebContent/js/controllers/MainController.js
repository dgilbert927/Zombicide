app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Select Your Characters'; 
/*  $scope.promo = 'The most popular books this month.';
*/  $scope.characters =
  [
    {
    	name: 'Ann',
      price: 19,
      pubdate: new Date('2014', '03', '08'),
      card: 'src/ID-Ann.jpg',
      likes: 0,
      dislikes: 0
    },
    {
    	name: 'Baldric',
      price: 8,
      pubdate: new Date('2013', '08', '01'),
      card: 'src/Zomb-Fan-ID-CARDS-3-2-Baldric.jpg',
      likes: 0,
      dislikes: 0
    },
    {
    	name: "Clovis",
      price: 12,
      pubdate: new Date('1940', '08', '01'),
      card: 'src/Zomb-Fan-ID-CARDS-3-3-Clovis.jpg',
      likes: 0,
      dislikes: 0
    },
    {
    	name: "Samson",
      price: 100,
      pubdate: new Date('1967', '01', '01'),
      card: 'src/Zomb-Fan-ID-CARDS-3-4-Samson.jpg',
      likes: 0,
      dislikes: 0
    },
    {
    	name: "Nelly",
        price: 100,
        pubdate: new Date('1967', '01', '01'),
        card: 'src/Zomb-Fan-ID-CARDS-3-5-Nelly.jpg',
        likes: 0,
        dislikes: 0
    },
    {
    	name: "Silas",
        price: 100,
        pubdate: new Date('1967', '01', '01'),
        card: 'src/Zomb-Fan-ID-CARDS-3-6-Silas.jpg',
        likes: 0,
        dislikes: 0
    }
    
  ];
  $scope.plusOne = function(index) {
  	$scope.characters[index].likes += 1;
  };
  
  $scope.minusOne = function(index) {
  	$scope.characters[index].dislikes -= 1;
  }
  /*$scope.check = function() {
	$scope.check1 = 'glyphicon glyphicon-check';
  }
  $scope.toggle = function($scope){
	  this.b.stat = !this.b.state;
  }*/
  $scope.custom = true;
  $scope.toggleCustom = function() {
      $scope.custom = $scope.custom === false ? true: false;
  };
  $scope.check = 'src/checkmark.png';
}]);
