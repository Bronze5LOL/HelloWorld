var n:number=10;
function Creat(n:number):void{
    //var pyramid:string;
    var i,j,k:number;
    for(i=1;i<=n;i++){
        var pyramid="";
        for(j=0;j<n-i;j++){
            pyramid+=" ";
        };
        for(k=0;k<(2*i-1);k++){
            pyramid+="*";
        }
        console.log(pyramid);
    }
}
Creat(n);