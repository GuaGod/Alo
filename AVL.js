function AVLTree(){
			var Node=function(key){
				this.key=key;
				this.left=left;
				this.right=right;
			}
			var root=null;
			var heightNode=function(node){
				if(node===null){
					return -1;
				}else{
					return Math.max(heightNode(node.left),heightNode(node.right))+1;
				}
			};
            //总结四种旋转方式
            //RR
            var rotationRR=function(node){
            	var tmp=node.right;
            	node.right=tmp.left;
            	tmp.left=node;
            	return tmp;
            }
            //LL
            var rotationLL=function(node){
            	var tmp=node.left;
            	node.left=tmp.right;
            	tmp.right=node;
            	return tmp;
            };
            //LR
            var rotationLR=function(node){
            	node.left=rotationRR(node.left);
            	return rotataionLL(node);
            }
            //RL
            var rotationRL=function(node){
            	node.right=rotationLL(node.right);
            	return rotationRR(node);
            }


			var insertNode=function(node,element){
			  if(node===null){
			  	node=new Node(element);
			  }else if(element<node.key){
			  	node.left=insertNode(node.left,element);
			  	if(node.left!==null){
			  		if((heightNode(node.left)-heightNode(node.right))>1){
                       if(element<node.left.key){
                       	node=node.rotationLL(node);
                       }else{
                       	node=node.rotationLR(node);
                       }
			  		}
			  	}
			  }else if(element>node.key){
			  	node.right=insertNode(node.right,element);
			  	if(node.right!==null){
			  		if((heightNode(node.right)-heightNode(node.left))>1){
			  			if(element>node.right>key){
			  				node=rotationRR(node);
			  			}else{
			  				node=rotationRL(node);
			  			}
			  		}
			  	}
			  }


			}
		}