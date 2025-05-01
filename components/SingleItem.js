import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const SingleItem = () => {
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/favicon.png')}/>
            <Text style={styles.symbol}>BTC</Text>
        </View>

        <View style={styles.description}>
            <Text style={styles.text}>Name: </Text>
            <Text style={styles.text}>Price: </Text>
            <Text style={styles.text}>Volumen: </Text>
            <Text style={styles.text}>Price Change: </Text>
            <Text style={styles.text}>Last Update: </Text>
        </View>
    </View>
  )
}

export default SingleItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'orange',
        marginBottom: 10,
        marginHorizontal: 10,
        height: 150,
        borderRadius: 10,
    },

    imageContainer: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        height: '100%',
        width: '100%',
    },

    symbol: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 7,
    },

    description: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },

    text: {
        fontSize: 16,
        paddingBottom: 5,
    },
})