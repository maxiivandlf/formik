import { Formik, Form, ErrorMessage } from 'formik';
import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
import Select from './components/Select';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'requerido';
  } else if (values.name.length < 5) {
    errors.name = 'El nombre es my corto';
  }
  if (!values.lastname) {
    errors.lastname = 'requerido';
  } else if (values.lastname.length < 5) {
    errors.lastname = 'El apellido es my corto';
  }

  if (!values.radio) {
    errors.radio = 'Requerido';
  }
  return errors;
};

function App() {
  return (
    <Formik
      initialValues={{
        name: '',
        lastname: '',
        email: '',
        profesion: '',
        radio: '',
      }}
      validate={validate}
      onSubmit={(values) => console.log(values)}>
      <Form>
        <TextInput name='name' label='Nombre' />
        <br />
        <TextInput name='lastname' label='Apellido' />
        <br />
        <TextInput name='email' label='Correo' />

        <Select label='Elegir profesión' name='profesion'>
          <option value=''>Seleccione un profesión</option>
          <option value='programador'>Programador</option>
          <option value='diseñador'>Diseñador</option>
          <option value='productor'>Productor</option>
        </Select>

        <Checkbox name='accept'>Aceptar terminos y condiciones</Checkbox>

        <Radio name='radio' value='chancho1' label='Chancho 1' />
        <Radio name='radio' value='chancho2' label='Chancho 2' />
        <Radio name='radio' value='chancho3' label='Chancho 3' />

        <ErrorMessage name='radio' />
        <br />

        <button type='submit'>Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
