import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CryptoPriceList from '../components/CryptoPriceList'
import SingleItem from '../components/SingleItem'
import { Provider } from 'react-redux'
import { store } from '../store/store'

export default function index() {
  return (
    <Provider store={store}>
        <CryptoPriceList />
    </Provider>
    
  )
}

const styles = StyleSheet.create({})