import { Field, Form, Formik } from 'formik'

const AddTodo = () => {
    return (
      <div>
            <Formik
                initialValues={{ task: '', date: '', priority: '' }}
                onSubmit={
                    values => {
                        console.log(values)
                    }}>
                <Form>
                    <Field name='task' />
                    <Field name='date' />
                    <Field name='priotity' />
                    <button type='submit'>Add </button>
                </Form>
            </Formik>
            </div>
  )
}

export default AddTodo
