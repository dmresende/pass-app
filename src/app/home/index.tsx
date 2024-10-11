import React from 'react';
import { SafeAreaView, Text } from "react-native";
import HomeScreen from "@/src/screens/home/Home";

const HomeIndex = () => {
    return (
        <SafeAreaView className="flex-1">
            <HomeScreen />
        </SafeAreaView>
    );
};

export default HomeIndex;
