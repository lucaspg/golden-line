import React from 'react';
import RestroomCard from '../RestroomCard';
import RESTROOM_INFOS from '../../constants/restroomInfos';

const RestroomList = () => {
  const restrooms = Object.keys(RESTROOM_INFOS).map((restroom) => {
    const { code: restroomCode, name: title } = RESTROOM_INFOS[restroom];
    return (
      <RestroomCard
        key={restroomCode}
        restroomCode={restroomCode}
        title={title}
      />
    );
  });
  return restrooms;
};

export default RestroomList;
