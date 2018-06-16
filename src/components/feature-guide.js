import React from 'react'

import Features from '../models/features'

class FeatureGuide extends React.Component {
  render() {
    const { activeView } = this.props
    let headerClass = 'title is-3 feature-guide-header'
    if (activeView === 'search') {
      headerClass += ' search-view'
    }
    return (
      <div>
        <h3 className={headerClass}>Audio features</h3>
        <dl className="feature-guide">
          <dt style={{ color: Features.colors.acousticness }}>Acoustic</dt>
          <dd>
            Tracks acoustic vs. electronic instrumentation
          </dd>
          <dt style={{ color: Features.colors.danceability }}>Danceable</dt>
          <dd>
            Estimates the dance potential of track via elements such as instrumentation and tempo.
          </dd>
          <dt style={{ color: Features.colors.energy }}>Energetic</dt>
          <dd>
            Tracks the amount of upbeatness a track has.
          </dd>
          <dt style={{ color: Features.colors.instrumentalness }}>Instrumental</dt>
          <dd>
            Vocal free music.
          </dd>
          <dt style={{ color: Features.colors.liveness }}>Live</dt>
          <dd>
            Searches for elements such as applause to determine if a track is live.
          </dd>
          <dt>
            <span style={{ color: Features.colors.valence }}>Positive</span>
            <span> / </span>
            <span style={{ color: Features.colors.negativity }}>Negative</span>
          </dt>
          <dd>
            Describes whether a song is positive or not.
          </dd>
          <dt style={{ color: Features.colors.speechiness }}>Speechy</dt>
          <dd>
            Checks to see if a song features spoken word.
          </dd>
        </dl>
      </div>
    )
  }
}

FeatureGuide.propTypes = {
  activeView: React.PropTypes.string.isRequired
}

export default FeatureGuide
