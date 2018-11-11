 IFN=Number.MAX_SAFE_INTEGER;
 function Graph(){
     this.garph=[[0,2,4,0,0,0],
                 [2,0,2,4,2,0],
                 [4,2,0,0,3,0],
                 [0,4,0,0,3,2],
                 [0,2,3,3,0,2],
                 [0,0,0,2,2,0]];
    var minKey=function(dist,visited){
        var min=INF,minIndex=-1;
        for(var v=0;v<dist.length;v++){
            if(visited[v]==false&&dist[v]<=min){
                min=dist[v];
                minIndex=v;
            }
        }
        return minIndex;
    };
     this.prim=function(){
         var parent=[],
             key=[],
             visited=[],
             length=this.graph.length,
             i;
         for(i=0;i<length;i++){
             key[i]=INF;
             visited=false;
         }
         key[0]=0;
         parent[0]=-1;
         for(i=0;i<length-1;i++){
             var u=minKey(key,visited);
             visited[u]=true;
             for(var v=0;v<length;v++){
               if(this.graph[u][v]&&visited[v]==false&&this.graph[u][v]<key[v]){
                   parent[v]=u;
                   key[v]=this.graph[u][v];
               } 
            }
         }
         return parent;
     };

 }