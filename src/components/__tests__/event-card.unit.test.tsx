import { render, screen } from '@testing-library/react';
import EventCard from '../EventCard';
import { events } from '../../api';

describe('EventCard Component', () => {
  it('renders Timeline component', () => {
    render(<EventCard imgUrl={events[0].imgUrl!} />);
    const eventCard = screen.getByTestId('event-card');
    const cardImage = screen.getByRole('img');
    expect(eventCard).toBeInTheDocument();
    expect(cardImage).toBeInTheDocument();
  });
});
