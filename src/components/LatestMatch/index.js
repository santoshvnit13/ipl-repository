// Write your code here
const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchDetails

  return (
    <li>
      <p>{competingTeam}</p>
      <p>{date}</p>
      <p>{venue}</p>
      <p>{result}</p>
      <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      <hr />

      <p>First Innings</p>
      <p>{firstInnings}</p>
      <p>Second Innings</p>
      <p>{secondInnings}</p>
      <p>Man Of The Match</p>
      <p>{manOfTheMatch}</p>
      <p>Umpires</p>
      <p>{umpires}</p>
    </li>
  )
}

export default LatestMatch
