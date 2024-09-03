'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import IconMultipleForwardRight from '@/components/icon/icon-multiple-forward-right';

const TrendingTags = () => {
    return(
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                    <li>
                        <Link href="/" className="text-primary hover:underline">
                            Dashboard
                        </Link>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                        <span>Top Trending Tags</span>
                    </li>
                </ul>

        <div className="pt-5">
        <div className="panel h-full w-full">
            <div className="mb-5 flex items-center justify-between">
                {/* Updated heading */}
                <h5 className="text-lg font-semibold dark:text-white-light">Top Trending Tags</h5>
            </div>
            <div className="table-responsive">
                <table className="w-full">
                    <thead>
                        <tr className="border-b-0">
                            {/* Updated column headers */}
                            <th className="text-center">Tags</th>
                            <th className="text-center">Tag Used</th>
                            <th className="text-center">Entities Added</th>
                            <th className="text-center ltr:rounded-r-md rtl:rounded-l-md">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Updated rows with specified data and icons */}
                        <tr className="text-center">
                            <td>#Love</td>
                            <td>1M</td>
                            <td>50M</td>
                            {/* Added icon next to the Status */}
                            <td><span className="flex text-red-500"><IconMultipleForwardRight className="mr-2" />Trending</span></td>
                        </tr>
                        <tr className="text-center">
                            <td>#ThankYou</td>
                            <td>90,000</td>
                            <td>45M</td>
                            <td><span className="flex text-blue-500"><IconMultipleForwardRight className="mr-2" />Moderate</span></td>
                        </tr>
                        <tr className="text-center">
                            <td>#Gratitude</td>
                            <td>85,467</td>
                            <td>33M</td>
                            {/* Adjusted the color to a lighter shade for "Average" */}
                            <td><span className="flex text-orange-400"><IconMultipleForwardRight className="mr-2" />Average</span></td>
                        </tr>
                        <tr className="text-center">
                            <td>#Apology</td>
                            <td>84,651</td>
                            <td>22M</td>
                            <td><span className="flex text-orange-400"><IconMultipleForwardRight className="mr-2" />Average</span></td>
                        </tr>
                        <tr className="text-center">
                            <td>#Mindfulness</td>
                            <td>98,392</td>
                            <td>10M</td>
                            <td><span className="flex text-orange-400"><IconMultipleForwardRight className="mr-2" />Average</span></td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>       
        </div>  
        </div>          
    );
};

export default TrendingTags;
