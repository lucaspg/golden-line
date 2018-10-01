import React from 'react';
import RestroomCard from '../RestroomCard';
import RESTROOM_CODES from '../constants/restroomCodes';

const Restroom = () => (
  <RestroomCard restroomCode={RESTROOM_CODES.SIXTH_MASC_CONS} title="6º Andar - Masculino - Consolação" />
);

export default Restroom;
