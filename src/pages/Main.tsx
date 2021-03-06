import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { standardWidth, standardHeight, standardFontSize } from 'styles';
import { RootStackParamList } from 'screens/RootStackParam';

type MainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;

const Main = () => {
    const navigation = useNavigation<MainScreenProp>();

    return (
        <View style={styles.background}>
            <View style={styles.mainTextView}>
                <Text style={styles.mainText}>메이플스토리</Text>
                <Text style={styles.mainText}>스텟 환산기</Text>
            </View>
            <Pressable style={styles.startButton} onPress={() => navigation.navigate('SelectJob')}>
                <Text style={styles.startText}>시작하기</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'orange',
    },
    mainTextView: {
        position: 'absolute',
        top: standardHeight(120),
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText: {
        fontSize: standardFontSize(50),
        fontWeight: '900',
    },
    startButton: {
        width: standardWidth(300),
        height: standardHeight(50),
        position: 'absolute',
        bottom: standardHeight(100),
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    startText: {
        fontSize: standardFontSize(20),
        fontWeight: '600',
    },
});

export default Main;
