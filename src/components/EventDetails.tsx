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
  return (
    <div className={`absolute ${event.className}`}>
      {event.label && <TimelineLabel
              text={event.label}
              className='mb-1'
            />}
      <div
        className={`ml-[50%] -translate-x-[50%]  absolute flex flex-col items-center gap-y-4 ${
          event.pointerPosition === 'top' ? 'flex-col-reverse mt-3 ' : 'mt-6'
        }`}
      >
        <EventCard
          title={event.title}
          cardPosition={event.pointerPosition}
          imgUrl={`assets/${event.imgUrl}`}
          isFinal={isFinal}
        />
        <div className='h-6 border border-light-cyan  w-0' />
      </div>
    </div>
  );
};

export default EventDetails;
