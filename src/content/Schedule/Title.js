import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Lịch Trình</>,
        SubHeading: () => (
            <span>
                Đây là những gì mong đợi trong ngày cưới cuối tuần của chúng tôi. Chúng tôi không thể chờ đợi để ăn mừng với bạn!
            </span>
        ),
    },
}
