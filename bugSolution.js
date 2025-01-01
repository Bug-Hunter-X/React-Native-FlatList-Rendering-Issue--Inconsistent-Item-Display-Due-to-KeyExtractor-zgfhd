const uniqueKeyExtractor = (item) => item.id;

//In your FlatList component:
<FlatList
  data={data}
  keyExtractor={uniqueKeyExtractor}
  renderItem={({item}) => <Text>{item.name}</Text>}
/>

//Data Structure example
const data = [
  { id: '1', name: 'Item 1' },
  { id: '2', name: 'Item 2' },
  { id: '3', name: 'Item 3' },
];