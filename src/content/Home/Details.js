import React from "react"

import { LANGUAGE } from "actions/constants"

const hashtag = "hungtrangwedding"

export default {
    [LANGUAGE.EN]: {
        Title: () => <span>Nguyễn Hưng & Trang Trần sắp kết hôn!</span>,
        Date: () => (
            <div className="d-flex flex-column">
                <div>
                    <span style={{ textDecoration: "line" }}>
                        08:30 18/12/2022
                    </span>
                </div>
                <div><b>Lễ Thành Hôn</b></div>
            </div>
        ),
        Location: () => <span>Nhà Hàng Đoàn Dung, Phú Xuân, Thọ Xuân, Thanh Hoá</span>,
        locationLink: "https://goo.gl/maps/1UzqQo2Uzqd2jqYQ9",
        hashtag,
    },
}
