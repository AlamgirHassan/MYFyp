import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import "./AppliedCandidateList.css"
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';

const AppliedCandidatesList = () => {
    document.body.style.backgroundColor = "#e6f2ff"
    return (


        <>
            <NavigationBar/>
            <h1 className='candidateslist-heading'>Candidates List</h1>

            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div class="card">
                            <div class="card-header">
                                Candidate #1
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Candidate Name</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <button type="button" class="btn btn-primary">Schedule Interview</button>
                            </div>
                        </div>


                    </div>
                    <div className='col'>
                    <div class="card">
                            <div class="card-header">
                                Candidate #2
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Candidate Name</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <button type="button" class="btn btn-primary">Schedule Interview</button>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                    <div class="card">
                            <div class="card-header">
                                Candidate #3
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Candidate Name</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <button type="button" class="btn btn-primary">Schedule Interview</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <div class="card">
                            <div class="card-header">
                                Candidate #4
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Candidate Name</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <button type="button" class="btn btn-primary">Schedule Interview</button>
                            </div>
                        </div>


                    </div>
                    <div className='col'>
                    <div class="card">
                            <div class="card-header">
                                Candidate #5
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Candidate Name</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <button type="button" class="btn btn-primary">Schedule Interview</button>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                    <div class="card">
                            <div class="card-header">
                                Candidate #6
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Candidate Name</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <button type="button" class="btn btn-primary">Schedule Interview</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
            </div>
            <Footer/>

        </>);
};

export default AppliedCandidatesList;
