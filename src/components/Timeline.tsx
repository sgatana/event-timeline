import TimelineItem from './TimelineItem';
import TimelineLabel from './TimelineLabel';
import EventDetails from './EventDetails';
import { events } from '../api';
import TimelineStage from './TimelineStage';

const Timeline = () => {
  const lastEvent = events.length - 1;
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
          const {
            label,
            transitionWidth,
            isBorderDashed,
            isFinal,
            title,
            className,
          } = event;
          return (
            <li className='relative' key={label}>
              {transitionWidth && (
                <TimelineItem
                  transitionWidth={transitionWidth}
                  isBorderDashed={isBorderDashed}
                />
              )}
              {title ? (
                <EventDetails event={event} isFinal={isFinal} />
              ) : (
                <TimelineLabel text={label!} className={className} />
              )}
              {ind === lastEvent && <TimelineStage isFinalStage />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Timeline;
