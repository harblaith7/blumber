import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import CourseDisplay from '../../components/CourseDisplay/CourseDisplay'

class SignInHomePage extends Component {
    render() {
        return (
            <>
                <Header />
                <CourseDisplay/>
            </>
        );
    }
}

export default SignInHomePage;