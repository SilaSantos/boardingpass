import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_800ExtraBold

} from '@expo-google-fonts/poppins'

import { StatusBar } from 'react-native'

import {Home} from '@/app/home'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_800ExtraBold
  })

  if(!fontsLoaded){
    return null
  }
  
  return(
    <>
      <StatusBar barStyle={'light-content'} backgroundColor='transparent' translucent/>
      <Home/>
    </>
  ) 
}

