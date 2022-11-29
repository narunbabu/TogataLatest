export default {
  surname:{required: {value: true, message: 'Surname is required'},},
  name:{required: {value: true, message: 'Name is required'},},
  mobile:{required: {value: true, message: 'Mobile number is required'},
  pattern: {
    value: /^\d{10}$/,
    message: 'Invalid Mobile number Format',
  },},
    email: {
      required: {value: true, message: 'Email is required'},
      pattern: {
        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Invalid Email Format',
      },
    },
    password: {
      required: {value: true, message: 'Password is required'},
    },
}