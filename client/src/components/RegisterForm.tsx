import React, { FormEvent } from 'react';

type RegisterProps = {};
type RegisterState = {
    name: string,
    email: string,
    pass1: string,
    pass2: string,
    registerSuccess: boolean,
    error: boolean
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
            error:false,
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
        console.log("Submited")
        try{
            const response = await fetch("/api/users/register",{
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
            if(response.ok && response.status === 200){
                this.setState({
                    registerSuccess:true,
                });
            }
        }catch{
            this.setState({
                error:true,
            });
        }
    }

    render(){
        if(this.state.error){
            return(<h1>There's been an error</h1>)
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
                    <input type="submit" value="Register"/>
                </form>
            )
        }
    }
}