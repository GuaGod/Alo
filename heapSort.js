function ArrayList(){
    var array=[];
    this.add=function(item){
        return array.push(item);
    };
    this.toString=function(){
        return array.join();
    };
    var swap=function(array,index1,index2){
        var aux=array[index1];
        array[index1]=array[index2];
        array[index2]=aux;
    };
    var buildHeap=function(array){
        var heapSize=array.length;
        for(var i=Math.floor(array.length/2);i>=0;i--){
            heapify(array,heapSize,i);
        }
    };
    var heapify=function(array,heapSize,i){
        var left=i*2+1,
            right=i*2+2,
            largest=i;
            if(left<heapSize&&array[left]>array[largest]){
                largest=left;
            }
            if(right<heapSize&&array[right]>array[largest]){
                largest=right;
            }
            if(largest!==i){
                swap(array,i,largest);
                heapify(array,heapSize,largest);
            }
    };
    this.heapSort=function(){
        var heapSize=array.length;
        buildHeap(array);
        while(heapSize>1){
            heapSize--;
            swap(array,0,heapSize);
            heapify(array,heapSize,0);
        }
    };
}
var myArray=[4,2,123,643,2,32,213];
var arrayList=new ArrayList();
myArray.forEach(function(value){
   arrayList.add(value);
});
console.log(arrayList.toString());
arrayList.heapSort();
console.log(arrayList.toString());