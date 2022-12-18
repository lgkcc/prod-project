import { render, screen } from '@testing-library/react';
import renderWithTranslation from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';

describe('LanguageSwitcher Tests', () => {
  test('Render test', () => {
    render(renderWithTranslation(<LanguageSwitcher />));
    expect(screen.getByTestId('languageSwitcher')).toBeInTheDocument();
  });
});
