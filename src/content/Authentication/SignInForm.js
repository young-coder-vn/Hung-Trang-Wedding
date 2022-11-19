import React from "react"
import { Link } from "react-router-dom"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Header: () => <>Please Sign In</>,
        SubmitButton: () => <>Sign In</>,
        SubmitButtonLoading: () => <>Signing In...</>,
        NoAccountPrompt: () => (
            <>
                Don't have an account?{" "}
                <Link to="/auth/signup">Sign up here.</Link>
            </>
        ),
        emailPlaceholder: "Email",
        passwordPlaceholder: "Password",
    },
}