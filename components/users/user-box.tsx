import { Metadata } from 'next';
import React from 'react';

const UserBox = () => {
    return (
        <div className="flex flex-wrap justify-center">
            <div className="mx-3 mb-5">
                {/* Add margin between cards */}
                <div className="w-full max-w-[20rem] rounded border border-white-light p-5 transition-shadow hover:shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                    <div className="text-center text-black">
                        <div className="mx-auto mb-5 h-20 w-20 overflow-hidden rounded-full">
                            <img src="/assets/images/profile-34.jpeg" alt="profile" className="h-full w-full object-cover" />
                        </div>
                        <h1 className="mb-2 text-[15px] font-semibold">Ranbir Karan</h1>

                        <div className="flex justify-between">
                            <div>
                                <h2>20</h2>
                                <h2>Posts</h2>
                            </div>
                            <div style={{ marginLeft: '20px' }}>
                                {/* Add margin to move "Following" to the right */}
                                <h2>200</h2>
                                <h2>Following</h2>
                            </div>
                            <div>
                                <h2>5K</h2>
                                <h2>Followers</h2>
                            </div>
                        </div>

                        <br />
                        <div className="flex justify-between">
                            <button type="button" className="btn btn-outline-primary mr-2">
                                Edit User
                            </button>
                            <button type="button" className="btn btn-outline-danger">
                                Delete User
                            </button>
                        </div>

                        <div className="m-auto flex justify-center">
                            <button type="button" className="btn btn-outline-success mr-2 mt-2">
                                Temporarily Disable User
                            </button>
                            {/* Added margin-top and margin-right */}
                        </div>

                        <div style={{ marginTop: '20px' }}> {/* Add margin-top to move down the buttons */}</div>

                        <div className="my-4 flex items-center justify-center text-[#e2a03f]">{/* SVGs */}</div>
                        <p className="font-semibold italic">Maecenas nec mi vel lacus condimentum rhoncus dignissim egestas orci. Integer blandit porta placerat. Vestibulum in ultricies.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserBox;
