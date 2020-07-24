// TRY THIS FIRST
// section list- data broken into logical sections
// const SectionListBasics = () => {
//   return (
//     <View style={styles.container}>
//       <SectionList
//         sections={[
//           {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
//           {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
//         ]}
//         renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//         renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//         keyExtractor={(item, index) => index}
//       />
//     </View>
//   );
// }



// Other options
//scollview- renders all elements at once
//flat list- scrolling list of changing, similarly structured data, long changing lists
  // only renders elements currently on screen


// const FlatListBasics = () => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={[
//           {key: 'Devin'},
//           {key: 'Dan'},
//           {key: 'Dominic'},
//           {key: 'Jackson'},
//           {key: 'James'},
//           {key: 'Joel'},
//           {key: 'John'},
//           {key: 'Jillian'},
//           {key: 'Jimmy'},
//           {key: 'Julie'},
//         ]}
//         renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//       />
//     </View>
//   );
// }

