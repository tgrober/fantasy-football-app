const espnCookies = { espnS2: 'AEBwJh4dHGdQmN%2FI4z%2Fm4TAaUOPXNbDZ8IG06ocQiwKbSNCmZ7bEq1lho%2BI6bjjI10h3SDd%2BZbiRFAQy2plhvc4WbO7BxETICDSFfBNg2d6BJUOyqleBgElnWL%2BNo4RnQa%2FXHIszmpxce6IzrL2Yq8PqWOvrtupaGR8Nr6bu%2FqMhOkH%2B7Smiq4ofoSSE4UXOKQZYEAbNmlfoJM0rLTRm07P5cF41udBSm2eeC7bTbUn7D2%2BJaIZR%2F0uIry96E1455l1o1Exn36MPOSXiqOpJbENyhWsxdah2h0%2FfwMr5VXsqyA%3D%3D',
 SWID: '44CABFE7-66CE-4014-9ECB-5399AC10BC08' };
const leagueId = 1776617;
const year = 2018;
//let currentSeasonEndpoint = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/${year}/segments/0/leagues/${leagueId}`;
export const previousYearEndpoint = `https://fantasy.espn.com/apis/v3/games/ffl/leagueHistory/${leagueId}?seasonId=${year}`;
export const draftDetailEndpoint = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/${year}/segments/0/leagues/${leagueId}?view=mDraftDetail`;

export const endpoints = {
  'previousYearEndpoint' : previousYearEndpoint,
  'draftDetailEndpoint' : draftDetailEndpoint
};
