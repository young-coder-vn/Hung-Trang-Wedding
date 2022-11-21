import React from "react"
import { useCookies } from "react-cookie"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { selectLanguage } from "utilities/cookies"
import { details } from "content/Home"

import styles from "./Details.module.scss"

function Details() {
    const [cookies] = useCookies(["language"])

    const { Title, Date, Location, hashtag, locationLink } = details[
        selectLanguage(cookies)
    ]
    return (
        <section>
            <Container>
                <Row>
                    <Col className={styles.details}>
                        <h1 className={styles.announcement}>
                            <Title />
                        </h1>
                        <h1 className={styles.date}>
                            <Date />
                        </h1>
                        <h2 className={styles.location}>
                            <a
                                href={locationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Location />
                            </a>
                        </h2>
                        <h3 className={styles.hashtag}>
                            <a
                                href={`https://www.tiktok.com/tag/${hashtag}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {`#${hashtag}`}
                            </a>
                        </h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/AfNbehFKJ7o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture=1" allowfullscreen="1"></iframe>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Details
