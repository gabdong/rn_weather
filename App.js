import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/**
 * g View       : container -> import 필수
 * g Text       : 모든 text는 Text component 안에 있어야함
 * g StatusBar  : 상단바 -> 시계, wifi, 배터리 등
 */
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}

/**
 * g StyleSheet.create() : 스타일 object 생성, 필수는 아님, component에 style={{style Object}}로 적용 가능, StyleSheet.create() 생략 가능 -> 일반적으로 style Object는 따로 분리함
 * 
 * g web에서 사용하던 style을 모두 사용하지는 못함
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    fontSize: '24',
    color: 'red'
  }
});