import { render, screen } from '@testing-library/react';
import { Typography, TypographyTheme } from './Typography';

describe('Button Tests', () => {
  test('Render test', () => {
    render(<Typography>test</Typography>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('Error theme', () => {
    render(<Typography theme={TypographyTheme.ERROR}>test</Typography>);
    expect(screen.getByText('test')).toHaveClass('error');
  });

  test('Background theme', () => {
    render(<Typography theme={TypographyTheme.BACKGROUND}>test</Typography>);
    expect(screen.getByText('test')).toHaveClass('background');
  });

  test('primary theme', () => {
    render(<Typography theme={TypographyTheme.PRIMARY}>test</Typography>);
    expect(screen.getByText('test')).toHaveClass('primary');
  });

  test('BackgroundInverted theme', () => {
    render(<Typography theme={TypographyTheme.BACKGROUND_INVERTED}>test</Typography>);
    expect(screen.getByText('test')).toHaveClass('backgroundInverted');
  });
});
