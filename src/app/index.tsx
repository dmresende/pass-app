import { Link } from "expo-router"
import { SafeAreaView } from "react-native"


const index = () => {

    return (
        <SafeAreaView className="flex-1 justify-center items-center">
            <Link href="/home">Home</Link>
            <Link href="/alunos">Alunos</Link>
            <Link href="/passwords">Passwords</Link>
        </SafeAreaView>
    )
}

export default index
