import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import * as PostsActions from '../posts/posts.action';
import { PostsService } from "../../services/posts.service";


@Injectable()
export class PostsEffects {
    private postsApi = inject(PostsService);
    postsActions$ = inject(Actions);

    public loadPosts = createEffect(() => {
        return this.postsActions$.pipe(
            ofType(PostsActions.loadPosts),
            switchMap(() => this.postsApi.getPosts().pipe(
                map((res) => PostsActions.loadPostsSuccess({ posts: res })),
                catchError((err: { message: string; }) => of(PostsActions.loadPostsError({ errorMessage: 'Failed to load posts' }))
                )
            ))
        );
    });
}