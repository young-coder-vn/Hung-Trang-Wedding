import React from "react"
import Emoji from "react-emoji-render"
import Octicon, { MarkGithub } from "@primer/octicons-react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Content: () => (
            <>
                <p>
                    Liên hệ với bọn mình {" "}
                    <a href="mailto:hung93.nguyenviet@gmail.com">
                    hung93.nguyenviet@gmail.com
                    </a>
                    .
                </p>
                <p>
                    <Emoji text="Made with 💚 in Thanh Hoa by Nguyễn Hưng and Trang Trần." />
                </p>
                <p>
                    <a
                        href="https://github.com/young-coder-vn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Source code
                    </a>{" "}
                    available on <Octicon icon={MarkGithub} size={11} />
                </p>
            </>
        ),
    },
}
