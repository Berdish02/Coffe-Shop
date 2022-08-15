import React from 'react';
import { useState, useContext } from 'react';
import { firebaseContext } from '../service/context';
import Switch from "react-switch";
import {FcGoogle} from 'react-icons/fc';
import {IoMdClose} from 'react-icons/io';
import {useForm} from 'react-hook-form';


const Registration = ({nonVision}) => {
    const  [toggle, setToggle] = useState(false),
            [boundry, setBoundry] = useState(null);

    const {register, handleSubmit, resetField} = useForm();
    const {auth, 
        googleProvider, 
        signInWithPopup, 
        setPersistence, 
        browserSessionPersistence,
        createUserWithEmailAndPassword} = useContext(firebaseContext);

    const createUser = async(data) => {
        resetField('email');
        resetField('password');
        resetField('repeat');
        if(data.password === data.repeat){
            await createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(() => {
                onClick();
            })
            .catch(() =>{
                setBoundry('Email already in use');
            });
            if (!toggle) {
                setPersistence(auth, browserSessionPersistence);
            }
        }else {
            setBoundry('Passwords are different');
        }
    }

    const createUserWithGoogle = async() => {
        await signInWithPopup(auth, googleProvider)
        .then(() => {
            onClick();
        })
        .catch(error => {
            console.log(error.message)
        });
        if (!toggle) {
            setPersistence(auth, browserSessionPersistence);
        }

    };
    const toggleChange = (status) => {
        setToggle(status);
    }


    const onClick = () => {
        nonVision(false);
    } 

    return(
        <div className="layout">
            <div className="modal">
                <div onClick={onClick} className="modal__close"><IoMdClose id='close'/></div>
                <div className="modal__title">
                    <div></div>
                    <h2>Registration</h2>
                    <div></div>
                </div>
                <form onSubmit={handleSubmit(createUser)}>
                    <input className='text' type='email' placeholder='Email address' {...register('email', {required:true})} />
                    <input className='text' type='password' placeholder='Password' {...register('password', {required:true})}/>
                    <input className='text' type='password' placeholder='Repeat password' {...register('repeat', {required:true})}/>
                    {(boundry) ? <span className='error error-reg'>{boundry}</span> : null}
                    <label>
                        <Switch onChange={toggleChange} checked={toggle}></Switch>
                        <span>Remember me</span>
                    </label>
                    <input id='signin' className="button" type="submit" value="Sign up" />
                    <button onClick={createUserWithGoogle} className="button button-google" type="submit"><span><FcGoogle/></span>Sign in with Google</button> 
                </form>
            </div>
        </div>
    )
};


export default Registration;

