import { StyleSheet, View, Text, NativeModules } from "react-native";
import DeviceInfoModule from 'react-native-device-info';
import SizedBox from "../components/sized-box";
import { BASE_URL_DEV, BASE_URL_PROD, BASE_URL_STAGING } from "../data/constants";

export default function HomeScreen() {

    const bundleId = DeviceInfoModule.getBundleId();
    const env = NativeModules.RNConfig.env;

    var baseUrl = BASE_URL_PROD;
    if (env === 'dev') {
        baseUrl = BASE_URL_DEV;
    } else if (env === 'staging') {
        baseUrl = BASE_URL_STAGING;
    }

    return <View style={styles.container}>
        <Text style={styles.label}>Flavor : { env }</Text>
        <SizedBox height={10} />
        <Text style={styles.label}>Base Url : </Text>
        <Text style={styles.value}>{ baseUrl }</Text>
        <SizedBox height={10} />
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