import { useLocalSearchParams } from "expo-router"
import { Text, View } from "react-native"

const index = () => {
    const params = useLocalSearchParams();
    return (
        <View>
            <Text>Aluno: {params.id}</Text>

        </View>
    )
}
export default index
