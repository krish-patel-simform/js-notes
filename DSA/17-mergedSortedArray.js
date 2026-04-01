// * Write a function that merges two sorted arrays into a single sorted array.

//* merge sort

class MergeSort {
    constructor(arr) {
        this.arr = arr;
    }

    merge(low,mid,high) {

        let i = low;
        let j = mid+1;
        const temp = [];

        while(i <= mid && j <= high)
        {
            if(this.arr[i] <= this.arr[j])
            {
                temp.push(this.arr[i++]);
            }
            else 
            {
                temp.push(this.arr[j++])
            }
        }

        while(i <= mid)
        {
            temp.push(this.arr[i++])
        }
        while(j <= high)
        {
            temp.push(this.arr[j++])
        }

        // copy back
        for(let i=0;i<temp.length;i++)
        {
            this.arr[low+i] = temp[i];
        }

    }
    divide(low, high) {
        if (low >= high) return

        const mid = low + Math.floor((high - low) / 2);

        this.divide(low, mid);
        this.divide(mid + 1, high);

        this.merge(low,mid,high)
    }
    sort()
    {
        this.divide(0,this.arr.length-1);
        return this.arr;
    }
}


const obj = new MergeSort([1,5,3,2,4])

console.log(obj.sort())