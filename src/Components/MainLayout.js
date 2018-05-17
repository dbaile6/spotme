import React from 'react'

export default class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <div className="hero is-info">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                <a href="/">Spot.Me</a>
              </h1>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="content-container container">
            {this.props.children}
          </div>
        </section>
      </div>
    )
  }
}
