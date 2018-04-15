const businessRules = {
  profile: {
    maxTeamToAppreciateAllowed: 2,
    userNameMaxSize: 20,
    nameMaxSize: 20,
    descriptionMaxSize: 100
  },
  guess: {
    minPossibleScore: 0,
    maxGuessLeagueGroupNameSize: 30,
    maxGuessLinesFreeAllow: 2,
    maxGuessLeagueFreeAllow: 5,
    maxTimeToSendPredictBeforeTheMatch: {
      unit: 'hour',
      value: 1
    }
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
    MAX_PONTUATION_HITTING_THE_WINNER_OR_DRAW: 10,
    MIN_PONTUATION_HITTING_THE_WINNER_OR_DRAW: 2,
    HIT_NOTHING: 0
  },
  associations: [
    'UEFA',
    'CONMEBOL',
    'CONCACAF'
  ]
}

module.exports = businessRules