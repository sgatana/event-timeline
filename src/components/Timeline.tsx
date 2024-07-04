import TimelineItem from './TimelineItem';
import TimelineLabel from './TimelineLabel';
import EventDetails from './EventDetails';
import { events } from '../api';
import TimelineStage from './TimelineStage';

const Timeline = () => {
  const lastEvent = events.length - 1
  return (
    <div className='w-full h-auto mx-auto max-w-screen-xl'>
      <ul className='flex items-center justify-center gap-1'>
        <li className='relative'>
          <TimelineItem isFirstStage transitionWidth='w-36' />
          <TimelineLabel
            text='You are here'
            className='absolute mt-2 -ml-6 pe-8 w-24'
          />
        </li>
        {events.map((event, ind) => {
          return (
            <li className='relative' key={event.label}>
              {event.transitionWidth && (
                <TimelineItem
                  transitionWidth={event.transitionWidth}
                  isBorderDashed={event.isBorderDashed}
                />
              )}
              {event.title ? (
                <EventDetails
                  event={{
                    title: event.title,
                    label: event.label,
                    imgUrl: event.imgUrl,
                    className: event.className,
                    pointerPosition: event.pointerPosition,
                  }}
                  isFinal={event.isFinal}
                />
              ) : (
                <TimelineLabel
                  text={event.label!}
                  className={event.className}
                />
              )}
              {ind === lastEvent &&  <TimelineStage isFinalStage />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Timeline;
