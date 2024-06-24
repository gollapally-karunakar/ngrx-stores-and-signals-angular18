import { createReducer, on } from "@ngrx/store";
import * as PostsActions from '../posts/posts.action';
import { Posts } from "../../services/posts.interface";

export interface PostsState {
    posts: Posts[];
    errorMessage: string | null;
}

export const initialPostsState: PostsState = {
    posts: [],
    errorMessage: ''
}

export const PostsReducer = createReducer(
    initialPostsState,
    on(PostsActions.loadPostsSuccess, (state, {posts}) => ({
        ...state,
        posts,
        errorMessage: null
    })),
    on(PostsActions.loadPostsError, (state, {errorMessage}) => ({
        ...state,
        errorMessage
    }))
)