import React, { useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';


import DraggableFlatList, {
  ScaleDecorator,
  ShadowDecorator,
  OpacityDecorator,
  useOnCellActiveAnimation
} from 'react-native-draggable-flatlist';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Animated from 'react-native-reanimated';

const App: React.FC = () => {
  const ref = useRef(null);
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Santos Futebol Clube',
      subtitle: 'O maior brasileiro do mundo!',
      background: '#fff',
      color: '#000',
      height: 100,
    },
    {
      id: 2,
      name: 'Portuguesa Santista',
      subtitle: 'Série A2 no paulista!',
      background: '#f00',
      color: '#008000',
      height: 100,
    },
    {
      id: 3,
      name: 'Grêmio Foot-Ball Porto Alegrense',
      subtitle: 'Aarereeee... O gremio vai jogar a série B!',
      background: '#1E90FF',
      color: '#fff',
      height: 100,
    },
    {
      id: 4,
      name: 'São Paulo Futebol Clube',
      subtitle: 'Bicharadaaa... (relevem a brincadeira :D)',
      background: '#f00',
      color: '#000',
      height: 100,
    },
    {
      id: 5,
      name: 'Sport Clube Corinthians Paulista',
      subtitle: 'Os caras são perigosos, vou nem zoar hehe',
      background: '#000',
      color: '#fff',
      height: 100,
    },
    {
      id: 6,
      name: 'Sociedade Esportiva Palmeiras',
      subtitle: 'Aarereeee... O gremio vai jogar a série B!',
      background: '#008000',
      color: '#fff',
      height: 100,
    },
  ])

  const renderItem = ({ item, drag }: any) => {
    const { isActive } = useOnCellActiveAnimation();
    return (
      <ScaleDecorator>
        <OpacityDecorator activeOpacity={0.5}>
          <ShadowDecorator>
            <TouchableOpacity
              onLongPress={drag}
              activeOpacity={1}
              style={[
                styles.rowItem,
                {
                  height: item.height,
                  backgroundColor: item.background,
                  elevation: isActive ? 30 : 0
                }
              ]}
            >
              <Animated.View>
                <Text style={[styles.text, { color: item.color }]}>{item.name}</Text>
                <Text style={[styles.subtitle, { color: item.color }]}>{item.subtitle}</Text>
              </Animated.View>
            </TouchableOpacity>
          </ShadowDecorator>
        </OpacityDecorator>
      </ScaleDecorator>
    );
  }

  return (
    <SafeAreaView>
      <GestureHandlerRootView>
        <DraggableFlatList
          ref={ref}
          data={data}
          keyExtractor={(item: any) => item.id}
          onDragEnd={({ data }: any) => setData(data)}
          renderItem={renderItem}
        />
      </GestureHandlerRootView>
      <Text style={{ textAlign: 'justify', margin: 20, fontSize: 17 }}>
        Aplicação desenvolvida somente para abranger conhecimento.{'\n'}{'\n'}
        Para realizar o teste da aplicação, precione um time por alguns milesegundos e arraste o mesmo para baixo ou para cima, assim o mesmo irá trocar de posição.{'\n'}{'\n'}
        OBS: Funcional em dispositivos Android e iOS.{'\n'}{'\n'}
        Créditos: Sujeito programador
      </Text>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  rowItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});