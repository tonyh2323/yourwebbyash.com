function uniqueLength(nums) { 
    if(nums.length ===0){
        return 0;
    }
    let i=0;
    let j=1;
    let result=0;
    while(j<nums.length){

       if(nums[j] ===  nums[i]){ 
            result=result+1
            j++;
        }
        else{
            j++;
        }
    i++;
    }
 console.log(result);  
}
const result = uniqueLength([1,1,2,3,4,5,5]);
