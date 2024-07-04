import React from 'react';
import TimelineStage from './TimelineStage';

type TimelineItemProps = {
  isFirstStage?: boolean;
  isBorderDashed?: boolean;
  transitionWidth?: string;
  className?: string;
};

const TimelineItem = ({
  isFirstStage,
  isBorderDashed,
  transitionWidth,
  className,
}: TimelineItemProps) => {
  return (
      <div className={`flex gap-x-2 items-center ${className}`}>
        <TimelineStage isFirstStage={isFirstStage} />
        <div className={`${transitionWidth}`}>
          <div
            className={`w-auto border-b-2 border-b-white ${
              isBorderDashed && 'border-dashed'
            }`}
          />
        </div>
      </div>
  );
};

export default TimelineItem;
