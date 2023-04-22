import { createSlice } from '@reduxjs/toolkit'

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
	reducers: {}
})

export const selectAllPosts = (state) => state.posts

export default postsSlice.reducer
