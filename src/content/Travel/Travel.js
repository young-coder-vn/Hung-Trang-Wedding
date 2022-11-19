import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Type: () => <>Bọn mình quen nhau</>,
            Details: () => (
                <>
                    <p>
                        Lần đầu tiên tôi gặp cô ấy...
                    </p>
                </>
            ),
            link: "https://fb.com/hung93.nguyenviet",
        },
    ],
}
