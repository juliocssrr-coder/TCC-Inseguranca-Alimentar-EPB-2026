//Criar receita

import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CriarReceita() {
  const router = useRouter();

  const [ingredientes, setIngredientes] = useState([
    { id: 1, valor: "" },
    { id: 2, valor: "" },
    { id: 3, valor: "" },
  ]);

  // Controla o próximo id disponível (pra novas caixas não repetirem id)
  const [proximoId, setProximoId] = useState(4);

  function atualizarIngrediente(id, novoValor) {
    setIngredientes(
      ingredientes.map((item) =>
        item.id === id ? { ...item, valor: novoValor } : item,
      ),
    );
  }

  function adicionarCaixa() {
    setIngredientes([...ingredientes, { id: proximoId, valor: "" }]);
    setProximoId(proximoId + 1);
  }

  function removerCaixa(id) {
    setIngredientes(ingredientes.filter((item) => item.id !== id));
  }

  function gerarReceita() {
    const ingredientesPreenchidos = ingredientes
      .map((item) => item.valor.trim())
      .filter((valor) => valor !== "");
    console.log("Ingredientes informados:", ingredientesPreenchidos);
  }

  const temAlgumPreenchido = ingredientes.some(
    (item) => item.valor.trim() !== "",
  );

  return (
    <View style={styles.container}>
      {/* ===== TOPO ===== */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text>Voltar</Text>
        </TouchableOpacity>
        <Text>Nova Receita</Text>
      </View>

      {/* ===== MEIO: Caixas de ingredientes ===== */}
      <View style={styles.content}>
        <Text>Quais ingredientes você tem disponível?</Text>

        <FlatList
          data={ingredientes}
          keyExtractor={(item) => item.id.toString()}
          style={styles.lista}
          renderItem={({ item }) => (
            <View style={styles.ingredienteLinha}>
              <TextInput
                style={styles.input}
                placeholder="Ex: arroz, feijão, cenoura..."
                value={item.valor}
                onChangeText={(texto) => atualizarIngrediente(item.id, texto)}
              />
              {/* Só pode remover se sobrar mais de 1 caixa */}
              {ingredientes.length > 1 && (
                <TouchableOpacity onPress={() => removerCaixa(item.id)}>
                  <Text>Remover</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        />

        {/* Botão para adicionar mais uma caixa de ingrediente */}
        <TouchableOpacity onPress={adicionarCaixa} style={styles.addButton}>
          <Text>+ Adicionar ingrediente</Text>
        </TouchableOpacity>
      </View>

      {/* ===== RODAPÉ: Botão de gerar receita ===== */}
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={gerarReceita}
          style={styles.gerarButton}
          disabled={!temAlgumPreenchido}
        >
          <Text>Gerar Receita</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  lista: {
    marginTop: 15,
    width: "100%",
  },
  ingredienteLinha: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 8,
  },
  addButton: {
    marginTop: 10,
    padding: 10,
  },
  footer: {
    padding: 15,
    alignItems: "center",
  },
  gerarButton: {
    padding: 12,
  },
});
