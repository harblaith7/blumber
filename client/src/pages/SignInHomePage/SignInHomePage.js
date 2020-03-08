import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import CourseDisplay from '../../components/CourseDisplay/CourseDisplay';
import Testinomails from '../../components/Testinomials/Testinomials'

class SignInHomePage extends Component {
    render() {
        return (
            <>
                <Header />
                <CourseDisplay/>
                <Testinomails/>
            </>
        );
    }
}

export default SignInHomePage;