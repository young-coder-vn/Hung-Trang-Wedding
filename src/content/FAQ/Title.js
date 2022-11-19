import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Questions?</>,
        SubHeading: () => (
            <>
                Nếu có bất kỳ câu hỏi nào không nằm trong số câu hỏi chúng tớ liệt kê, hãy chat với chúng tớ nhé.{" "}
                <a href="https://zalo.me/g/qgztmx621">Hưng-Trang-Wedding</a>.
            </>
        ),
    },
}
