import React from 'react';
import RestroomCard from '../RestroomCard';
import RESTROOM_CODES from './restroomCodes';

const Restroom = () => (
  <RestroomCard restroomCode={RESTROOM_CODES.SIXTH_MASC} title="6º Andar - Masculino" />
);

export default Restroom;
