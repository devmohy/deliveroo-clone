import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import { AdjustmentsIcon, ChevronDownIcon, SearchIcon, UserIcon } from 'react-native-heroicons/outline'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
// import sanityClient  from '../sanity';

export default function HomeScreen() {
  const navigation = useNavigation();
  const {featuredCategories , setFeaturedCategories } = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }
  , [])

  useEffect(() => {
    // sanityClient
    // .fetch(
    //   '*[_type == "categories"]'
    // ).then(data => {
    //   setFeaturedCategorie(data);
    // })
  }
  , [])


  return (
    <SafeAreaView className="bg-gray-50 pt-5">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image 
            source={{
              uri: 'https://links.papareact.com/wru'
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 tex-xs">Deliver Now</Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={35} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>

        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
            <SearchIcon color="gray" size={20} />
            <TextInput 
              placeholder="Restaurant and cuisine"
              keyboardType='default'
            />
          </View>
          <AdjustmentsIcon color="#00CCBB" />
        </View>

        {/* Body */}
        <ScrollView>
          {/* Categories */}
          <Categories />

          {/* Featured Row */}
          <FeaturedRow 
            id="1"
            title="Featured"
            description="Paid placement from partners"
          />
          <FeaturedRow 
            id="2"
            title="Tasty Discounts"
            description="Everyone's been enjoying these juicy discount"
          />
          <FeaturedRow 
            id="3"
            title="Offers near you!"
            description="Why not support your local restaurant tonight!"
          />
        </ScrollView>
    </SafeAreaView>
  )
}