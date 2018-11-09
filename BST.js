function BinaryTree(){
			var Node=function(key){
				this.key=key;
				this.left=null;
				this.right=null;
			};
			var root=null;
			function insertNode(node,newNode){
				if(newNode.key<node.key){
                  if(node.left===null){
                  	node.left=newNode;
                  }else{
                  	insertNode(node.left,newNode);
                  }
				}else{
                  if(node.right===null){
                  	node.right=newNode;
                  }else{
                  	insertNode(node.right,newNode);
                  }
				}
			}
			this.insert=function(key){
				var newNode=new Node(key);
				if(root===null){
					root=newNode;
				}else{
					insertNode(root,newNode);
				}
			};
		    var printNode=function(node){
                if(node!==null){
                  printNode(node.left);
                  console.log(node.key);
                  printNode(node.right);
                }
                return;
		    }
			this.print=function(){
                printNode(root);
			}
            var findMinNode=function(node,key){
            	while(node&&node.left!==null){
            		node=node.left;
            	}
            	return node;
            }


			var removeNode=function(node,key){
				if(node===null){
					return null;
				}
				if(key<node.key){
					node.left=removeNode(node.left,key);
					return node;
				}else if(key>node.key){
					node.right=removeNode(node.right,key);
					return node;
				}else{
					if(node.left===null&&node.right===null){
						node=null;
						return node;
					}
					if(node.left===null){
                        node=node.right;
                        return node;
					}
					if(node.right===null){
						node=node.left;
						return node;
					}
					var aux=findMinNode(node.right);
					node.key=aux.key;
					node.right=removeNode(node.right,aux.key);
					return node;
				}
			}
			this.remove=function(key){
				root=removeNode(root,key);
			}
		}
		var tree=new BinaryTree();
		var arr=[2,3,4,1,5,6];
		arr.forEach(function(value){
			tree.insert(value);
		});
		tree.print();
		tree.remove(3);
        tree.print();