import { StyleSheet } from "react-native";

import { Colors, fontFamily} from '@/styles/stylesGlobal';

export const styles = StyleSheet.create({
    label: {
        color: Colors.gray[400],
        fontSize: 12,
        textTransform: 'uppercase',
        fontFamily: fontFamily.regular
    },
    value: {
        color: Colors.black,
        fontSize: 42,
        fontFamily: fontFamily.bold,
    }
})