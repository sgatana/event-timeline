export type Event = {
  title?: string;
  imgUrl?: string;
  label?: string;
  isFinal?: boolean;
  isBorderDashed?: boolean;
  className: string;
  pointerPosition?: 'top' | 'bottom';
  transitionWidth?: string;
};

export const events: Event[] = [
  {
    title: "Baby's Birth",
    imgUrl: 'family.svg',
    className: '-top-56 text-center -right-3',
    pointerPosition: 'bottom',
  },
  {
    title: 'New home',
    imgUrl: 'home.svg',
    label: 'In 1 year and 9 months',
    className: 'w-28 mt-3 text-center -ml-[22%]',
    pointerPosition: 'top',
    transitionWidth: 'w-48',
  },
  {
    label: 'In 3 years and 2 months',
    className: 'absolute w-28 mt-3 text-center -right-16 top-1',
  },
  {
    title: 'Holiday',
    imgUrl: 'going-holiday.svg',
    className: '-top-[220px] w-32 text-center -ml-[26.5%]',
    pointerPosition: 'bottom',
    transitionWidth: 'w-48',
  },
  {
    title: 'Emergency fund',
    imgUrl: 'em-fund.svg',
    label: 'In 4 years and 9 months',
    className: 'w-28 mt-3 text-center -ml-[16%]',
    pointerPosition: 'top',
    transitionWidth: 'w-72',
  },
  {
    title: 'Debt free',
    imgUrl: 'debt.svg',
    label: 'In 8 years and 11 months',
    className: 'w-28 mt-3 text-center -ml-[15%]',
    pointerPosition: 'top',
    transitionWidth: 'w-72',
    isBorderDashed: true,
  },
  {
    title: 'Retire',
    imgUrl: 'retire.svg',
    className: '-top-56 w-28 text-center -left-52',
    pointerPosition: 'bottom',
  },
  {
    title: 'make a contribution to my community through philanthropy',
    imgUrl: 'vision.svg',
    label: 'Ultimately',
    className: 'mt-12 -right-[60px] w-28 text-center',
    isFinal: true,
    pointerPosition: 'top',
  },
];
