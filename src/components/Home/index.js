// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    isLoading: true,
    teamsList: [],
  }

  componentDidMount() {
    this.teamCardFunction()
  }

  teamCardFunction = async () => {
    const {teamsList, isLoading} = this.state
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(team => ({
      id: team.id,
      name: team.name,
      teamImageUrl: team.team_image_url,
    }))
    this.setState({teamsList: updatedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt=" ipl logo"
        />
        <h1>IPL Dashboard</h1>
        {isLoading ? (
          <div testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <ul>
            {teamsList.map(teamItem => (
              <TeamCard teamItem={teamItem} key={teamItem.id} />
            ))}
          </ul>
        )}
      </>
    )
  }
}

export default Home
