class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // const tSet = new Set();
        // const sSet = new Set();

        // s.foreach((c)=>{
        //     sSet.add(c)
        // })

        const sSorted = s.split('').sort().join('');
        const tSorted = t.split('').sort().join('');
        // t.sort()
        if (sSorted === tSorted )
            return true;
        else
            return false;
    }
}
