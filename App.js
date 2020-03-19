import React from 'react';
import { Keyboard, Platform, StyleSheet, ScrollView } from 'react-native';
import { ApplicationProvider,IconRegistry, Layout, Button, Text, ListItem, List, Input, Card, CardHeader, Menu, Icon, Modal } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';

const HomeScreen = () => (
  <Layout style={{ justifyContent: 'center' }}>
    <Text category='h5'>HOME</Text>
  </Layout>
);
const App = () => {
  const [value, setValue] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [selectedMenuIndex, setSelectedMenuIndex] = React.useState(null);
  const [visible, setVisible] = React.useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  const renderModalElement = () => (
    <Layout
      level='3'
      style={styles.modalContainer}>
      <Text>Hi! This is modal.</Text>
    </Layout>
  );

  const Header = () => (
    <CardHeader title='Maldives' />
  );

  const data = new Array(8).fill({
    title: 'Item',
  });
  const dataMenu = [
    { title: 'Item 1' },
    {
      title: 'Item 2',
      subItems: [
        { title: 'Sub Item 1' },
        { title: 'Sub Item 2' },
      ],
    },
    { title: 'Item 3' },
    { title: 'Item 4' },
  ];
  const renderItem = ({ item, index }) => (
    <ListItem title={`${item.title} ${index + 1}`} onPress={() => alert(`${item.title} ${index + 1}`)} />
  );

  const onIconPress = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (style = {}) => (
    <Icon
      {...style}
      name={!secureTextEntry ? 'eye' : 'eye-off'}
    />
  );
  const FacebookIcon = (style) => (
    <Icon name='facebook' {...style} />
  );
  const HomeIcon = (style) => (
    <Icon {...style} name='home' />
  );
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <ScrollView>
        <HomeScreen />
        <Button icon={FacebookIcon}>Login with Facebook</Button>
        <Button icon={HomeIcon}>Home</Button>
        <Layout style={styles.container}>
          <Input
            label="Email"
            style={styles.input}
            value={value}
            onChangeText={setValue}
            placeholder='Active'
          />

          <Input
            label="Password"
            value={password}
            placeholder='********'
            style={styles.input}
            icon={renderIcon}
            secureTextEntry={secureTextEntry}
            onIconPress={onIconPress}
            onChangeText={setPassword}
          />

        </Layout>
        <List
          data={data}
          renderItem={renderItem}
        ></List>
        <Layout>

          <Card style={styles.card} header={Header} status='success'>
            <Text>
              The Maldives, officially the Republic of Maldives, is a small country in South Asia,
              located in the Arabian Sea of the Indian Ocean.
            </Text>
          </Card>

          <Card style={styles.card} header={Header} status='danger'>
            <Text>
              The Maldives, officially the Republic of Maldives, is a small country in South Asia,
              located in the Arabian Sea of the Indian Ocean.
            </Text>
          </Card>

        </Layout>
        <Menu
          data={dataMenu}
          selectedIndex={selectedMenuIndex}
          onSelect={setSelectedMenuIndex}
        />
        <Layout style={styles.containerButton}>

          <Button style={styles.button}>ACTIVE</Button>

          <Button style={styles.button} disabled={true}>DISABLED</Button>

        </Layout>
        <Layout style={styles.containerModal}>
          <Button onPress={toggleModal}>
            TOGGLE MODAL
          </Button>
          <Modal
            backdropStyle={styles.backdrop}
            onBackdropPress={toggleModal}
            visible={visible}>
            {renderModalElement()}
          </Modal>
        </Layout>
      </ScrollView>
    </ApplicationProvider>
  )
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    margin: 8,
  },
  containerButton: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    margin: 8,
  },
  containerModal: {
    minHeight: 256,
    padding: 16,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 256,
    padding: 16,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
export default App;