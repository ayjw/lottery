export const lang = {
  lang: {
    text: 'English',
    img: require('./../img/en.png')
  },
  nav: 'Advantages of game',
  login: 'LOGIN',
  LatestBlock_title: ['block', 'number', 'time'],
  lotteryRecord_title: 'The lottery record',
  Logbuch_title: 'Logbuch',
  PrizePool: 'Prize pool',
  BetLimit: 'Bet limit',
  betCombination: 'Betting combination',
  reset: 'Reset',
  submit: 'Betting',
  betAmount: 'Bet amount',
  newBet: 'Current note',
  totalAmount: 'total amount',
  LiveBroadcast_title: 'Live',
  LotteryNumber_Title: ['Time', 'term number', 'lottery number'],
  info: {
    title: ['lottery number', 'Playtime', 'Betting rules', 'gameplay'],
    content: [
      'The drawing number is composed of 3 digits. We use the last digit of the EOS block number that starts every minute and does not repeat as the drawing number of the previous issue.If the last digit of the ID of a block number is not a number, it is extended to the next block, and if the last digit of the ID of a block number is repeated with the last digit, it is extended to the next block.',
      'Our game runs once a minute, 1440 times a day, all year round.',
      'Betting time - we distinguish the specific period of betting by the time of the block where the record of betting is placed.',
      'Example 1. The time of the block where the user is betting record is recorded is 13:19:59.5 seconds, which is considered as the 13:19 phase. The drawing number starts from the block at 13:20:00',
      'Example 2. If the time of the block where the user is betting record is recorded is 13:20:00.0 seconds, it will be counted as 13:20',
      'Betting limit - divided into two limits, single limit and single limit',
      'The limit of a single bet refers to the limit of each bet. The lower limit is 0.1 and the upper limit is between 0.1 and 100. It varies according to the different ways of playing',
      'Single game limit refers to the total betting limit of each game, which is the limit Shared by all participants. This is to ensure that the amount of betting in a single game is so large that the bonus pool is emptied and all bonuses cannot be paid. The tentative single game limit is 5% of the balance of the official account',
      'The number 0-9 represents the horse code (0 is 10). We use the last digit of the consecutive EOS block number starting from every minute as the drawing number of the previous issue. The order of the drawing number represents the ranking of the horse race.',
      'Win - take the last 3 Numbers as the redemption number. If the betting number is exactly the same as the redemption number and the order is the same, it will be regarded as the winning number and the multiple of the reward is 1,000',
      'In order to guarantee the operation and daily expenses of the platform, the platform will draw 2% commission fee when the player wins the prize, so the actual bonus received by the player = bet amount * bonus multiple * 98%'

    ],
    return: 'Return'

  }
}
