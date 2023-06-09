import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
	{
		id: '1',
		title: 'Learning Redux toolkit',
		content: 'Chicken wings are the best'
	},
	{
		id: 2,
		title: 'Slices...',
		content: 'The more I say slice, the more stuff happens'
	}
]

const postsSlice = createSlice({
	name: 'Posts',
	initialState,
	reducers: {
		postsAdded: {
			reducer(state, { payload }) {
				state.push(payload)
			},
			prepare(title, content, userId) {
				return {
					payload: {
						id: nanoid(),
						title,
						content,
						userId
					}
				}
			}
		}
	}
})

export const selectAllPosts = (state) => state.posts

export const { postsAdded } = postsSlice.actions

export default postsSlice.reducer
