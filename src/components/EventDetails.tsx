import React from 'react';
import EventCard from './EventCard';
import { Event } from '../api';
import TimelineLabel from './TimelineLabel';

const EventDetails = ({
  event,
  isFinal = false,
}: {
  event: Event;
  isFinal?: boolean;
}) => {
  const { label, className, pointerPosition, title, imgUrl } = event;
  return (
    <div className={`absolute ${className}`}>
      {label && <TimelineLabel text={label} className='mb-1' />}
      <div
        className={`ml-[50%] -translate-x-[50%]  absolute flex flex-col items-center gap-y-4 ${
          pointerPosition === 'top' ? 'flex-col-reverse mt-3 ' : 'mt-6'
        }`}
      >
        <EventCard
          title={title}
          cardPosition={pointerPosition}
          imgUrl={`assets/${imgUrl}`}
          isFinal={isFinal}
        />
        <div className='h-6 border border-light-cyan  w-0' />
      </div>
    </div>
  );
};

export default EventDetails;
