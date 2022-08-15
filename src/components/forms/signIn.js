import React from 'react';
import { useState, useContext} from 'react';
import { firebaseContext } from '../service/context';
import Switch from "react-switch";
import {FcGoogle} from 'react-icons/fc'
import {IoMdClose} from 'react-icons/io'
import {useForm} from 'react-hook-form';


const Login = ({nonVision}) => {
    const  [toggle, setToggle] = useState(false),
           [boundry, setBoundry] = useState(null);

    const {register, handleSubmit, resetField} = useForm();
    const {auth, 
        googleProvider, 
        signInWithPopup, 
        setPersistence, 
        browserSessionPersistence, 
        signInWithEmailAndPassword } = useContext(firebaseContext);

    

    const errorCheck = (error) => {
        switch (error.message) {
            case 'Firebase: Error (auth/wrong-password).' :
                setBoundry('Wrong password');
                break;
           case 'Firebase: Error (auth/user-not-found).' :
                setBoundry('User not found');
                break;
            default :
                break
            }
    }

    const loginUser = async(data) => {
        resetField('email');
        resetField('password');
         await signInWithEmailAndPassword(auth,data.email, data.password)
        .then(()=>{
            onClick();

        })
        .catch(error=> {
            errorCheck(error);
        });

        if (!toggle) {
            setPersistence(auth, browserSessionPersistence);
        }

    }

    const loginWithGoogle = async() => {
        await signInWithPopup(auth, googleProvider)
        .then(() => {
            onClick();
        })
        .catch(error => {
            console.log(error)
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
    };
    return(
        <section className="layout">
            <div className="modal modal__login">
                <div onClick={onClick} className="modal__close"><IoMdClose id='close'/></div>
                <div className="modal__title">
                    <div></div>
                    <h2>Sign in</h2>
                    <div></div>
                </div>
                <form onSubmit={handleSubmit(loginUser)}>
                    <input className='text' type='email' placeholder='Email address' {...register('email', {required:true})} />
                    <input className='text' type='password' placeholder='Password' {...register('password', {required:true})}/>
                    {(boundry) ? <span class="error">{boundry}</span> : null}
                    <label className='login'>
                        <Switch onChange={toggleChange} checked={toggle}></Switch>
                        <span>Remember me</span>
                    </label>
                    <input id='login' className="button button" type="submit" value="Sign in" />
                    <button onClick={loginWithGoogle} className="button button-google" type="submit"><span><FcGoogle/></span>Sign in with Google</button> 
                </form>
            </div>
            {/* <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> spiner!!! */}
        </section>
    )
};


export default Login;