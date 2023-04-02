// Write your code here
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamItem} = props
  const {id, name, teamImageUrl} = teamItem
  return (
    <li>
      <Link to={`/team-matches/${id}`}>
        <img src={teamImageUrl} alt={`${name}`} />
        <p>{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
