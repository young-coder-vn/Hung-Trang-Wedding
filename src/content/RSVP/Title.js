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
                <iFrame src="https://www.flickr.com/gp/196987626@N03/T92X68Gw47" width="680" height="480" allowfullscreen></iFrame>
        ),
    },
}
