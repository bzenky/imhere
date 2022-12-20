import { useState } from 'react'
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home() {
    const [participantList, setParticipantList] = useState<string[]>([])
    const [participant, setParticipant] = useState('')

    function handleParticipantAdd(participant: string) {
        const checkIfParticipantAlreadyExists = participantList.includes(participant.trim())

        if (checkIfParticipantAlreadyExists) {
            Alert.alert('Participante Existe', 'Participante já cadastrado na lista.')
        } else {
            setParticipantList((state) => {
                return [...state, participant]
            })

            setParticipant('')
        }
    }

    function handleParticipantRemove(participantName: string) {
        const filteredParticipantList = participantList.filter(participant => participant !== participantName)

        Alert.alert("Remover", `Deseja remover o participante: ${participantName}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipantList(filteredParticipantList)
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                    value={participant}
                    onChangeText={setParticipant}
                />

                <TouchableOpacity style={styles.button} onPress={() => handleParticipantAdd(participant)}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                keyExtractor={item => item}
                data={participantList}
                renderItem={({ item }) => {
                    return (
                        <Participant name={item} handleParticipantRemove={handleParticipantRemove} />
                    )
                }}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.emptyListText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                    </Text>
                )}
            />
        </View>
    )
}