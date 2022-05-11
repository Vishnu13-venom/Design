import { Text, View, Dimensions, Image, SafeAreaView,TouchableOpacity, ImageBackground, ActivityIndicator, Pressable, StyleSheet, Alert, ScrollView } from 'react-native'
import React, { Component } from 'react'
import CartView from '../../Components/CartView'
import Icon from 'react-native-vector-icons/Feather'
export default class CartScreen extends Component {
    render() {
        return (
            // Main View
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {/* Background Image */}
                <ImageBackground style={{ width: Dimensions.get('window').width, height: 295, borderTopLeftRadius: 12, borderTopRightRadius: 12 }} source={require('../../assets/userBack.png')} />

                {/* Influencers detail */}
                <View style={{ flexDirection: 'row', position: 'absolute' }}>
                    <SafeAreaView>
                        {/* View to show influencers detail */}
                        <View style={{ width: Dimensions.get('window').width, flexDirection: 'row', alignItems: "center", justifyContent: 'space-around' }}>
                        <Icon style={{ marginLeft: 10, fontWeight: '500' }} color={"#373737"} name="chevron-left" size={30} />
                            <View style={{ flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between' }}>
                                <Image style={{ width: 50, height: 50, borderRadius: 25, marginRight: 8 }} source={require('../../assets/profile.png')} />
                                <View>
                                    <Text style={{ fontSize: 15, color: '#F2F7FD', fontWeight: '500' }}>Influencers Name</Text>
                                    <Text style={{color:'#F2F7FD',fontSize:14,fontWeight:'400'}}>Follow</Text>
                                </View>
                            </View>
                            <Icon style={{ marginLeft: 10, fontWeight: '500' }} color={"white"} name="more-vertical" size={30} />
                        </View>

                    </SafeAreaView>
                </View>
                {/* Scroll View */}
                <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 10, paddingBottom: 20 }}>

                    {/* Cart Item View/Component */}
                    <CartView />
                    <CartView />
                    <CartView />
                    <CartView />
                    <CartView />
                    <CartView />
                    <CartView />
                    <CartView />
                </ScrollView>
                {/* Add to cart button */}
                <TouchableOpacity style={{position:'absolute',width:'90%',alignItems:'center',bottom:0,marginBottom:60,alignSelf:'center',padding:14,borderRadius:10,backgroundColor:'#015DD3'}}>
                    <Text style={{color:'#FFFFFF',fontSize:14,fontWeight:'700'}}>Add all to cart</Text>
                </TouchableOpacity>
            </View>
        )
    }
}