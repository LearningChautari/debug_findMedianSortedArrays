/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = function(nums1, nums2) {
    var i=0, j=0
    var merge=[];
    var median;
    
    //compare and merge the two arrays
    while(i<nums1.length && j<nums2.length){
        if(nums1[i]>=nums2[j]){
            merge.push(nums2[j]);
            j++;
        }
        else{
            merge.push(nums1[i]);
            i++;
        }
    }
    
    //push leftover elements if any num1 and num2 donot have same length
    if (i<nums1.length){merge.push(...nums1.slice(i));}
    if (j<nums2.length){merge.push(...nums2.slice(j));}
    
    // find center and median.
    var center = merge.length/2;
    if( merge.length%2 === 0) {
        median = (merge[center]+merge[center-1])/2;
    } 
    else{
        median = merge[Math.floor(center)];
    }
                        
    return median;
    
    
};

const nums1 = [-3, -1]
const nums2 = [-2]

const  result = findMedianSortedArrays(nums1, nums2);

console.log(result);
