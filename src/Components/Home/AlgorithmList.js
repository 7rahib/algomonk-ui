import React from 'react';
import bst from '../../Assets/image/bst.gif';
import sorting from '../../Assets/image/sorting.gif';
import graphTraversal from '../../Assets/image/dfsbfs.gif';
import path from '../../Assets/image/sssp.gif'
import { Link } from 'react-router-dom';

const AlgorithmList = () => {
    return (
        <div className='my-24'>
            <div className='flex justify-center'>
                <div className=' grid sm:grid-cols-1 lg:grid-cols-3 gap-5'>
                    <div class="card w-96 bg-base-200 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Binary Search Tree</h2>
                        </div>
                        <figure><img src={bst} alt="Shoes" /></figure>
                    </div>
                    <div class="card w-96 bg-base-200 shadow-xl">
                        <div class="card-body">
                            <Link class="card-title" to='/mergeSortDoc'>Sorting Algorithms</Link>
                        </div>
                        <figure><img src={sorting} alt="Shoes" /></figure>
                    </div>
                    <div class="card w-96 bg-base-200 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">BFS and DFS</h2>
                        </div>
                        <figure><img src={graphTraversal} alt="Shoes" /></figure>
                    </div>
                    <div class="card w-96 bg-base-200 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Path Finding Algorithms</h2>
                        </div>
                        <figure><img src={path} alt="Shoes" /></figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlgorithmList;