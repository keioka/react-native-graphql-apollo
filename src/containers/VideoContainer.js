import { graphql } from 'react-apollo';
import { FETCH_FEED } from '../apollo/query';

const VideoContainer = Component => graphql(FETCH_FEED, {
  props: ({
    data: {
      loading, error, networkStatus, videos,
    },
  }) => {
    if (loading) {
      return { loading };
    }

    if (error) {
      return { error };
    }

    return {
      loading: false,
      networkStatus,
      videos,
    };
  },
})(Component);

export default VideoContainer;
