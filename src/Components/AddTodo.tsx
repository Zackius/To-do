import { Field, Form, Formik } from 'formik'
import { Button } from '@chakra-ui/react';
import { IntegerType } from 'mongodb';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTodo = () => {
    const [startDate, setStartDate] =useState(new Date())
    return (
      <div className=' bg-purple-200 m-4 h-auto flex item-center justify-center'>
            <Formik
                
                initialValues={{ task: '', date: '', priority: '' }}
                onSubmit={
                    values => {
                        console.log(values)
                    }}>
                <Form className='flex flex-col m-4 p-10'>
                    <div className='grid w-[600px] gap-4   '>
                    <label>Task Descripton</label>
                        <Field
                    as="textarea"  className='p-2  rounded-md ' name='task' placeholder='add your task here' />
                    </div>
                    <div>
                    <DatePicker selecte={startDate} onChange={(date) => setStartDate(date)} />
                 </div>
                 
                    <div className=" grid mb-4">
            <label placeholder='Select Priority' className="">
           Task Priority
            </label>
            <Field
              as="select"
              id="selectedNumber"
              name="selectedNumber"
              className="mt-1 p-2 border rounded"
            >
              <option value="">e.g 2</option>
              <option value="1">1</option>
              <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="3">4</option>
                            <option value="3">5</option>
                            <option value="3">6</option>
            </Field>
          </div>
                    <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'black'}
            bg={'blue.500'}
            href={'#'}
            _hover={{
              bg: 'white',
            }}>
Add Task 
          </Button>
                </Form>
            </Formik>
            </div>
  )
}

export default AddTodo
