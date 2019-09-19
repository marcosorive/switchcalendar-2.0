import React, { FormEvent } from 'react';
import {FormErrorList} from "./FormErrorList"

type RegisterProps = {};
type RegisterState = {
    name: string,
    email: string,
    pass1: string,
    pass2: string,
    registerSuccess: boolean,
    formErrorMessages: string[],
    fatalError: boolean,
    response: any,
};
export class RegisterForm extends React.Component<RegisterProps,RegisterState>{

    constructor(props:RegisterProps){
        super(props);
        this.state = {
            name: "",
            email:"",
            pass1:"",
            pass2:"",
            registerSuccess: false,
            formErrorMessages: [],
            fatalError:false,
            response: undefined,
        }
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
    }

    handleChangeInput(event: React.ChangeEvent<HTMLInputElement>){
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;
        this.setState({
            ...this.state,
            [name]: value,
        })
         
    }

    // checkFields(){

    // }

    async handleSubmitForm(event:FormEvent): Promise<void>{
        event.preventDefault();
        try{
            const response:any = await fetch("/api/users/register",{
                method: "post",
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    pass1: this.state.pass1,
                    pass2: this.state.pass2,
                }),
            })
            if(await response.ok && await response.status === 200){
                this.setState({
                    registerSuccess:true,
                });
            }else{
                const res = await response.json()
                this.setState({
                    formErrorMessages: await res.Messages,
                })
            }
        }catch (error) {
            this.setState({
                fatalError:true,
            });
        }
    }

    render(){
        if(this.state.fatalError){
            return(<h1>There's been an Fatal error</h1>)
        }else if(this.state.registerSuccess){
            return(<h1>Register ok!</h1>)
        }else{
            return(
                <form className="column" onSubmit={this.handleSubmitForm}>
                    <div className="row">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" onChange={this.handleChangeInput} value={this.state.name}/>
                    </div>
                    <div className="row">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={this.handleChangeInput}/>
                    </div>
                    <div className="row">
                        <label htmlFor="pass1">Password</label>
                        <input type="password" name="pass1" onChange={this.handleChangeInput}/>
                    </div>
                    <div className="row">
                        <label htmlFor="pass2">Confirm password</label>
                        <input type="password" name="pass2" onChange={this.handleChangeInput}/>
                    </div>
                    <FormErrorList errorList={this.state.formErrorMessages}/>
                    <input type="submit" value="Register"/>
                </form>
            )
        }
    }
}