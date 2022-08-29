import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { isRequired, useForm } from "./useForm";


function NewEmployee() {

  const navigate = useNavigate();

  const initialState = { firstName: "", lastName: "", email: "" };

  const validations = [
    ({ firstName }) => isRequired(firstName) || { firstName: "First Name is required" },
    ({ lastName }) => isRequired(lastName) || { lastName: "Last Name is required" },
    ({ email }) => isRequired(email) || { email: "Email is required" },
  ];



  const handleSubmit = async (item) => {
    await fetch('http://localhost:8080/employees', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item),
            });
            navigate(`/employees`);
  }

  const { values, isValid, errors, touched, changeHandler, submitHandler } =
    useForm(initialState, validations, handleSubmit);

  return (
    <>
      <main>
        <Container>
          <h1>New Employee</h1>
          <Form onSubmit={submitHandler}>
            <FormGroup>
              <Label for='firstName'>First Name</Label>
              <Input
                type='text'
                name='firstName'
                required
                value={values.firstName}
                onChange={changeHandler}
              />
              {touched.firstName && errors.firstName && (
                <p className='error'>{errors.firstName}</p>
              )}
            </FormGroup>
            <FormGroup>
              <Label for='lastName'>Last Name</Label>
              <Input
                type='text'
                name='lastName'
                required
                value={values.lastName}
                onChange={changeHandler}
                autoComplete='lastName'
              />
              {touched.lastName && errors.lastName && (
                <p className='error'>{errors.lastName}</p>
              )}
            </FormGroup>
            <FormGroup>
              <Label for='email'>Email</Label>
              <Input
                type='email'
                name='email'
                required
                value={values.email}
                onChange={changeHandler}
                autoComplete='email'
              />
              {touched.email && errors.email && (
                <p className='error'>{errors.email}</p>
              )}
            </FormGroup>
            <FormGroup>
              <Button color='primary' type='submit' disabled={!isValid}>
                Save
              </Button>{" "}
              <Button color='secondary' tag={Link} to='/employees'>
                Cancel
              </Button>
            </FormGroup>
          </Form>
        </Container>
      </main>
    </>
  );
}

export default NewEmployee;
