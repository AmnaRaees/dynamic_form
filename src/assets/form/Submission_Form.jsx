import React from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Input,
  Button,
  FormLabel,
  FormControl,
  Checkbox,
  CheckboxGroup,
  Stack,
  RadioGroup,
  Radio,
  Select,
  Textarea,
  
} from '@chakra-ui/react';
import * as Yup from 'yup';
const Submission_Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
      gender: '',
      subjects: [],
      file: null,
      url: '',
      select: '',
      about: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      contact: Yup.number()
        .max(15, 'Must be 12 numbers ')
        .required('Required'),
      gender: Yup.string().required('Required'),
      subjects: Yup.array().min(1, 'At least one subject must be selected').required('Required'),
      file: Yup.mixed().required('Required'),
      url: Yup.string().url('Invalid URL').required('Required'),
      select: Yup.string().required('Required'),
      about: Yup.string().max(300, 'Must be 300 characters or less').required('Required'),

    }),

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
  
    <Box maxW="md" mx="auto" mt={8} p={4} borderWidth={1} borderRadius="lg" boxShadow="lg" bg="purple">
      <FormControl onSubmit={formik.handleSubmit}>
        <FormLabel>First Name  </FormLabel>
        <Input
          id="fisrtName"
          name="firstName"
          type="text"
          placeholder='Enter your First Name '
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <Box color="red">{formik.errors.firstName}</Box>
        ) : null}

        <FormLabel>Last Name  </FormLabel>
        <Input
          id="lastName"
          name="lastName"
          type="text"
          placeholder='Enter your last Name '
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <Box color="red">{formik.errors.lastName}</Box>
        ) : null}

        <FormLabel>Email</FormLabel>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder='Enter your Email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <Box color="red">{formik.errors.email}</Box>
        ) : null}

        <FormLabel>Contact </FormLabel>
        <Input
          id="contact"
          name="contact"
          type="number"
          placeholder='Enter your Phone number '
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.contact}
        />
        {formik.touched.contact && formik.errors.contact ? (
          <Box color="red">{formik.errors.contact}</Box>
        ) : null}
        <FormLabel>Gender</FormLabel>
        <RadioGroup
          name="gender"
          onChange={value => formik.setFieldValue('gender', value)}
          value={formik.values.gender}
          onBlur={formik.handleBlur}
        >
          <Stack direction="row">
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="other">Other</Radio>
          </Stack>
        </RadioGroup>
        {formik.touched.gender && formik.errors.gender ? (
          <Box color="red">{formik.errors.gender}</Box>
        ) : null}


        <FormLabel>Your best subjects</FormLabel>
        <CheckboxGroup
          onChange={value => formik.setFieldValue('subjects', value)}
          value={formik.values.subjects}
        >
          <Stack direction="row">
            <Checkbox value="english">English</Checkbox>
            <Checkbox value="urdu">Urdu</Checkbox>
            <Checkbox value="maths">Maths</Checkbox>
          </Stack>
        </CheckboxGroup>
        {formik.touched.subjects && formik.errors.subjects ? (
          <Box color="red">{formik.errors.subjects}</Box>
        ) : null}

        <FormLabel>Upload Resume</FormLabel>
        <Input
          id="file"
          name="file"
          type="file"
          onChange={(event) => {
            formik.setFieldValue("file", event.currentTarget.files[0]);
          }}
          onBlur={formik.handleBlur}
        />
        {formik.touched.file && formik.errors.file ? (
          <Box color="red">{formik.errors.file}</Box>
        ) : null}

        <FormLabel>Enter URL</FormLabel>
        <Input
          id="url"
          name="url"
          type="url"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.url}
        />
        {formik.touched.url && formik.errors.url ? (
          <Box color="red">{formik.errors.file}</Box>
        ) : null}

        <FormLabel>Enter your choice </FormLabel>
        <Select
          name='select'
          placeholder='select your choice '
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.select}
        >

          <optgroup label='Beginners'>
            <option value="1">HTML</option>
            <option value="2">CSS</option>
            <option value="3">JAVA</option>
          </optgroup>

          <optgroup label='Advance'>
            <option value="4">React</option>
            <option value="5">Node</option>
            <option value="6">Express</option>
          </optgroup>

        </Select>
        {formik.touched.select && formik.errors.select ? (
          <Box color="red">{formik.errors.select}</Box>
        ) : null}

        <FormLabel>About</FormLabel>
        <Textarea name='about'
          id='about'
          cols='30'
          rows='10'
          marginBottom="2"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.about}

        >
          {formik.touched.about && formik.errors.about ? (
            <Box color="red">{formik.errors.about}</Box>
          ) : null}
        </Textarea>
        <Stack spacing={20} direction='row' align='center' >
          <Button type='reset' onClick={formik.handleReset}>Reset</Button>
          <Button type='Submit' value='submit'>Submit</Button>
        </Stack>
      </FormControl>
    </Box >
    
  );
};
export default Submission_Form