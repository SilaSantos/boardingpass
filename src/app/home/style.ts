import { StyleSheet } from "react-native";
import { Colors , fontFamily} from "@/styles/stylesGlobal";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.black,
      alignItems: 'center',
    },
    header: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: Colors.white,
        fontSize: 24,
        fontFamily: fontFamily.extrabold
    },
    subtitle: {
        color: Colors.gray[300],
        fontSize: 14,
        fontFamily: fontFamily.medium
    },
    ticket: {
        backgroundColor: Colors.white,
        width: '100%',
        borderRadius: 22,
        overflow: 'hidden',
        paddingBottom: 24
    },
    ticketContent: {
        padding: 20
    },
    flight: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 52
    },
    duration: {
        alignItems: 'center',
        gap: 5
    }, 
    hours: {
        color: Colors.gray[400],
        fontSize: 12,
        fontFamily: fontFamily.regular
    },
    label: {
        color: Colors.gray[400],
        fontSize: 12,
        textTransform: 'uppercase',
        fontFamily: fontFamily.regular
    },
    name: {
        color: Colors.black,
        fontSize: 22,
        fontFamily: fontFamily.bold
    },
    detail: {
        marginTop: 50
    },
    inline: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between'
    },
    footer: {
        width: '100%',
        padding: 20,
        flexDirection: 'row',
        gap: 30
    },
    footerContent: {
        flex: 1,
        gap: 24
    }
  });
  