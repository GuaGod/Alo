function ArrayList(){
    var array=[];
    this.insert=function(item){
        array.push(item);
    };
    this.toString=function(){
        return array.join();
    };
    var swap=function(array,index1,index2){
        var aux=array[index1];
        array[index1]=array[index2];
        array[index2]=aux;
    };
        var partition=function(array,left,right){
        var pivot=array[Math.floor((right+left)/2)],
            i=left,
            j=right;
        while(i<=j){
            while(array[i]<pivot){
                i++;
            }
            while(array[j]>pivot){
                j--;
            }
            if(i<=j){
                swap(array,i,j);
                i++;
                j--;
            }
        }
        return i;
    };
    var quick=function(array,left,right){
        var index;
        if(array.length>1){
            index=partition(array,left,right);
            if(left<index-1){
                quick(array,left,index-1);
            }
            if(index<right){
                quick(array,index,right);
            }
        }
    };
    this.quickSort=function(){
        quick(array,0,array.length-1);
    };
}