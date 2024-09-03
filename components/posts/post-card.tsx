'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';
import IconCaretDown from '@/components/icon/icon-caret-down';
import { IRootState } from '@/store';
import { useSelector } from 'react-redux';

const PostCard = ({ id }: { id: number }) => {
    const items = ['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg'];

    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    return (
        <div>
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                navigation={{
                    nextEl: `.swiper-button-next-ex${id}`,
                    prevEl: `.swiper-button-prev-ex${id}`,
                }}
                pagination={{ clickable: true }}
                className="swiper mx-auto mb-5 max-w-md"
                dir={themeConfig.rtlClass}
                key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
            >
                <div className="absolute flex w-full justify-between p-2">
                    <button
                        className={`swiper-button-prev-ex${id} rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:left-2 rtl:right-2`}>
                        <IconCaretDown className="h-5 w-5 rotate-90 rtl:-rotate-90" />
                    </button>
                    <button
                        className={`swiper-button-next-ex${id} rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:right-2 rtl:left-2`}>
                        <IconCaretDown className="h-5 w-5 -rotate-90 rtl:rotate-90" />
                    </button>
                </div>
                <div className="flex justify-center">
                    <img src="/assets/images/profile-7.jpeg" alt="img" className="h-12 w-12 rounded-full" />
                </div>
                {/* Set float to left and add margin */}
                <div className="flex flex-col gap-3">
                    {/* Adding margin to the left to create space */}
                    <div>
                        <h4 className="text-center text-xl font-bold text-primary">Rahul Prem</h4>
                        <p className="text-center text-xs">45 min ago</p>
                    </div>
                    <h4>
                        Had an Awesome Night Hope you all doing great.Whether it was because of accomplishing something meaningful, spending time with loved ones, or simply enjoying the little moments
                        that bring joy, those are the days that truly enrich our lives. Cherish these moments and let them serve as reminders of the beauty and positivity that surround us.{' '}
                    </h4>
                    <div className="z-50 flex justify-between">
                        <button type="button" className="btn btn-primary">
                            <p>View Post</p>
                        </button>
                        <button type="button" className="btn btn-danger">
                            <p>Delete Post</p>
                        </button>
                    </div>
                </div>
                <div className="swiper-wrapper">
                    {items.map((item, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <img src={`/assets/images/${item}`} className="mb-2 max-h-80 w-full object-cover" alt="itemImage" />
                            </SwiperSlide>
                        );
                    })}
                </div>
            </Swiper>
        </div>
    );
};

export default PostCard;
