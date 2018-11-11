var INF=Number.MAX_SAFE_INTEGER;
function Graph(){
    this.graph=[[0,2,4,INF,INF,INF],
               [INF,0,1,4,2,INF],
               [INF,INF,0,INF,3,INF],
               [INF,INF,INF,0,INF,2],
               [INF,INF,INF,3,0,2],
               [INF,INF,INF,INF,INF,0]];
    this.floydWarshall=function(){
        var dist=[],
            length=this.graph.length,
            i,j,k;
        for(i=0;i<length;i++){
            dist[i]=[];
            for(j=0;j<length;j++){
                dist[i][j]=this.graph[i][j];
            }
        }
        for(k=0;k<length;k++){  //length的值有待商榷 应该是从一个点到另一个的最长路线
            for(i=0;i<length;i++){
                for(j=0;j<length;j++){
                    if(dist[i][k]+dist[k][j]<dist[i][j]){
                        dist[i][j]=dist[i][k]+dist[k][j];
                    }
                }
            }
        }
        return dist;
    }
};
var graph=new Graph();
console.log(graph.floydWarshall());