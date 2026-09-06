import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();

  // Lista de receitas criadas pelo usuário (viria do banco de dados futuramente)
  // Cada receita, por enquanto, é só um exemplo: { id, nome }
  const [receitas, setReceitas] = useState([
    // exemplo: { id: "1", nome: "Arroz com Feijão" },
  ]);

  // Dicas nutricionais (viria do banco de dados ou de uma API futuramente)
  const dicas = [
    "Feijão e arroz juntos formam uma proteína completa.",
    "Vegetais folhosos escuros são ricos em ferro.",
    "Cozinhar no vapor preserva mais vitaminas dos alimentos.",
  ];
  // Escolhe uma dica com base no dia, pra não repetir toda vez que abrir o app
  const diaDoAno = Math.floor(Date.now() / 1000 / 60 / 60 / 24);
  const dicaDoDia = dicas[diaDoAno % dicas.length];

  return (
    <View style={styles.container}>
      {/* ===== TOPO: Login / Dados pessoais ===== */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text>Login / Meu Perfil</Text>
        </TouchableOpacity>
      </View>

      {/* ===== MEIO: Lista de receitas criadas + botão de criar nova ===== */}
      <View style={styles.content}>
        {/* Contador de progresso */}
        <Text style={styles.contador}>
          Você já criou {receitas.length} receita(s)
        </Text>

        {/* Dica nutricional do dia */}
        <View style={styles.dicaContainer}>
          <Text style={styles.dicaTitulo}>Dica do dia</Text>
          <Text>{dicaDoDia}</Text>
        </View>

        {/* Atalho principal: liga direto com a proposta do app */}
        <TouchableOpacity
          onPress={() => router.push("/informar-ingredientes")}
          style={styles.atalhoButton}
        >
          <Text>O que posso cozinhar agora?</Text>
        </TouchableOpacity>

        {/* Lista de receitas já criadas pelo usuário, ou mensagem de estado vazio */}
        {receitas.length === 0 ? (
          <View style={styles.estadoVazio}>
            <Text>Você ainda não criou nenhuma receita.</Text>
            <Text>Que tal começar agora?</Text>
          </View>
        ) : (
          <FlatList
            data={receitas}
            keyExtractor={(item) => item.id}
            style={styles.listaReceitas}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => router.push(`/receita/${item.id}`)}
                style={styles.receitaItem}
              >
                <Text>{item.nome}</Text>
              </TouchableOpacity>
            )}
          />
        )}

        {/* Botão de criar nova receita — sempre abaixo da lista */}
        <TouchableOpacity
          onPress={() => router.push("/cardapio")}
          style={styles.criarCardapioButton}
        >
          <Text>Criar Nova Receita</Text>
        </TouchableOpacity>
      </View>

      {/* ===== RODAPÉ: Menu de navegação ===== */}
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Text>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/receitas")}>
          <Text>Receitas</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/nutricionista")}>
          <Text>Nutricionista</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/perfil")}>
          <Text>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between", // separa topo, meio e rodapé
  },
  header: {
    padding: 10,
    alignItems: "flex-end", // login fica no canto superior
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contador: {
    marginTop: 10,
  },
  dicaContainer: {
    marginTop: 15,
    padding: 10,
    alignItems: "center",
  },
  dicaTitulo: {
    fontWeight: "bold",
  },
  atalhoButton: {
    marginTop: 15,
    padding: 10,
  },
  estadoVazio: {
    marginTop: 15,
    alignItems: "center",
  },
  listaReceitas: {
    marginTop: 15,
    width: "100%",
  },
  receitaItem: {
    padding: 10,
    alignItems: "center",
  },
  criarCardapioButton: {
    marginTop: 20,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
});
