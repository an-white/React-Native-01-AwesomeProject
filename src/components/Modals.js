import React, { useState } from "react";
import { Modal, Text, Pressable, View } from "react-native";
import ModalStyle from "../styles/modalStyles/ModalStyle";

const ModalComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={ModalStyle.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={ModalStyle.centeredView}>
          <View style={ModalStyle.modalView}>
            <Text style={ModalStyle.modalText}>Hello Modal L:</Text>
            <Pressable
              style={[ModalStyle.button, ModalStyle.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={ModalStyle.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        style={[ModalStyle.button, ModalStyle.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={ModalStyle.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

export default ModalComponent;
