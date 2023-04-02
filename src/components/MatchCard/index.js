// Write your code here
const MatchCard = props => {
  const {recentMatch} = props
  const {matchStatus, result, competingTeam, competingTeamLogo} = recentMatch

  return (
    <li>
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard

