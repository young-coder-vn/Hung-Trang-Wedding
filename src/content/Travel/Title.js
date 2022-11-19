import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Love Story</>,
        SubHeading: () => (
            <>
                Người anh muốn nắm tay đi đến cuối cuộc đời này, trước khi em tới chưa từng có ai, sau khi có em không thêm ai khác.
            </>
        ),
    },
}
