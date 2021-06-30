import { gql } from "apollo-boost";

export const GET_HOSPITALS_WITH_STATS = gql`
  {
    hospitalsWithStats {
      id
      name
      admissionscount
    }
  }
`;

export const GET_KEY_ISSUES_WITH_STATS = gql`
  {
    keyComplaintsStats {
      name
      hospitalId
      category
    }
  }
`;

export const GET_USER_STATS = gql`
  {
    userStats {
      name
      nps
      reportedissues
      efficiency
      completed
    }
  }
`;

export const GET_REVENUE_STATS = gql`
  {
    revenueStats {
      month
      a
      b
      year
      totalrevenue
    }
  }
`;
