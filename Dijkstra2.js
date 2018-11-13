var INF=Number.MAX_SAFE_INTEGER;
function Graph(){
    this.graph=[[0,2,4,0,0,0],
               [0,0,1,4,2,0],
               [0,0,0,0,3,0],
               [0,0,0,0,0,2],
               [0,0,0,3,0,2],
               [0,0,0,0,0,0]];
    var minDistance=function(dist,visited){
       var min=INF,minIndex=-1;
       for(var v=0;v<dist.length;v++){
           if(visited[v]==false&&dist[v]<=min){
               min=dist[v];
               minIndex=v;
           }
       }
       return minIndex;
    };
    this.dijkstra=function(src){
        var dist=[],visited=[],
            length=this.graph.length;
        for(var i=0;i<length;i++){
            dist[i]=INF;
            visited[i]=false;
        }
        dist[src]=0;
        for(var i=0;i<length-1;i++){
            var u=minDistance(dist,visited);
            visited[u]=true;
            for(var v=0;v<length;v++){
                if(!visited[v]&&this.graph[u][v]!=0&&dist[u]!=INF&&
                    dist[u]+this.graph[u][v]<dist[v]){
                        dist[v]=dist[u]+this.graph[u][v];
                    }
            }
        }
        return dist;
    };
}
var graph=new Graph();
var result=graph.dijkstra(0);
console.log(result);