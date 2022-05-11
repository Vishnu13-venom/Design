import { Text, View, Image, Dimensions } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Feather'
export default class CartView extends Component {
  render() {
    return (
      //Necessary Comments
      // Main View
      <View style={{ flexDirection: 'row', marginVertical: 16 }}>
        {/* Item image */}
        <Image source={require('../assets/item.png')} />
        {/* item detail */}
        <View style={{ backgroundColor: 'white', paddingLeft: 16, width: Dimensions.get('window').width - 105 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <Image style={{ width: 20, height: 20, borderRadius: 10, marginRight: 8 }} source={require('../assets/userBack.png')} />
              <Text>Brand Name</Text>
            </View>
            <Image style={{ tintColor: '#011E46', marginRight: 8 }} source={require('../assets/Check_round_fill.png')} />
          </View>
          <Text style={{ marginTop: 10, color: '#677890', fontSize: 14, fontWeight: '500' }}>Product Name</Text>
         {/* Item price */}
          <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#677890', fontSize: 14, fontWeight: '400' }}>Rs 3500  </Text>
              <Text style={{ color: '#015DD3', fontSize: 12, fontWeight: '400' }}>MP : Rs 1500</Text>
            </View>
            <View style={{ flexDirection: 'row', marginRight: 8 }}>
              <Icon style={{ marginLeft: 10, fontWeight: '500' }} color={"#99A5B5"} name="share-2" size={20} />
              <Icon style={{ marginLeft: 10, fontWeight: '500' }} color={"#99A5B5"} name="heart" size={20} />
            </View>

          </View>
        </View>
      </View>
    )
  }
}