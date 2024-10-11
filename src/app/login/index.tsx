import React from 'react';
import { SafeAreaView } from "react-native";
import LoginScreen from '@/src/screens/login/Login';

const LoginIndex = () => {
    return (
        <SafeAreaView className="flex-1">
            <LoginScreen />
        </SafeAreaView>
    );
};

export default LoginIndex;
