import { describe, test, expect } from 'vitest'
import { loadUserData } from "./load-user-data.ts";

describe('loadUserDetails', () => {
    test('load user data as expected', async () => {
        const user = await loadUserData('antfu7');

        expect(user).toMatchSnapshot()
    })

    test('sets coolness level appropriately', async () => {
        const jason = await loadUserData('jilengstorf')
        const anthony = await loadUserData('antfu7')

        expect(jason.coolness).toBe(-1);
        expect(anthony.coolness).toBe(100)
    })

    // test.fails('throws an error for nonexistent users', async () => {
    //     const notReal = await loadUserData('fakeUser');
    //
    // })

    test('throws an error for nonexistent users', async () => {
        expect(async () => await loadUserData('fakeUser')).rejects.toThrowError(
            'no user found');
    })

})
