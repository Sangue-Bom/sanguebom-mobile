import { TextArea } from "./style";

export default function InputField({
  placeholder,
  secureTextEntry = false,
  onChangeText,
  value,
  variant = "default",
  keyboardType = "default",
  autoCompleteType = "off",
  ...props
}) {
  return (
    <TextArea
      variant={variant}
      placeholder={placeholder}
      secureTextEntry={false}
      onChangeText={onChangeText}
      value={value}
      placeholderTextColor="#FE5D97"
      keyboardType={keyboardType}
      autoCompleteType={autoCompleteType}
      multiline={true}
      {...props}
    />
  );
}
