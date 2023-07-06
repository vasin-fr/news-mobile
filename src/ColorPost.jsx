import { StyleSheet, Text, View } from 'react-native';

export const ColorPost = ({name, color}) => {
    return <View style={styles.viewBlcok}>
        <View style={{
            width: 25,
            height: 25,
            borderRadius: 5,
            backgroundColor: `${color}`,
            marginTop: 5,
            marginRight: 10,
        }}></View>
        <View>
            <Text>Name: {name}</Text>
            <Text>Color: {color}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    viewBlcok: {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    }
})