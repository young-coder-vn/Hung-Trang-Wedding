import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        schedule: () => <span>Lịch Trình</span>,
        travel: () => <span>Câu Chuyện Tình Yêu</span>,
        thingsToDo: () => <span>Album Ảnh Cưới</span>,
        faq: () => <span>Câu Hỏi Thường Gặp</span>,
        // registry: () => <span>Đăng Ký</span>,
        rsvp: () => <span>RSVP</span>,
        signOut: () => <span>Đăng Xuất</span>,
        signIn: () => <span>Đăng Ký Tham Gia</span>,
        manageRsvp: () => <span>Manage RSVP</span>,
    },
}
