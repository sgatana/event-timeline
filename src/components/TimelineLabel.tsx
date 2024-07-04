const TimelineLabel = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div className={`text-center ${className}`}>
      <p className='text-white/60'>{text}</p>
    </div>
  );
};

export default TimelineLabel;
