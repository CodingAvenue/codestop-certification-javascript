function factorial(n){
    if(!String(n).match(/^\d+$/)){
      return NaN;
    }
  
    var ans = 1;
    for(var i = 1; i <= n; i++){
      ans *= i;
    }
  
    return ans;
  }
  
  var theInputs = [5];
  if(theInputs.length > 0){
    theInputs.forEach(function(ipt){
      console.log("The factorial of '" + ipt + "' is " + factorial(ipt));
    });
  }else{
    console.log('Enter numbers in the inputs to calculate their factorial');
  }