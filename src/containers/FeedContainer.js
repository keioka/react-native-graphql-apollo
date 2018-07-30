import { graphql } from 'react-apollo';
import { FETCH_FEED } from '../apollo/query';

const FeedContainer = Component => graphql(FETCH_FEED, {
  props: ({
    data: {
      loading, error, networkStatus, feeds,
    },
  }) => {
    if (loading) {
      return { isLoading: loading };
    }

    if (error) {
      return { error };
    }

    return {
      isLoading: false,
      networkStatus,
      feeds,
    };
  },
})(Component);

export default FeedContainer;
