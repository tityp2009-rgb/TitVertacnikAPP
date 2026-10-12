import { Image } from 'expo-image';
import { Platform, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ExternalLink } from '@/components/external-link';
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
          <ThemedText type="subtitle" style={{color: '#FFFFFF'}}>Tit Vertačnik</ThemedText>
          <Image style={{width:200, height:200, borderRadius: 50,}}
          source={require('../../assets/images/moja-slika.jpg')}/>  
        </ThemedView>

        <ThemedView style={styles.sectionsWrapper}>
          <Collapsible title="Kraj">
            <ThemedText type="small">
              Živim v Šoštanju. Šoštanj je majhen kraj ob reki paki in jezeru. Imamo veliko sportnih klubov ter termo elektrarno Šoštanj.
            </ThemedText>
          </Collapsible>

          <Collapsible title="Hobiji">
            <ThemedView type="backgroundElement" style={styles.collapsibleContent}>
              <ThemedText type="small">
               V prostem casu se ukvarjam z nogometom ter hodim v fitnes
              </ThemedText>
            </ThemedView>
          </Collapsible>

          <Collapsible title="Zakaj delam to stran">
            <ThemedText type="small">
              To stran delam da predstavim nekaj o sebi ter o nogometu in kako jaz gledam na nogomet.
            </ThemedText>
          </Collapsible>

          <Collapsible title="Nk Šoštanj">
            <ThemedText type="small">
              Nk Šoštanj je nogometni klub iz Šoštanja, Njegov stadion se imenuje pod vilo Široko. Klub se nenehno razvija. Vec o klubu pa lahko izves na njihovi strani.
            </ThemedText>
            <ExternalLink href="https://nk-sostanj.si">
              <ThemedText type="linkPrimary">
                Obišči spletno stran kluba
              </ThemedText>
            </ExternalLink>
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
    backgroundColor: '#46495C',
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
});
