import { StyleSheet } from "react-native";

import { Colors, fontFamily} from '@/styles/stylesGlobal';

export const styles = StyleSheet.create({
    label: {
        color: Colors.gray[400],
        fontSize: 10,
        textTransform: 'uppercase',
        fontFamily: fontFamily.regular
    },
    value: {
        color: Colors.black,
        fontSize: 16,
        fontFamily: fontFamily.medium,
    }
})