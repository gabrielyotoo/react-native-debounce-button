import { Pressable, PressableProps } from 'react-native';

export interface ThrottleButtonProps extends PressableProps {}

const ThrottleButton = ({ children }: ThrottleButtonProps) => {
  return <Pressable>{children}</Pressable>;
};

export default ThrottleButton;
