import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 15,
    }}
    horizontal 
    showsHorizontalScrollIndicator={false}
    >
    <CategoryCard title="Category 1" imgUrl="https://links.papareact.com/gn7"/>
    <CategoryCard title="Category 2" imgUrl="https://links.papareact.com/gn7"/>
    <CategoryCard title="Category 3" imgUrl="https://links.papareact.com/gn7"/>
    <CategoryCard title="Category 3" imgUrl="https://links.papareact.com/gn7"/>
    <CategoryCard title="Category 3" imgUrl="https://links.papareact.com/gn7"/>
    <CategoryCard title="Category 3" imgUrl="https://links.papareact.com/gn7"/>
    <CategoryCard title="Category 3" imgUrl="https://links.papareact.com/gn7"/>
    <CategoryCard title="Category 3" imgUrl="https://linkßs.papareact.com/gn7"/>
    </ScrollView>
  )
}

export default Categories