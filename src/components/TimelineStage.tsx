const TimelineStage = ({
  isFirstStage = false,
  isFinalStage = false,
}: {
  isFirstStage?: boolean;
  isFinalStage?: boolean;
}) => {
  const classes = isFirstStage
    ? 'w-[18px] h-[18px] flex justify-center items-center'
    : 'h-2 w-2 ml-1';
  return isFinalStage ? (
    <div className='h-4 w-4 border-r-2 border-t-2 -ml-4 border-white rotate-45' />
  ) : (
    <div className={`rounded-full bg-green ${classes}`}>
      {isFirstStage && <div className='h-2 w-2 bg-cyan rounded-full' />}
    </div>
  );
};
export default TimelineStage;
