import { Appbar } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';

export default function CustomNavigationBar({ navigation, route, options, back }) {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header style={{ backgroundColor: '#7cddcc',height: 40 }}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} color="#051C64" /> : null}
      <Appbar.Content title={title} titleStyle={{ color: '#051C64', fontWeight: 'bold', }} />
      {!back && (
        <Appbar.Action icon="magnify" onPress={() => {}} color="#051C64" />
      )}
    </Appbar.Header>
  );
};