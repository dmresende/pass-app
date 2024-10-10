import { router } from "expo-router"
import { FlatList, Text, View } from "react-native"

const index = () => {
    const alunos = [
        'Aluno 1',
        'Aluno 2',
        'Aluno 3',
        'Aluno 4',
        'Aluno 5',
    ]



    return (
        <View>
            <Text>Alunos</Text>
            <FlatList
                data={alunos}
                renderItem={({ item }) => <Text onPress={() => router.push(`/alunos/${item}`)}>{item}</Text>}
                keyExtractor={(item) => item}
                ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: 'gray' }} />}
            />

        </View>

    )
}

export default index
