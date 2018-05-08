import React from 'react'

export class AnonLayout extends React.Component {
  render() {
    return (
      <div>
        <div className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                <a href="/">SpotMe</a>
              </h1>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container">
            {this.props.children}
          </div>
        </section>
      </div>
    )
  }
}