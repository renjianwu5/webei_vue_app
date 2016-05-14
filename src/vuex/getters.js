export const getLoading = state => state.feeds.isFetching;
export const getFeeds = state => state.feeds.feeds;
export const getNextPage = state => state.feeds.nextPage;
export const getHasMore = state => state.feeds.hasMore;
export const getFetchStatus = state => state.feeds.success;
export const getActionSheetShow = state => state.feeds.showActionSheet;
export const getTopicId = state => state.feeds.topicId;
