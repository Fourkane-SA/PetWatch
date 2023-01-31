import React, {Component} from 'react';
import {Modal, StyleSheet, Text, Pressable, View, TouchableOpacity} from 'react-native';


/*TODO Clique sur deconnexion appel fct deconnexion, clique sur modifier profil redirige sur le bon lien selon role utilisateur */

class ModalParameter extends Component {
  state = {
    modalVisible: true,
  };

  render() {
    const {modalVisible} = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setState({modalVisible: !modalVisible});
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setState({modalVisible: !modalVisible})}>
                <Text style={styles.textStyle}>X</Text>
              </Pressable>

              <TouchableOpacity style={styles.profil}>Modifier mon profil</TouchableOpacity>
              <TouchableOpacity style={styles.deconnexion}>Déconnexion</TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profil: {

  },
  deconnexion: {

  },
});

export default ModalParameter;