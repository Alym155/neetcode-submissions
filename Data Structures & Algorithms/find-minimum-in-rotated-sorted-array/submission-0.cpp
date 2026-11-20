class Solution {
public:
    int findMin(vector<int> &nums) {
        int target=0;
        target = *min_element(nums.begin(),nums.end());
        return(target);
        
    }
};
