function MinCoinChange(coins){
    var coins=coins;
    var cache={};
    this.makeChange=function(amount){
       var me=this;
       if(amount<=0){
           return [];
       }
       if(cache[amount]){
           return cache[amount];
       }
       var min=[],newMin,newAmount;
       for(var i=0;i<coins.length;i++){
           var coin=coins[i];
           newAmount=amount-coin;
           if(newAmount>=0){
               newMin=me.makeChange(newAmount);
           }
           if(
               newAmount>=0&&
               (newMin.length<min.length-1||!min.length)
               &&(newMin.length||!newAmount)
           ){
             min=[coin].concat(newMin);
           }
       }
       return (cache[amount]=min);
    };
    this.getCache=function(){
      return cache;
    }
};
var minCoinChange=new MinCoinChange([1,5,10,25]);
