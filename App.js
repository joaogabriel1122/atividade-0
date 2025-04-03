import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const BikeDetails = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Kawasaki_Ninja_400_KRT_SlantView_resized.jpg/640px-Kawasaki_Ninja_400_KRT_SlantView_resized.jpg"
        style={styles.image}
        alt="Kawasaki Ninja 400"
      />

      <View style={styles.card}>
        <Text style={styles.title}>Kawasaki Ninja 400</Text>
        <Text style={styles.description}>
          A Kawasaki Ninja 400 é uma motocicleta esportiva que combina potência, agilidade e um design moderno. Com um motor bicilíndrico de 399cc, oferece excelente desempenho tanto para iniciantes quanto para pilotos experientes. Seu chassi leve proporciona uma pilotagem responsiva e confortável, enquanto o visual agressivo e aerodinâmico reforça sua identidade esportiva. A Ninja 400 é a escolha perfeita para quem busca emoção e eficiência em duas rodas.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Motor:</Text>
        <Text style={styles.description}>399cc, Bicilíndrico, DOHC</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Tanque:</Text>
        <Text style={styles.description}>14 Litros</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Consumo:</Text>
        <Text style={styles.description}>24 km/L</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Câmbio:</Text>
        <Text style={styles.description}>Manual de 6 Marchas</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Ano:</Text>
        <Text style={styles.description}>2023</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Quilometragem:</Text>
        <Text style={styles.description}>0 km (Zero Km)</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Valor de mercado:</Text>
        <Text style={styles.description}>35.000 mil</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Tabela Fipe:</Text>
        <Text style={styles.description}>37.500 mil</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  card: {
    backgroundColor: "#f4f4f4",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginTop: 10,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center", 
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    textAlign: "justify",
  },
});

export default BikeDetails;