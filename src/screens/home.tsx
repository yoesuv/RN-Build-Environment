import { StyleSheet, View, Text } from "react-native";
import DeviceInfoModule from 'react-native-device-info';

export default function HomeScreen() {

    const bundleId = DeviceInfoModule.getBundleId();

    return <View style={styles.container}>
        <Text style={styles.label}>Flavor : </Text>
        <Text style={styles.label}>Base Url : </Text>
        <Text style={styles.value}>{ bundleId }</Text>
        <Text style={styles.label}>Package/Bundle Name: </Text>
        <Text style={styles.value}>{ bundleId }</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 14,
    },
});