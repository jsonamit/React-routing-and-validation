import React, { Component } from 'react';

class Validation extends Component {

    constructor(pops, context) {
        super(pops, context);
        this.state = {
            name: '',
            email: '',
            product: '',
            nameErr: '',
            productErr: '',
            emailErr: ''

        }
    }


    handleSubmit() {
        let name = this.refs.name.value;
        let product = this.refs.product.value;
        let email = this.refs.email.value;

        if (name === '') {
            this.setState({
                nameErr: 'Name can not be empty'
            });
            return false;
        }
        if (product === '') {
            this.setState({
                productErr: 'Product can not be empty'
            });
            return false;
        }
        if (!email.includes('@')) {
            this.setState({
                emailErr: 'Enter valid email format'
            });
            return false;
        }
        console.log('Name', this.state);
        this.setState({
            nameErr: '',
            productErr: '',
            emailErr: ''
        });
        return true;
    }
    render() {


        return (
            <div className="container">
                <h1 className="usrForm">Form Validation Page</h1>
                <div className="row mainrow">
                    <div className="col-md-6 usrForm">
                        <form >
                            <div className="form-group">
                                <input type="text" className="form-control" ref="name" placeholder="name" id="pwd" />
                            </div>
                            <div className="errMsg">
                                {this.state.nameErr}
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" ref="product" placeholder="product" id="prod" />
                            </div>
                            <div className="errMsg">
                                {this.state.productErr}
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" ref="email" placeholder="email" id="email" />
                            </div>
                            <div className="errMsg">
                                {this.state.emailErr}
                            </div>
                            <button type="button" onClick={this.handleSubmit.bind(this)} className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )

    }
}



export default Validation;
