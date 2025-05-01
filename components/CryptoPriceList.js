import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleItem from './SingleItem';
import { getCryptoCurrency } from '../store/cryptoSlice';

const CryptoPriceList = () => {
    const priceList = useSelector(state => state.crypto.cryptocurrency);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCryptoCurrency());
    }, [])
  return (
    <View>
      <Text style={styles.text}>TOP 100 CRYPTO PRICE LIST</Text>

      <FlatList
      data={priceList}
      renderItem={({item})=><SingleItem item = {item}/>}
      keyExtractor={(item)=> item.id} 
      />
    </View>
  )
}

export default CryptoPriceList

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
        paddingTop: 25,
        textAlign: 'center',
        paddingBottom: 10,
    }
})