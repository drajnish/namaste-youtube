import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get('v'));
  return (
    <div className="flex flex-col">
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
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
