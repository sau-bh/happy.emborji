class Solution {
    public void moveZeroes(int[] nums) {
        int i =0;
        while(i  < nums.length){
            if(nums[i]==0){
                break;
            }
            i++;
        }
        for(int j = i+1;j<nums.length;j++){
            if(nums[i]==0 && nums[j] != 0){
                int temp =nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                 i++;
            }
           
            
        }
        
    }
}
