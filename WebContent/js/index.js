var myApp = angular.module('my_app',[]);
myApp.controller("ctrl3",function($scope){
	$scope.product=[];
	$scope.ading=function()
	{
		$scope.product.push({name:$scope.fname});
		$scope.fname="";
		
	}
	
	$scope.slt=function(x)
{
$scope.selected=x.name;	
$scope.vlue="HELLO";
}
	
});
	myApp.filter("seq", function() {
		var x=function(init)
		{
			var tem=[];
			var pl=['sun','mercurcy','venus','earth','mar','juipter','saturn','uranus','neptune','pluto'];
		for (var x=0;x<= temp.length;x++)
			{
			for (var i=0;i<=input.length;i++)
				{
				if(pl[x]==init[i])
					{
					tem.push(init[i]);
					}
				}
		}
			}
		
				});
			
