import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Layout } from '@ui-kitten/components';
import { HomeScreenProps } from './Types';

const HomeScreen = ({ navigation }: HomeScreenProps) => {

    const navigateDetails = () => {
        navigation.navigate('Details');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button style={{ width: '50%' }} onPress={navigateDetails}>POKEDEX</Button>
            </Layout>
        </SafeAreaView>
    );

};

export default HomeScreen;