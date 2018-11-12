function Graph(){
    this.graph=[];
    var find=d=function(i,parent){
       while(parent[i]){
           i=parent[i];
       }
       return i;
    };
    var union=function(i,j,parent){
        if(i!=j){
            parent[j]=i;
            return true;
        }
        return false;
    };
    this.kruskal=function(){
        var length=this.graph.length,
        parent=[],cost,
        ne=0,a,b,u,v,i,j,min;
        cost=initializeColor();
        while(ne<length-1){
            for(i=0,min=INF;i<length;i++){
                for(j=0;j<length;j++){
                    if(cost[i][j]<min){
                        min=cost[i][j];
                        u=i;
                        v=j;
                    }
                }
            }
            u=find(u,parent);
            v=find(v,parent);
            if(union(u,v,parent)){
                ne++;
            }
            cost[u][v]=cost[v][u]=INF;
        }
        return parent;
    }
}