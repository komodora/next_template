import {
  type ButtonProps as MantineButtonProps,
  Button as MantineButton,
  ElementProps,
} from '@mantine/core';

interface ButtonProps
  extends Omit<MantineButtonProps, 'variant'>,
    ElementProps<'button', keyof MantineButtonProps> {
  variant?: 'primary' | 'secondary' | 'tertiary'; // プロジェクト固有の variant を再定義
}

export const Button = ({
  variant = 'primary',
  children,
  ...props
}: ButtonProps) => {
  // variant に基づいて色をマッピング
  const colorMap: Record<
    NonNullable<ButtonProps['variant']>,
    'blue' | 'red' | 'green'
  > = {
    primary: 'blue',
    secondary: 'red',
    tertiary: 'green',
  };
  const color = colorMap[variant];

  return (
    <MantineButton color={color} {...props}>
      {children}
    </MantineButton>
  );
};
