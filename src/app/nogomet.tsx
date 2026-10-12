import { Image } from 'expo-image';
import { Platform, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function TabTwoScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom + BottomTabInset + Spacing.three,
  };
  const theme = useTheme();

  const contentPlatformStyle = Platform.select({
    android: {
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      paddingBottom: insets.bottom,
    },
    web: {
      paddingTop: Spacing.six,
      paddingBottom: Spacing.four,
    },
  });

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: '#46495C' }]}
      contentInset={insets}
      contentContainerStyle={[styles.contentContainer, contentPlatformStyle]}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="subtitle" style={{color: '#FFFFFF'}}>Nogomet</ThemedText>
          <Image style={{width:'90%', aspectRatio: 16 / 9, borderRadius: 12,}}
          source={require('../../assets/images/stadion_2.jpg')}/>  
        </ThemedView>
        <ThemedView  style={styles.introBox}>
            <ThemedText style={{fontSize: 16}}>
                V tej podstrani vam bom opisal par stavri v nogometu.
            </ThemedText>
        </ThemedView>

        <ThemedView style={styles.sectionsWrapper}>
          <Collapsible title="Pravila">
            <ThemedText type="small">
              Nogomet je igra med dvema ekipama po 11 igralcev, pri kateri je glavni cilj z nogami ali glavo spraviti žogo v 
              nasprotnikovo mrežo in doseči več zadetkov v dveh polčasih po 45 minut. Žoge se z rokami ne sme dotakniti noben 
              igralec, razen vratarja znotraj lastnega kazenskega prostora, prekrški pa se kaznujejo s prostimi udarci ali 
              enajstmetrovko, pri čemer sodnik za hujše kršitve podeljuje rumene in rdeče kartone. Zelo pomembno je tudi pravilo
               prepovedanega položaja, ki napadalcu prepoveduje sprejemanje žoge, če je ob podaji soigralca bližje nasprotnikovi 
               golovi črti kot predzadnji igralec obrambe, medtem ko se ob izhodu žoge iz igrišča igra nadaljuje z vmetavanjem z 
               stranske črte, kotnim udarcem ali udarcem s kota.
            </ThemedText>
          </Collapsible>

          <Collapsible title="Najboljši klubi">
            <ThemedView type="backgroundElement" style={styles.collapsibleContent}>
              <ThemedText type="small">
               Med najuspešnejše in najbolj prepoznavne nogometne klube na svetu sodijo španski Real Madrid in Barcelona,
                angleški Manchester United in Liverpool, nemški Bayern München ter italijanski Juventus in Milan,
                 ki so skozi zgodovino osvojili največ domačih naslovov in prestižnih trofej Lige prvakov.
                  Ti velikani izstopajo po bogati tradiciji, legendarnih igralcih ter ogromni globalni bazi navijačev,
                   pri čemer Real Madrid velja za najuspešnejšega evropskega klubskega giganta z rekordnim številom naslovov evropskega prvaka,
                    Bayern in Juventus prevladujeta v svojih domačih prvenstvih, dvoboja med Realom in Barcelono ter
                     Liverpoolom in Manchester Unitedom pa veljata za najbolj gledane in strastne športne spektakle na planetu.
              </ThemedText>
            </ThemedView>
          </Collapsible>

          <Collapsible title="Zgodovina">
            <ThemedText type="small">
              Zgodovina nogometa ima korenine v starodavnih igrah z žogo v Kitajski, Grčiji in Rimu,
               vendar se je sodobni nogomet oblikoval sredi devetnajstega stoletja v Angliji,
                kjer so leta 1863 ustanovili prvo nogometno zvezo in zapisali enotna pravila igre.
                 Šport se je preko britanskih mornarjev in trgovcev hitro razširil po svetu,
                  kar je vodilo do ustanovitve mednarodne zveze FIFA leta 1904 in prvega svetovnega prvenstva v Urugvaju leta 1930,
                   nakar je nogomet prerastel v najbolj priljubljen in globalno razširjen šport na svetu,
                    ki ga danes zaznamujejo večmilijardna tekmovanja,
               poklicne lige in vrhunska tehnologija.
            </ThemedText>
          </Collapsible>

          <Collapsible title="slike">
            <Image style={{width:'80%', aspectRatio: 16 / 9, borderRadius: 12,marginBottom: 20,}}
          source={require('../../assets/images/nogomet_1.jpg')}/>

            <Image style={{width:'80%', aspectRatio: 16 / 9, borderRadius: 12,marginBottom: 20,}}
          source={require('../../assets/images/nogomet_2.jpg')}/>

            <Image style={{width:'80%', aspectRatio: 16 / 9, borderRadius: 12,marginBottom: 20,}}
          source={require('../../assets/images/nogomet_3.jpg')}/>

            <Image style={{width:'80%', aspectRatio: 16 / 9, borderRadius: 12,marginBottom: 20,}}
          source={require('../../assets/images/nogomet_4.jpg')}/>
          </Collapsible>
        </ThemedView>
        {Platform.OS === 'web' && <WebBadge />}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    maxWidth: MaxContentWidth,
    flexGrow: 1,
    backgroundColor: '#46495C',
  },
  titleContainer: {
    gap: Spacing.three,
    alignItems: 'center',
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.six,
    backgroundColor: '#46495C',
  },
  centerText: {
    textAlign: 'center',
    
  },
  pressed: {
    opacity: 0.7,
  },
  linkButton: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.five,
    justifyContent: 'center',
    gap: Spacing.one,
    alignItems: 'center',
  },
  sectionsWrapper: {
    gap: Spacing.five,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.three,
    backgroundColor: '#46495C',
  },
  collapsibleContent: {
    alignItems: 'center',
  
  },
  imageTutorial: {
    width: '100%',
    aspectRatio: 296 / 171,
    borderRadius: Spacing.three,
    marginTop: Spacing.two,
  },
  imageReact: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  introBox: {
  marginHorizontal: 16,
  padding: 16,
  borderRadius: 12,
},
});
