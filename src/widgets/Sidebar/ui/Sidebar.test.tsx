import { render, screen } from '@testing-library/react';
import renderWithAll from 'shared/lib/tests/renderWithAll';
import { Sidebar } from './Sidebar';

describe('Button Tests', () => {
  test('Render test', () => {
    render(renderWithAll(<Sidebar />, { route: '/' }));
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('Not Collapsed', () => {
    render(renderWithAll(<Sidebar />, { route: '/' }));
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
});
