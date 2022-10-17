import { BaseButton, Text } from "./style";

export default function Button({ children, onPress, variant = "default" }) {
    return (
        <BaseButton onPress={onPress} variant={variant}>
            <Text variant={variant}>{children}</Text>
        </BaseButton>
    );
}


