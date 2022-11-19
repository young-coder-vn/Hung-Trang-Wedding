import React from "react"
import { Link } from "react-router-dom"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Album Ảnh Cưới</>,
        SubHeadingAuthenticated: ({ user }) => (
            <span>
                Đây là ảnh cưới của tụi mình
            </span>
        ),
        SubHeading: () => (
<iFrame src="https://www.icloud.com/sharedalbum/#B0Y5qXGF1Ilb3qX" width="680" height="480" allowfullscreen></iFrame>
        ),
    },
}
