import React from "react";
import {Container, Form} from 'semantic-ui-react'

const RegistrationCode = ({form, handleChange}) =>{
    const options2 = [
        { key: 'y', text: 'Yes', value: 'Yes' },
        { key: 'n', text: 'No', value: 'No' },
    ];
    if(form.role === 'customer'){
        return(
        <div>
            <Form.Field>
                <label>Your Agent's ID</label>
                <input name={'agentId'} type={'text'} placeholder='AG12345' onChange={handleChange} value={form.agentId}/>
            </Form.Field>   
            <Form.Field>
                <label>Phone Number</label>
                <input required name={'phone'} placeholder='(123)-456-7890' onChange={handleChange} value={form.phone}/>
            </Form.Field>
            <Form.Field>
                <label>Address</label>
                <input required name={'addy'} placeholder='123 Elm Street' onChange={handleChange} value={form.addy}/>
            </Form.Field>
            <Form.Field>
                <label>City</label>
                <input required name={'city'} placeholder='Miami' onChange={handleChange} value={form.city}/>
            </Form.Field>
            <Form.Field>
                <label>State</label>
                <input required name={'state'} placeholder='Florida' onChange={handleChange} value={form.state}/>
            </Form.Field>
            <Form.Field>
            <Form.Select
                name={'dashcam'}
                fluid
                label='Dashcam'
                options={options2}
                placeholder='Yes/No'
                onChange={handleChange}
                value={form.dashcam}
            />
            </Form.Field>       
        </div>  
        )
    }

    return (<div>
                <Form.Field>
                    <label>Registration Code</label>
                    <input name={'code'} type={'text'} placeholder='S3CR3T' onChange={handleChange} value={form.code}/>
                </Form.Field>

            <Form.Field>
                <label>Agent ID</label>
                <input name={'agentId'} type={'text'} placeholder='AG12345' onChange={handleChange} value={form.agentId}/>
            </Form.Field>

    </div>)
}

export default RegistrationCode;
