import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  Text,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  nextTo?: Boolean;
}

export function Button({ title, nextTo, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <Text style={styles.buttonText}>
        {title}
        {nextTo && <Feather name="chevron-right" style={styles.buttonIcon} />}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.heading,
    fontSize: 24,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 24,
  },
});
