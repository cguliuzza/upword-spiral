const HomeScreen = ({ navigation }) => {
    return (
      <Text>This is {route.params.name}'s homepage</Text>,
      <Button
        title="Go to Simba's profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Simba' })
        }
      />
    );
};