const EventCard = ({
  title,
  imgUrl,
  isFinal = false,
  cardPosition = 'top',
}: {
  title?: string;
  imgUrl: string;
  isFinal?: boolean;
  cardPosition?: 'top' | 'bottom';
}) => {
  const positionClass = cardPosition === 'top' ? '-top-1' : '-bottom-1';
  const bgColor = isFinal ? 'bg-light-cyan' : 'bg-dark-cyan';
  const heightClass = isFinal ? 'h-auto' : 'h-[136px]';
  return (
    <div
      className={`w-[130px] ${heightClass} p-2 ${bgColor} relative rounded-[5px] flex flex-col gap-y-2 z-10 shadow-md justify-around text-balance leading-[18.2px] ${
        isFinal && '-ml-[67px]'
      }`}
    >
      <img src={imgUrl} alt={title} className='w-full' />
      {title}
      <div
        className={`${bgColor} -z-10 absolute w-[14.79px] h-[14.79px] ${
          isFinal ? 'right-6' : 'left-[50%] -translate-x-[50%]'
        } rotate-45 ${positionClass}`}
      />
    </div>
  );
};
export default EventCard;
