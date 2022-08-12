import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Card, List, Text } from "@ui-kitten/components";
import { PokemonState } from "./Types"

const Header = (props: { name: string, base_experience: number }) => (
    <View>
        <Text style={styles.headerName}>{props.name}</Text>
        <Text style={styles.baseExperience}>{props.base_experience}</Text>
    </View>
);

export default class Pokemon extends React.Component<PokemonState> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Card style={[this.props.style, styles.pokemonCard]} header={Header({ name: this.props.name, base_experience: this.props.base_experience })}>
                <View style={styles.pokemonDesc}>
                    <View style={styles.pokemonProps}>
                        <Text style={[styles.pokemonDescText, styles.pokemonTitles]}>Altura: </Text>
                        <Text style={[styles.pokemonDescText, styles.pokemonValues]}>{this.props.height}</Text>
                    </View>
                    <View style={styles.pokemonProps}>
                        <Text style={[styles.pokemonDescText, styles.pokemonTitles]}>Peso: </Text>
                        <Text style={[styles.pokemonDescText, styles.pokemonValues]}>{this.props.weight}</Text>
                    </View>
                    {/*
                    <Button
                        style={{ width: '50%' }}
                        onPress={() => {
                            // console.log(this.props.types)
                            console.log(getPokemonTypes(this.props.types))
                        }}
                    >CARGAR POKEMONES</Button>
                    */}
                    <View style={styles.pokemonProps}>
                        <Text style={[styles.pokemonDescText, styles.pokemonTitles]}>Tipo:</Text>
                    </View>
                    <List
                        style={styles.pokemonTypes}
                        data={getPokemonTypes(this.props.types)}
                        renderItem={renderItemPokemonTypes}
                        listKey={this.props.name + 'Types'}
                    />
                    <View style={styles.pokemonProps}>
                        <Text style={[styles.pokemonDescText, styles.pokemonTitles]}>Habilidades:</Text>
                    </View>
                    <List
                        style={styles.pokemonAbilities}
                        data={getPokemonAbilities(this.props.abilities)}
                        renderItem={renderItemPokemonAbilities}
                        listKey={this.props.name + 'Abilities'}
                    />
                </View>
            </Card>
        );
    }

}

const getPokemonTypes = (pokemonTypes: any) => {
    return pokemonTypes.map((pokemon: any) => ({ name: pokemon.type.name }));
};

const renderItemPokemonTypes = (types: any) => (
    <Text style={[styles.pokemonDescText, styles.pokemonValues, styles.pokemonTypes]}>{types.item.name}</Text>
);

const getPokemonAbilities = (pokemonAbilities: any) => {
    return pokemonAbilities.map((pokemon: any) => ({ name: pokemon.ability.name }));
};

const renderItemPokemonAbilities = (abilities: any) => (
    <Text style={[styles.pokemonDescText, styles.pokemonValues, styles.pokemonAbilities]}>{abilities.item.name}</Text>
);

const styles = StyleSheet.create({
    pokemonCard: {
        marginVertical: 4,
        marginHorizontal: 2,
        width: 120,
        height: 170
    },
    headerName: {
        marginHorizontal: -20,
        marginVertical: -16,
        textTransform: 'capitalize',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 13,
        color: 'darkorange'
    },
    baseExperience: {
        marginHorizontal: -20,
        marginTop: 15,
        marginBottom: -30,
        textTransform: 'uppercase',
        textAlign: 'right',
        fontStyle: 'italic',
        fontSize: 10,
        fontWeight: 'bold',
        color: 'rgb(237,62,62)'
    },
    pokemonDesc: {
        marginHorizontal: -20,
        marginVertical: -16
    },
    pokemonDescText: {
        fontSize: 11,
        fontWeight: 'bold'
    },
    pokemonProps: {
        flexDirection: 'row'
    },
    pokemonTitles: {
        width: '70%',
        color: 'royalblue'
    },
    pokemonValues: {
        width: '30%',
        fontStyle: 'italic',
        textAlign: 'right',
        color: 'white'
    },
    pokemonTypes: {
        width: '100%',
        fontStyle: 'normal',
        fontWeight: 'normal',
        textAlign: 'center',
        textTransform: 'uppercase',
        backgroundColor: 'transparent'
    },
    pokemonAbilities: {
        width: '100%',
        textTransform: 'capitalize',
        backgroundColor: 'transparent'
    }
});