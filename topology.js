function Dictionary(){
    var items={};
    this.has=function(key){
        return items.hasOwnProperty(key);
    };
    this.set=function(key,value){
        items[key]=value;
    };
    this.get=function(v){
      return items[v]; 
    };
    this.delete=function(key){
        if(this,has(key)){
            delete items[key];
            return true;
        }
        return false;
    };
}

function Graph(){
    var vertices=[];
    var adjList=new Dictionary();
    this.addVertex=function(v){
        vertices.push(v);
        adjList.set(v,[]);
    };
    this.addEdge=function(v,w){
        adjList.get(v).push(w);
        adjList.get(w).push(v); 
    };
    var initializeColor=function(){
        var color=[];
        for(var i=0;i<vertices.length;i++){
            color[vertices[i]]='white';
        }
        return color;
    }
    this.toString=function(){
        var string='';
        for(var i=0;i<vertices.length;i++){
            var u=vertices[i];
            string+=u+': ';
            var neighbors=adjList.get(u);
            for(var j=0;j<neighbors.length;j++){
                string+=neighbors[j]+' ';
            }
            string+='\n';
        }
        return string;
    }
    var time=0;
    var DFSVisit=function(u,color,d,f,p){
        console.log('discover '+u);
        color[u]='grey';
        d[u]=++time;
        var neighbors=adjList.get(u);
        for(var i=0;i<neighbors.length;i++){
            if(color[neighbors[i]]=='white'){
                var w=neighbors[i];
                p[w]=u;
                DFSVisit(w,color,d,f,p);
            }
        }
        color[u]='black';
        f[u]=++time;
        console.log('finish '+u);
    }
    this.DFS=function(){
        var color=initializeColor(),
            d=[],
            f=[],
            p=[];
        time=0;
        for(var i=0;i<vertices.length;i++){
            var w=vertices[i];
            d[w]=0;
            f[w]=0;
            p[w]=null;
        }
        for(i=0;i<vertices.length;i++){
            var u=vertices[i];
            if(color[u]=='white'){
                DFSVisit(u,color,d,f,p);
            }
        }
        return {
            discover:d,
            finish:f,
            predecessors:p
        }
    }
}
graph=new Graph();
myVertices=['A','B','C','D','E','F'];
for(i=0;i<myVertices.length;i++){
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A','C');
graph.addEdge('A','D');
graph.addEdge('B','D');
graph.addEdge('B','E');
graph.addEdge('C','F');
graph.addEdge('F','E');
console.log(graph.DFS());
