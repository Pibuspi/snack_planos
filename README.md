# Snack Planos

Aplicação Expo/React Native com quatro telas sobre como **iOS** e **Android** trabalham quando um aplicativo está em primeiro e segundo plano.

**Snack:** [abrir o aplicativo no Expo Snack](https://snack.expo.dev/PxuFb-RjA7S7OcRm2jTgB)

A navegação inferior segue o modelo de referência [APP_nav_bar](https://snack.expo.dev/@jeffriper/app_nav_bar), utilizando a mesma ideia de `NavigationContainer`, `createBottomTabNavigator`, `Ionicons`, telas separadas, `ScrollView`, `View`, `Text` e `StyleSheet`.

## Telas

| Tela | Conteúdo |
| --- | --- |
| Início | Introdução aos conceitos de primeiro e segundo plano. |
| 1º plano | Comportamento geral de um aplicativo visível no iOS e no Android. |
| 2º plano | Suspensão, cache, limites e retomada do aplicativo fora da tela. |
| Comparação | Comparação direta entre os dois sistemas em diferentes situações. |

## Execução

Abra o projeto no [Expo Snack](https://snack.expo.dev/) ou em um projeto Expo compatível. As dependências declaradas estão no arquivo `package.json` e seguem o conjunto utilizado pelo modelo de referência.

## Estrutura

```text
App.js
components/Header.js
navigation/appNavigator.js
screens/HomeScreen.js
screens/PrimeiroPlanoScreen.js
screens/SegundoPlanoScreen.js
screens/ComparacaoScreen.js
package.json
README.md
```

## Autoria

**Por Pietro e Lucas de Lima.**
