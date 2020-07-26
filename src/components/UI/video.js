/**
 * @author Abdul Malik
 * @email abdul007malik@hotmail.com
 * @create date 2020-07-26 20:45
 * @modify date 2020-07-26 20:45
 * @desc Video Player
 */
import React from 'react'
import videojs from 'video.js'
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default class VideoPlayer extends React.Component {
    static propTypes = {
        sourcePath: PropTypes.string.isRequired
    }
    componentDidMount() {
        // instantiate Video.js
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
            console.log('onPlayerReady', this)
        });
        this.player.responsive(true);
    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }

    render() {
        return <Container className="video-player">
            <video ref={node => this.videoNode = node}
                className="video-js vjs-default-skin" width="640px" height="267px"
            />
        </Container>
    }
}