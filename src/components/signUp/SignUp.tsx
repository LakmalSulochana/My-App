import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Header from '../header/Header';
import CustomTextInput from '../common/textBox/TextBox';
import SignUpFooter from './footer/SignUpFooter';

const SignUp = () => {
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const isStrongPassword = (password) => {
        const lowercaseRegex = /[a-z]/;
        const uppercaseRegex = /[A-Z]/;
        const numberRegex = /[0-9]/;
        const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

        const hasLowercase = lowercaseRegex.test(password);
        const hasUppercase = uppercaseRegex.test(password);
        const hasNumber = numberRegex.test(password);
        const hasSpecialChar = specialCharRegex.test(password);
        const isLengthValid = password.length >= 8;

        return hasLowercase && hasUppercase && hasNumber && hasSpecialChar && isLengthValid;
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        setIsPasswordValid(isStrongPassword(text));
    };

    return (
        <View style={{ alignItems: 'center' }}>
            <Header>My App</Header>
            <View style={{ top: 50, gap: 15 }}>
                <CustomTextInput
                    placeholder="Name"
                    style={styles.input}
                    value={name}
                    onChangeText={setname}
                />
                <CustomTextInput
                    placeholder="Email Address"
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
    placeholder="Password"
    style={[
        styles.input,
        !isPasswordValid && styles.inputError
    ]}
    value={password}
    onChangeText={handlePasswordChange}
    secureTextEntry={true}
/>

<TextInput
    placeholder="Confirm Password"
    style={[
        styles.input,
        confirmPassword !== password && styles.inputError
    ]}
    value={confirmPassword}
    onChangeText={setConfirmPassword}
    secureTextEntry={true}
/>

            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={{ top: 60, gap: 10, flexDirection: 'row', left: 30 }}>
                    <View style={{ flex: 1 }}>
                        <Text>one lowercase character</Text>
                        <Text>one uppercase character</Text>
                        <Text>one number</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text>one special character</Text>
                        <Text>8 character minimum</Text>
                    </View>
                </View>

                <TouchableOpacity
    style={[
        isPasswordValid && password === confirmPassword
            ? styles.button
            : styles.disabledButton
    ]}
    disabled={!isPasswordValid || password !== confirmPassword}
>
    <Text style={styles.buttonText}>Sign Up</Text>
</TouchableOpacity>

            </View>
            <SignUpFooter />
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ffd482',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: 350,
        marginTop: 90,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight:'600'
    },
    disabledButton: {
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: 350,
        marginTop: 90,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 7,
        padding: 10,
        marginBottom: 10,
        textAlign: 'center',
        width: 350,
        height: 60,
    },

    inputError: {
        borderColor: 'red',
    },

});

export default SignUp;