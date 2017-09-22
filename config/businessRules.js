const businessRules = {
  profile: {
    maxTeamToAppreciateAllowed: 2,
    userNameMaxSize: 20,
    nameMaxSize: 20,
    descriptionMaxSize: 100
  },
  guess: {
    minPossibleScore: 0
  },
  holi: {
    minRoundRobinFixtures: 1,
    maxRoundRobinFixtures: 50,
    knockoutTournamentRoundNames: [
      'Final',
      'SemiFinals',
      'Quarterfinals',
      
      '8th-finals',
      'Round of 16',
      
      'Round of 32',
      'Round of 64',
      'Round of 128',
      '4th round',
      '3rd round',
      '2nd round',
      '1st round'
    ]
  },
  notificationTypes: {
    friendShipRequest: 1,
    guessLeagueRequest: 2,
    nowFriendsResponse: 3,
    nowGuessLeagueAdded: 4
  },
  pontuationRules: {
    HIT_ONLY_THE_WINNER: 2,
    HIT_THE_SCOREBOARD: 5,
    HIT_NOTHING: 0,
    HOME_WINNER: 'HOME',
    AWAY_WINNER: 'AWAY',
    NO_WINNER: 'DRAW'
  }
}

module.exports = businessRules