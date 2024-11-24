import { Text, View, ImageBackground } from 'react-native';
import { Ionicons} from '@expo/vector-icons'
import QRCode from 'react-native-qrcode-svg'
import Svg, {Line, Circle} from 'react-native-svg'
 
import { styles } from './style';
import { Colors } from '@/styles/stylesGlobal';

import { Flight } from '@/components/flight';
import { Info } from '@/components/Info';

export function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.header} source={require('../../assets/cover.jpg')}>
        <Text style={styles.title}>Cartão de embarque</Text>
        <Text style={styles.subtitle}>Falta 45 dias para sua viagem</Text>
      </ImageBackground>

      <View style={styles.ticket}>
        <View style={styles.ticketContent}>
            <View style={styles.flight}>
                <Flight label='São Paulo' value='GRU' />
                <View style={styles.duration}>
                    <Ionicons name='airplane-sharp' size={32} color={Colors.black}/>
                    <Text style={styles.hours}>9 h 45 min</Text>
                </View>
                <Flight label='Nova York' value='JKF' />
            </View>
            
            <Text style={styles.label}>Passageiro</Text>
            <Text style={styles.name}>Silas Santos</Text>

            <View style={styles.detail}>
                <View style={styles.inline}>
                    <Info label='Data' value='17 de Nov'/>
                    <Info label='Embarque' value='17:25'/>
                </View>
            </View>
        </View>

        <View>
            <Svg height={20} width='100%'>
                <Line
                x1='0%'
                y1='50%'
                x2='100%'
                y2='50%'
                stroke={Colors.gray[400]}
                strokeWidth={1}
                strokeDasharray='10,5'
                />
                <Circle r={10} cx='0%' cy='50%' fill={Colors.black}/>
                <Circle r={10} cx='100%' cy='50%' fill={Colors.black}/>
            </Svg>
        </View>

        <View style={styles.footer}>
            <View style={styles.footerContent}>
                <View style={styles.inline}>
                    <Info label='Voo' value='YZ 607'/>
                    <Info label='Assento' value='29G'/>
                </View>

                <View style={styles.inline}>
                    <Info label='Terminal' value='3'/>
                    <Info label='Portão' value='39'/>
                </View>
            </View>
            <QRCode value='boarding code' size={100}/> 
        </View>
      </View>
    </View>
  );
}

