import React, {useState} from 'react';
import mFormData from './UpdateProfile/profile_form';
import validation from './UpdateProfile/profile_validation';
import MForm from '../../formcomponents';
import {View} from 'react-native';
function Mycomponent(props) {
  const {navigation} = props;

  return <View></View>;
}

export default function UpdateProfile(props) {
  const {navigation} = props;
  
  async function onSubmit(data) {
    console.log('in onSubmit');
    console.log('data', JSON.stringify(data));
    // setLoading(true);

    // try {
    //     let response = await api.updateProfile(state.user._id, data);
    //     updateUser(response.user);

    //     setLoading(false);

    //     navigation.goBack();
    // } catch (error) {
    //     setError(error.message);
    //     setLoading(false)
    // }
  }

  // let formProps = {title: "Submit", fields, onSubmit, loading };
  return (
    <MForm
      mFormData={mFormData}
      validation={validation}
      onSubmitData={onSubmit}
      Extracomp={Mycomponent}
      navigation={navigation}
      button_title={'Submit'}
    />
  );
}