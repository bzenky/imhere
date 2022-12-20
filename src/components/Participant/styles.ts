import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
    },
    name: {
        flex: 1,
        marginLeft: 16,
        fontSize: 16,
        color: '#fff',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44'
    },
    buttonText: {
        fontSize: 24,
        color: '#fff'
    }
})