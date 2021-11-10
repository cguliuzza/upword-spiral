const ProfileScreen = ({ navigation, route }) => {
    return (
        <Text>This is {route.params.name}'s profile</Text>,
        <Button
            title="Go to Simba's homepage"
            onPress={() =>
                navigation.navigate('Home', { name: 'Simba' })
            }
        />
    )
};