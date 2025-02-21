import { PostModel, PostResponse } from '../../app/model/post.model';
import { HttpErrorResponseModel } from '../../app/model/http-error-response.model';

export interface PostState {
  post: PostModel;
  posts: PostModel[];

  isReaction: boolean;
  reactionSuccess: boolean;
  reactionErrorMessage: HttpErrorResponseModel;

  isUnReaction: boolean;
  unReactionSuccess: boolean;
  unReactionErrorMessage: HttpErrorResponseModel;

  minePost: PostResponse;
  postResponse: PostResponse;
  postDetail: PostModel;

  isCreating: boolean;
  isCreateSuccess: boolean;
  createErrorMessage: HttpErrorResponseModel;

  isUpdating: boolean;
  isUpdateSuccess: boolean;
  updateErrorMessage: HttpErrorResponseModel;

  isDeleting: boolean;
  isDeleteSuccess: boolean;
  deleteErrorMessage: HttpErrorResponseModel;

  isGettingOne: boolean;
  errorGetOneMessage: HttpErrorResponseModel;

  isGettingAll: boolean;
  errorGetAllMessage: HttpErrorResponseModel;

  isGettingWithUserId: boolean;
  errorGetWithUserIdMessage: HttpErrorResponseModel;

  isGettingMine: boolean;
  errorGetMineMessage: HttpErrorResponseModel;

  isGettingByShare: boolean;
  errorGetByShareMessage: HttpErrorResponseModel;

  isGettingByMention: boolean;
  errorGetByMentionMessage: HttpErrorResponseModel;

  isSearching: boolean;
  postSearchResult: PostModel[];
  errorSearchMessage: HttpErrorResponseModel;
}
