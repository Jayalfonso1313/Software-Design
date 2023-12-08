import React, { useState } from 'react';
import CustomTextInput from '../components/CustomTextInput';
import logo from '../assets/coffee_shop_logo.png';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/home', { state: { name, age, gender }, replace: true });
    };


    return (
        <div className='flex flex-col justify-center items-center h-screen bg-cover bg-background-image'>
                <div className=''>
                    <img 
                        className="w-80 h-auto"
                        src={logo}
                        alt='logo'
                    />
                </div>
            <div className='bg-white p-7 rounded-lg'>
                <h1 className='text-lg pb-2 font-bold'>Coffee Shop Login</h1>
                <div className='flex flex-col items-center'>
                    <CustomTextInput
                        placeholder='Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='mb-4'
                    />
                    <CustomTextInput
                        placeholder='Your Age'
                        value={age}
                        onChange={(e) =>  setAge(e.target.value)}
                        className='mb-4'
                    />
                    <CustomTextInput
                        placeholder='Gender'
                        value={gender}
                        onChange={(e) =>  setGender(e.target.value)}
                        className='mb-4'
                    />
                    <CustomButton
                        name='ENTER'
                        onClick={() => handleSubmit()}
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;
