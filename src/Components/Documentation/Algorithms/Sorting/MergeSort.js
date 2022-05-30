import React from 'react';
import mergeSortEx1 from '../../../../Assets/image/sorting/Merge-sort-example1.gif';
import mergeSortEx2 from '../../../../Assets/image/sorting/Merge_sort_algorithm_example2svg.svg';

const MergeSort = () => {
    return (
        <div className='min-h-screen m-5'>
            <h3 className='text-3xl my-5'>Merge Sort Sorting Algorithm</h3>
            <p className='text-lg'>In computer science, merge sort (also commonly spelled
                mergesort) is an efficient, general-purpose,
                comparison-based sorting algorithm. Most implementations
                produce a stable sort, which means that the implementation
                preserves the input order of equal elements in the sorted
                output. Mergesort is a divide and conquer algorithm that
                was invented by John von Neumann in 1945.
            </p>
            <p className='text-lg'>An example of merge sort. First divide the list into
                the smallest unit (1 element), then compare each
                element with the adjacent list to sort and merge the
                two adjacent lists. Finally all the elements are sorted
                and merged.
            </p>
            <div class="w-max my-5">
                <img src={mergeSortEx1} alt='' />
            </div>
            <p className='text-lg'>
                A recursive merge sort algorithm used to sort an array of 7
                integer values. These are the steps a human would take to
                emulate merge sort (top-down).
            </p>
            <div class="w-max my-5">
                <img src={mergeSortEx2} alt='' />
            </div>
            <div className='my-10'>
                <h5 className='text-xl font-semibold my-10'>Complexity</h5>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full text-center">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Best</th>
                                <th>Average</th>
                                <th>Worst</th>
                                <th>Memory</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Merge Sort</td>
                                <td>n(log(n))</td>
                                <td>n(log(n))</td>
                                <td>n(log(n))</td>
                                <td>n</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MergeSort;