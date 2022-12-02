import React, {useState} from 'react';
import mFormData from './UpdateProfile/profile_form';
import validation from './UpdateProfile/profile_validation';
import MForm from '../../formcomponents';

export default function UpdateProfile(props) {
    
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