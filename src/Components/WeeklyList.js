import React from 'react'

import WeeklyTrackList from './WeeklyTrackList.js'

class WeeklyList extends React.Component {
  render() {
    const { tracks, avgLoudness } = this.props
    const weeklyTracks = {}
    for (const track of tracks) {
      const key = track.week.toISOString()
      if (!weeklyTracks.hasOwnProperty(key)) {
        weeklyTracks[key] = []
      }
      weeklyTracks[key].push(track)
    }
    const weeks = Object.keys(weeklyTracks)
    return (
      <div className="week-list-container">
        <h2 className="title is-2">Recent Songs</h2>
        {weeks.map(weekStr => (
          <WeekTrackList
            key={weekStr}
            week={weekStr}
            tracks={weeklyTracks[weekStr]}
            avgLoudness={avgLoudness}
          />
        ))}
      </div>
    )
  }
}

WeekList.propTypes = {
  tracks: React.PropTypes.array.isRequired,
  avgLoudness: React.PropTypes.number.isRequired
}

export default WeekList
