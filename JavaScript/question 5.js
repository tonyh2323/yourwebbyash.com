function uniqueLength(nums) {
    let j=0;
    if(nums.length ===0){
        return 0;
    }
    let i=0;
    while(j>nums.length){
        if(nums[j] ==! nums[i]){
            i++;
            nums[i] = nums[j];
            j++;
        }
        else{
            j++;
        }
    }
    i=i+1;
}

const result = uniqueLength([1,1,2,3,4,5,5]);
console.log(result +" yes");
