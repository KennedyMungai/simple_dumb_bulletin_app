import { createSlice } from '@reduxjs/toolkit'

const initialState = [
	{ id: '0', name: 'Dude Lebowski' },
	{ id: '1', name: 'Neil Young' },
	{ id: '2', name: 'Kijana Mangaa' }
]

const usersSlice = createSlice({
	name: 'Users',
	initialState,
	reducers: {}
})

export default usersSlice.reducer
