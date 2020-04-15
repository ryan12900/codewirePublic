import React from "react";
import {Container, Form} from 'semantic-ui-react'

const RegistrationCode = ({form, handleChange}) =>{
    if(form.role === 'customer'){
        return(
            <Form.Field>
                <label>Your Agent's ID</label>
                <input name={'agentId'} type={'text'} placeholder='AG12345' onChange={handleChange} value={form.agentId}/>
            </Form.Field>
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
