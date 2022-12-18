import { render, screen } from '@testing-library/react';
import renderWithTranslation from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { PageError } from 'widgets/PageError';

describe('PageError Tests', () => {
  test('Render test', () => {
    render(renderWithTranslation(<PageError />));
    expect(screen.getByTestId('PageError')).toBeInTheDocument();
  });
});
