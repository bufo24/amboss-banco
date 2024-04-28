import { deleteItemAsync } from 'expo-secure-store';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSessionStore } from '../../../src/stores/SessionStore';
import { router } from 'expo-router';
import { ROUTES, STORAGE_KEYS } from '../../../src/constants';

export default function Page() {
  const setAuthToken = useSessionStore(s => s.setAuthToken);

  const handleClick = async () => {
    console.log('Deleting auth token...');
    await deleteItemAsync(STORAGE_KEYS.authToken);
    setAuthToken(undefined);
    router.replace(ROUTES.login.main);
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-purple-300 pt-20">
      <StatusBar style="light" />
      <Text>Settings</Text>

      <Pressable
        className="flex flex-col items-center"
        onPress={() => handleClick()}
      >
        <Text>Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
}