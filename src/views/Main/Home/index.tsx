import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
  Image,
} from 'react-native';
import { Page } from '@/components';
import { useStatusBar } from '@/utils/hooks';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Index() {
  useStatusBar('dark-content', true);
  return (
    <Page style={{ backgroundColor: '#FCFCFC' }}>
      <ScrollView style={[styles.wrapper]}>
        <View style={styles.header}>
          <View style={styles.headerName}>
            <Text style={styles.headerNameTitle}>Eray Yeşilyurt</Text>
            <Text style={styles.headerNameOrg}>Hasene Derneği</Text>
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity>
              <Icon name="bell" size={25} color="#003144" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={[styles.headerPerson]}
                source={{
                  uri: 'https://i.pravatar.cc/150?img=5',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.mainButton}>
          <Icon name="plus-circle" size={30} style={styles.mainButtonIcon} />
          <Text style={styles.mainButtonText}>Yeni Talep Oluştur</Text>
        </TouchableOpacity>
        <View style={[styles.container]}>
          <LinearGradient
            colors={['#1B8377', '#60B484']}
            style={[styles.box, styles.campaign]}>
            <View style={[styles.boxTop]}>
              <Icon style={[styles.icon]} name="box" size={30} />
              <Icon style={[styles.icon]} name="more-horizontal" size={30} />
            </View>
            <View style={styles.boxName}>
              <View style={styles.boxHeader}>
                <Text style={[styles.boxHeaderTitle]}>Kampanyalar</Text>
                <Text style={[styles.boxHeaderSubtitle]}>4 Adet</Text>
              </View>
            </View>
            <View style={styles.boxPeople}>
              <Image
                style={styles.person}
                source={{
                  uri:
                    'http://annigericollegedharwad.in/wp-content/uploads/learn-press-profile/2/34b7da764b21d298ef307d04d8152dc5.jpg',
                }}
              />
              <Image
                style={[styles.person, styles.overImage]}
                source={{
                  uri: 'https://i.pravatar.cc/150?img=5',
                }}
              />
              <View style={[styles.personMore, styles.overImage]}>
                <Text style={styles.personMoreText}>+5</Text>
              </View>
            </View>
          </LinearGradient>
          <LinearGradient
            colors={['#2F667F', '#1B5071']}
            style={[styles.box, styles.request]}>
            <View style={[styles.boxTop]}>
              <Icon style={[styles.icon]} name="bookmark" size={30} />
            </View>
            <View style={[styles.boxName]}>
              <View style={[styles.boxHeader, styles.alignLeft]}>
                <Text style={[styles.boxHeaderTitle]}>Talepler</Text>
                <Text style={[styles.boxHeaderSubtitle]}>2 Adet</Text>
              </View>
            </View>
          </LinearGradient>
          <LinearGradient
            colors={['#26789D', '#299681']}
            style={[styles.box, styles.request]}>
            <View style={[styles.boxTop]}>
              <Icon style={[styles.icon]} name="droplet" size={30} />
            </View>
            <View style={[styles.boxName]}>
              <View style={[styles.boxHeader, styles.alignLeft]}>
                <Text style={[styles.boxHeaderTitle]}>Su Kuyuları</Text>
                <Text style={[styles.boxHeaderSubtitle]}>2 Adet</Text>
              </View>
            </View>
          </LinearGradient>
          <LinearGradient
            colors={['#1B8377', '#14505B']}
            style={[styles.box, styles.missions]}>
            <View style={[styles.boxTop]}>
              <Icon style={[styles.icon]} name="clipboard" size={30} />
              <Icon style={[styles.icon]} name="more-horizontal" size={30} />
            </View>
            <View style={styles.boxName}>
              <View style={styles.boxHeader}>
                <Text style={[styles.boxHeaderTitle]}>Görevler</Text>
                <Text style={[styles.boxHeaderSubtitle]}>8 Adet</Text>
              </View>
            </View>
            <View style={styles.boxPeople}>
              <Image
                style={styles.person}
                source={{
                  uri:
                    'http://annigericollegedharwad.in/wp-content/uploads/learn-press-profile/2/34b7da764b21d298ef307d04d8152dc5.jpg',
                }}
              />
              <Image
                style={[styles.person, styles.overImage]}
                source={{
                  uri: 'https://i.pravatar.cc/150?img=5',
                }}
              />
              <View style={[styles.personMore, styles.overImage]}>
                <Text style={styles.personMoreText}>+6</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </Page>
  );
}

type Padding = number | string;

function padding(a: Padding, b: Padding, c: Padding, d: Padding) {
  return {
    paddingTop: a,
    paddingRight: b ? b : a,
    paddingBottom: c ? c : a,
    paddingLeft: d ? d : b ? b : a,
  };
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    ...padding(0, 5, 5, 0),
  },

  headerName: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  headerNameTitle: {
    fontSize: 24,
    color: '#003144',
    fontWeight: '700',
  },

  headerNameOrg: {
    fontSize: 17,
    color: '#9B9BAA',
    fontWeight: '500',
    marginTop: 2,
  },

  headerActions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: '#003144',
  },

  headerPerson: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 20,
  },

  mainButton: {
    margin: 5,
    borderWidth: 1,
    borderColor: '#E7E8F6',
    borderRadius: 20,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    height: 60,
  },

  mainButtonIcon: {
    position: 'absolute',
    top: 15,
    left: 15,
    color: '#003144',
  },

  mainButtonText: {
    textAlign: 'center',
    width: '100%',
    lineHeight: 60,
    fontSize: 16,
    fontWeight: '700',
    color: '#003144',
    paddingLeft: 60,
    paddingRight: 60,
  },

  overImage: {
    marginLeft: -15,
  },

  personMore: {
    backgroundColor: 'white',
    height: 38,
    width: 38,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#60B484',
    borderWidth: 2,
  },

  personMoreText: {
    color: '#003144',
    fontSize: 13,
    fontWeight: '700',
  },

  wrapper: {
    padding: 10,
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },

  box: {
    width: 100,
    flexBasis: screenWidth / 2 - 24,
    flexGrow: 0,
    flexShrink: 0,
    height: 100,
    margin: 6,
    borderRadius: 20,
    ...padding(20, 20, 25, 20),
  },

  boxTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },

  boxName: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  boxHeader: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  alignLeft: {
    textAlign: 'left',
    alignItems: 'flex-start',
  },

  boxHeaderTitle: {
    fontSize: screenWidth / 21,
    letterSpacing: 0.2,
    fontWeight: '700',
    color: '#fff',
  },

  boxHeaderSubtitle: {
    fontSize: screenWidth / 25,
    fontWeight: '700',
    color: '#fffa',
    marginTop: 2,
  },

  boxPeople: {
    height: 38,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  person: {
    width: 38,
    height: 38,
    borderRadius: 38,
    borderColor: '#60B484',
    borderWidth: 2,
  },

  icon: {
    color: 'white',
  },

  campaign: {
    height: 260,
  },

  request: {
    height: 130,
  },

  missions: {
    height: 260,
    marginTop: -125,
  },

  red: {
    flex: 1,
    backgroundColor: 'red',
  },

  green: {
    flex: 2,
    height: 50,
    backgroundColor: 'green',
  },

  blue: {
    flex: 3,
    backgroundColor: 'blue',
  },

  yellow: {
    flex: 3,
    backgroundColor: 'yellow',
  },
});
