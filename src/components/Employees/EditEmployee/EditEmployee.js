import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

// class EditEmployee extends Component {

//     emptyItem = {
//         firstName: '',
//         lastName: '',
//         email: ''
//     };

//     constructor(props) {
//         super(props);
//         this.state = {
//             item: this.emptyItem
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     async componentDidMount() {
//         // let { id } = useParams();
//         // console.log('id = ', id);
//         // if (this.props.match.params.id !== 'new') {
//         //     const employee = await (await fetch(`http://localhost:8080/employees/${this.props.match.params.id}`)).json();
//         //     this.setState({item: employee});
//         // }
//     }

//     handleChange(event) {
//         const target = event.target;
//         const value = target.value;
//         const name = target.name;
//         let item = {...this.state.item};
//         item[name] = value;
//         this.setState({item});
//     }

//     async handleSubmit(event) {
//         event.preventDefault();
//         const {item} = this.state;
    
//         await fetch('http://localhost:8080/employees' + (item.id ? '/' + item.id : ''), {
//             method: (item.id) ? 'PUT' : 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(item),
//         });
//         this.props.history.push('/employees');
//     }

//     render() {
//         const {item} = this.state;
//         const title = <h2>{item.id ? 'Edit Employee' : 'Add Employee'}</h2>;

//         return (
//             <>
//             <main>
//                 <Container>
//                     {title}
//                     <Form onSubmit={this.handleSubmit}>
//                         <FormGroup>
//                             <Label for="firstName">First Name</Label>
//                             <Input type="text" name="firstName" id="firstName" value={item.firstName || ''}
//                                 onChange={this.handleChange} autoComplete="firstName"/>
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="lastName">Last Name</Label>
//                             <Input type="text" name="lastName" id="lastName" value={item.lastName || ''}
//                                 onChange={this.handleChange} autoComplete="lastName"/>
//                         </FormGroup>                    
//                         <FormGroup>
//                             <Label for="email">Email</Label>
//                             <Input type="text" name="email" id="email" value={item.email || ''}
//                                 onChange={this.handleChange} autoComplete="email"/>
//                         </FormGroup>
//                         <FormGroup>
//                             <Button color="primary" type="submit">Save</Button>{' '}
//                             <Button color="secondary" tag={Link} to="/employees">Cancel</Button>
//                         </FormGroup>
//                     </Form>
//                 </Container>
//             </main>
//             </>
//         )
//     }
// }

function EditEmployee() {

    const title = <h2>Titulo</h2>;
    const { id } = useParams();
    console.log('id = ', id);

    const [ item, setItem ] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const updateChanges = () => {
        setItem(item)
    }

    useEffect(()=>{
        //fetch(`http://localhost:8080/employees/${this.props.match.params.id}`)
        console.log('i fire once');    
  },[]);
    
        

    return (
        <>
            <main>
                <Container>
                    {title}
                    <p>First name = {item.firstName}</p>
                    {/* <Form>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input type="text" name="firstName" id="firstName" value={item.firstName || ''}
                                onChange={setItem} autoComplete="firstName"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input type="text" name="lastName" id="lastName" value={item.lastName || ''}
                                onChange={setItem} autoComplete="lastName"/>
                        </FormGroup>                    
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="text" name="email" id="email" value={item.email || ''}
                                onChange={setItem} autoComplete="email"/>
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary" type="submit">Save</Button>{' '}
                            <Button color="secondary" tag={Link} to="/employees">Cancel</Button>
                        </FormGroup>
                    </Form> */}
                </Container>
            </main>
        </>
    )
}

export default EditEmployee;