import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import clsx from "clsx";

type Props = {
  title: string;
  onPress?: () => void;
  variant?: "primary" | "secondary";
  size?: "lg" | "md" | "sm";
  icon?: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
  iconSize?: number;
};

export default function Button({
  title,
  onPress,
  variant = "primary",
  size = "lg",
  iconColor = "#ffffff",
  icon,
  iconSize = 25,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={clsx(
        "h-16 rounded-xl flex-row items-center justify-center gap-2",

        size === "lg" && "w-full",
        size === "md" && "w-1/2",
        size === "sm" && "w-1/3",

        variant === "primary" && "bg-primary",
        variant === "secondary" && "bg-secondary border border-primary"
      )}
    >

      <Text
        className={clsx(
          "font-semibold",

          size === "lg" && "text-xl",
          size === "md" && "text-lg",
          size === "sm" && "text-base",

          variant === "primary" && "text-white",
          variant === "secondary" && "text-black"
        )}
      >
        {title}
      </Text>

      {icon && (
        <Ionicons
          name={icon}
          size={iconSize}
          color={iconColor}
        />
      )}
    </TouchableOpacity>
  );
}
