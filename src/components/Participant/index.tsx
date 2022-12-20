import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ParticipantProps {
    name: string
    handleParticipantRemove: (participantName: string) => void
}

export function Participant({ name, handleParticipantRemove }: ParticipantProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>

            <TouchableOpacity style={styles.button} onPress={() => handleParticipantRemove(name)}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}