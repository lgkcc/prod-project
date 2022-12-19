import { render, screen } from '@testing-library/react';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import renderWithAll from 'shared/lib/tests/renderWithAll';

describe('LanguageSwitcher Tests', () => {
  test('Render test', () => {
    render(renderWithAll(<LanguageSwitcher />));
    expect(screen.getByTestId('languageSwitcher')).toBeInTheDocument();
  });
});
