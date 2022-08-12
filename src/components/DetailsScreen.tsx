import React from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
import { Button, Divider, Layout, List, Text } from '@ui-kitten/components';
import { DetailsScreenProps, DetailsScreenState } from './Types';
import Pokemon from './Pokemon';

export default class DetailsScreen extends React.Component<DetailsScreenProps, DetailsScreenState> {

    constructor(props: any) {
        super(props)

        this.state = {
            isLoading: true,
            dataSource: undefined,
            comprobarData: undefined
        }
    }

    async componentDidMount() {
        let data: any = []
        for (let i = 1; i <= 30; i++) {
            await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                .then(response => response.json())
                .then(responseJSON => {
                    data.push(responseJSON);
                })
                .catch(error => console.log(error));
        }

        this.setState({
            isLoading: false,
            dataSource: data,
            comprobarData: () => (console.log(this.state.dataSource))
        });
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Divider />
                {this.state.isLoading || !this.state.dataSource ?
                    (
                        <Layout style={styles.container}>
                            <Text status='warning' appearance='hint'>Loading...</Text>
                            <ActivityIndicator />
                        </Layout>
                    ) : (
                        <Layout style={styles.container}>
                            <Text category='h3' status='success' appearance='hint' style={styles.header}>POKEMONES</Text>
                            <Divider />
                            {/*
                            <Button style={{ width: '50%' }} onPress={() => console.log(this.state.dataSource[0].base_experience)}>CARGAR POKEMONES</Button>
                            */}
                            <List
                                style={styles.listContainer}
                                contentContainerStyle={styles.contentContainer}
                                numColumns={3}
                                data={this.state.dataSource}
                                renderItem={renderItem}
                                listKey={'pokemones'}
                            />
                        </Layout>
                    )
                }
            </SafeAreaView >
        );
    }

};

const renderItem = (pokemones: any) => (
    <Pokemon
        style={styles.item}
        name={pokemones.item.name}
        base_experience={pokemones.item.base_experience}
        height={pokemones.item.height}
        weight={pokemones.item.weight}
        types={pokemones.item.types}
        abilities={pokemones.item.abilities}
    />
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        width: '100%',
        textAlign: 'center'
    },
    listContainer: {
        flex: 1
    },
    contentContainer: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        justifyContent: 'space-evenly',
        alignContent: 'center'
    },
    item: {
        // backgroundColor: 'transparent',
    }
});