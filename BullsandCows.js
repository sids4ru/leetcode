/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
 var getHint = function(secret, guess) {
  var g = "";
  var s = "";
  var bulls = 0;
  var map = {}
    for(var i=0;i<secret.length;i++){
      if(secret[i] === guess[i]){
          bulls++;
      }
      else{
          g+=guess[i];
          s+=secret[i];
      }

  }  
  var cows = 0;
  secret = s;
  for(var i=0;i<secret.length;i++){
      var curr = secret[i];
      var j=i+1;
      while(j<secret.length){
          if(secret[j] === curr){
              j++;
          }else break;
      }
      var sub = secret.substring(i,j);
      map[sub] = 1;
      i=j-1;
  }


  for(var i=0; i<g.length;i++){
    var curr = g[i];
    var j=i+1;
    while(j<secret.length){
        if(g[j] === curr){
            j++;
        }else break;
    }
    var sub = g.substring(i,j);
    if(map[sub])
        cows+=sub.length;
    /*var sub = secret.substring(i,j);
    map[sub] = 1;
    i=j-1;  */
    /*
    if(map[g[i]] && map[g[i]]>0){
        cows++;
        map[g[i]]--;
      }*/
  }
  return ""+bulls+"A"+cows+"B";
};
console.log(getHint(
    "011",
"110"
))