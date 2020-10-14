
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  let arrNew=[]; 
 
  if (arguments[0] === undefined)  {return [];}
  for (let i=0; i<matrix.length; i++) {
    if ( i ==0 )  {arrNew.push(matrix[i]);  }
    else if  ( i %  2 !==0 )    {  arrNew.push(matrix[i].sort(function(a,b){return a-b;}).reverse()); }
    else  {arrNew.push(matrix[i]);  }

  };

return arrNew.flat();
}
