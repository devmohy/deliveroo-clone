import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResturantCard from './ResturantCard'

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Resturant cards */}
        <ResturantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Resturant 1"
          rating={4}
          genre="American"
          address="123 Main St"
          short_description="This is a short description"
          dishes={[]}
          long={-122.4}
          lat={37.7}
        />
        <ResturantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Resturant 1"
          rating={4}
          genre="American"
          address="123 Main St"
          short_description="This is a short description"
          dishes={[]}
          long={-122.4}
          lat={37.7}
        />
        <ResturantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Resturant 1"
          rating={4}
          genre="American"
          address="123 Main St"
          short_description="This is a short description"
          dishes={[]}
          long={-122.4}
          lat={37.7}
        />
        <ResturantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Resturant 1"
          rating={4}
          genre="American"
          address="123 Main St"
          short_description="This is a short description"
          dishes={[]}
          long={-122.4}
          lat={37.7}
        />
        <ResturantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Resturant 1"
          rating={4}
          genre="American"
          address="123 Main St"
          short_description="This is a short description"
          dishes={[]}
          long={-122.4}
          lat={37.7}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow