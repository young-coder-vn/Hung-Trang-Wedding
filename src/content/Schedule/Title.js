import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Lịch Trình</>,
        SubHeading: () => (
            <span>
                Hãy tham gia vào cuối tuần đầy hạnh phúc của chúng tôi.
            </span>
        ),
    },
}
