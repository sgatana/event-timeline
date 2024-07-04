import { render, screen } from '@testing-library/react';
import Timeline from '../Timeline';

describe('Timeline Component', () => {
  it('renders Timeline component', () => {
    render(<Timeline />);
    const firstTimelineEvent = screen.getByText(/you are here/i);
    expect(firstTimelineEvent).toBeInTheDocument();
  });
})
