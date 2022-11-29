import React, {useState} from 'react';
import mFormData from './Registration/register_form';
import validation from './Registration/register_validation';
// import value_data from './House/set_values';
import {View, Text} from 'react-native';
import CTA from '../../components/CTA';
import {Header, ErrorText} from '../../components/Shared';

import * as api from '../../services/auth';
import {useAuth} from '../../provider';

import MForm from '../../formcomponents';

function Mycomponent(props) {
  const {navigation} = props;
  return (
    <View>
      <CTA
        title={"Already have an account?"}
        ctaText={"Login"}
        onPress={() => navigation.replace("Login")}
        style={{marginTop: 50}}/>
    </View>
  );
}

export default function Register(props) {
  const {navigation} = props;
  const {navigate} = navigation;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  async function onSubmit(state) {
    setLoading(true);

    try {
        let response = await api.register(state);
        console.log(response);
        setLoading(false);
        Alert.alert(
            'Registration Successful',
            response.message,
            [{text: 'OK', onPress: () => navigation.replace("Login")}],
            {cancelable: false},
        );
    } catch (error) {
        setError(error.message);
        setLoading(false)
    }
}

  // let formProps = {title: "Submit", fields, onSubmit, loading };
  return (
    <View style={{flex: 1, paddingHorizontal: 16, backgroundColor: '#fff'}}>
      <Text>Registration</Text>
      <MForm
        mFormData={mFormData}
        validation={validation}
        onSubmitData={onSubmit}
        Extracomp={Mycomponent}
        navigation={navigation}
      />
    </View>
  );
}
