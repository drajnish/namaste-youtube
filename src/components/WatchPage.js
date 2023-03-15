import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });

  const [searchParams] = useSearchParams();
  console.log(searchParams.get('v'));
  return (
    <div className="px-5">
      <iframe
        width="1000"
        height="400"
        src={'https://www.youtube.com/embed/' + searchParams.get('v')}
        title="Gaslight | Official Trailer | Sara Ali Khan | Vikrant Massey | Chitrangada Singh"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
