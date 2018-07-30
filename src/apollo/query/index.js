import gql from 'graphql-tag';

export const FETCH_VIDEO = gql`
  {
    videos {
      id
      imgPath
      views
      likes
      createdTime
    }
  }
`;
export const FETCH_FEED = gql`
  {
    feeds {
      id
      name
      imgUrl
      views
      likes
      createdTime
    }
  }
`;
