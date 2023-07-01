import { Pressable, PressableProps } from 'react-native';

export interface DebounceButtonProps extends PressableProps {}

const DebounceButton = ({ children }: DebounceButtonProps) => {
  return <Pressable>{children}</Pressable>;
};

export default DebounceButton;
