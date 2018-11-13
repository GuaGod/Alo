function matrixChainOrder(p,n){
    var i,j,k,l,q,m=[];
    for(i=1;i<=n;i++){
        m[i]=[];
        m[i][i]=0;
    }
    for(l=2;l<n;l++){
        for(i=1;i<=n-l+1;i++){
            j=i+l-1;
            m[i][j]=Number.MAX_SAFE_INTEGER;
            for(k=i;k<=j-1;k++){
                q=m[i][k]+m[k+1][j]+p[i-1]*p[k]*p[j];
                if(q<m[i][j]){
                    m[i][j]=q;

                }
            }
        }
    }
    return m[1][n-1];
}
var p=[10,100,5,50,1],
    n=p.length;
console.log(matrixChainOrder(p,n));