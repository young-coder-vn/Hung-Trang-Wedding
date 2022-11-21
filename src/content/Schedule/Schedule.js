import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Title: () => <>Lễ Nạp Tài</>,
            Date: () => <>17/12/2022</>,
            Time: () => <>7:30</>,
            Location: () => <>Tại Gia Đình Nhà Gái</>,
            Address: () => (
                <>
                    <p>Thôn 2, Xã Yên Thịnh</p>
                    <p>Huyện Yên Định, Tỉnh Thanh Hoá</p>
                </>
            ),
            mapLink: "https://goo.gl/maps/bQUDVTkHhHbNUGSj7",
            Details: () => (
                <>
                    <p>
                        Lễ nạp tài sẽ được diễn gia cùng với sự góp mặt của hai bên gia đình. Hãy ghé thăm bất cứ khi nào bạn muốn.
                    </p>
                </>
            ),
        },
        {
            Title: () => <>Lễ Thành Hôn</>,
            Date: () => <>18/12/2022</>,
            Time: () => <>08:30</>,
            Location: () => <>Tại Nhà Hàng Đoàn Dung</>,
            Address: () => (
                <>
                    <p>Thôn Thống Nhất, Xã Phú Xuân</p>
                    <p>Huyện Thọ Xuân, Tỉnh Thanh Hoá</p>
                </>
            ),
            mapLink: "https://goo.gl/maps/1UzqQo2Uzqd2jqYQ9",
            Details: () => (
                <>
                    <p>
                        Lễ Thành Hôn sẽ diễn ra tại nhà hàng Đoàn Dung, Các bạn đến chúc phúc cho bọn tớ nhé.
                    </p>
                </>
            ),
        },
    ],
}
