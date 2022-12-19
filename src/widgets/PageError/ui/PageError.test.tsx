import { render, screen } from '@testing-library/react';
import { PageError } from 'widgets/PageError';
import renderWithAll from 'shared/lib/tests/renderWithAll';

describe('PageError Tests', () => {
  test('Render test', () => {
    render(renderWithAll(<PageError />));
    expect(screen.getByTestId('PageError')).toBeInTheDocument();
  });
});
