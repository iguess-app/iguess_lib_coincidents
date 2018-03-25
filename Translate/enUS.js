'use strict'

const usEnDictionaryMessages = {
  sessionExpired: 'Your session expired. Please sign in again',
  passwordAlert: 'Password must be at least 8 characters, 1 special char, 1 Capital Letter, 1 Number and 1 lowerCase',
  alreadyUsed: 'Email or UserName already used',
  userNameAlreadyUsed: 'This userName is already used by other account',
  emailAlreadyUsed: 'This email is already used by other account',
  invalidLogin: 'User or Password incorrect, try again',
  notAEmail: 'Not is a valid email',
  invalidPassword: 'Password incorrect, try again',
  tooManyInvalidPassword: 'You did some many requests with wrong passwords, wait 1 hour to try it again',
  tooLongUserName: 'Too long UserName, please use a smaller one',
  tooLongName: 'Too long name, please use a smaller one',
  tooLongDescription: 'Too long description, please use a smaller one',
  friendshipRequest: '{{userName}} wants to be your friend',
  guessLeagueRequest: '{{userName}} is inviting you to a "{{championshipName}}" guessLeague ',
  userNotFound: '{{userName}} not found',
  userNotFoundImpersonal: 'User not found',
  notFriends: 'The users are not friend',
  notificationExists: 'Notification already sent',
  notificationNotFound: 'Notification not found',
  alreadyFriends: 'You are already friends',
  teamNotFound: 'Team not found',
  noTeamForThisLeague: 'No team was found for this league',
  championshipNotFound: 'Championship not found',
  guessLineNotFound: 'GuessLine not found',
  matchesNotFound: 'No Match found',
  sameTeams: 'You cannot repeat the teams that you support',
  alreadyAdd: 'Already add',
  matchDuplicated: 'You cannot do predictions to the same match at the same request',
  userRefDuplicated: 'You cannot invited the same user twice',
  guessLineInactive: 'This guessLine is not active',
  userNotAddedAtGuessLine: 'You are not at guessline\'s list',
  notAtGuessLine: 'Not at guessLine',
  anyGuessLineFound: 'No guessLines',
  anyGuessLeagueFound: 'No guessLeagues',
  admNotQuitGle: 'You are a captain. If you want to leave the GuessLeague, you need to quit captain first',
  alreadyAdm: 'You are captain already',
  youCantBeTheUserAndUserAdm: 'The userRef must to be different from userRefToAdm',
  tooFewAdms: 'You cannot leave the GuessLeague. You, at least, need to add someone to captain before',
  notAtGuessLeague: 'You are not at GuessLeague',
  guessLeagueNotFound: 'GuessLeague not found',
  someWrongAtInvite: 'Something wrong happened at the invite',
  notFriendsAtInvite: 'There are user not friends at inviteads list',
  matchNotFound: 'Match not found',
  someMatchesoneHourOff: 'One of more prediction was not accepted, the matche(s) gone happen less than one hour.',
  allMatchesoneHourOff: 'No prediction was accepted, the matche(s) gone happen less than one hour.',
  noMoreGuessLineAllowed: 'You cannot add guessLines for now.',
  noMoreGuessLeagueAllowed: 'You cannot participate to another guessLeague.',
  someWrongWithAtMoip: 'Something is wrong at the moment to save your date, try again later',
  cardAlreadyAdded: 'Card already added',
  notFoundLeagues: 'Found No Leagues'
}

const usEnDictionaryWords = {
  today: 'Today',
  tommorrow: 'Tommorrow',
  yesterday: 'Yesterday'
}

const languageInfo = {
  language: 'en-us',
  humanName: 'American English'
}

module.exports = Object.assign(usEnDictionaryMessages, usEnDictionaryWords, languageInfo)