/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_ENDPOINT } from '../../config/constants';

export const addMember = async (dispatch: any, args: any) => {
  try {
    const token = localStorage.getItem('authToken') ?? '';
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(args),
    });
    if (!response.ok) {
      throw new Error('Failed to create member');
    }
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message };
    }
    dispatch({ type: 'ADD_MEMBER_SUCCESS', payload: data.user });
    return { ok: true };
  } catch (error) {
    console.error('Operation failed:', error);
    return { ok: false, error };
  }
};

export const fetchMembers = async (dispatch: any) => {
  const token = localStorage.getItem('authToken') ?? '';
  try {
    dispatch({ type: 'FETCH_MEMBERS_REQUEST' });
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    dispatch({ type: 'FETCH_MEMBERS_SUCCESS', payload: data });
  } catch (error) {
    console.log('Error fetching members:', error);
    dispatch({
      type: 'FETCH_MEMBERS_FAILURE',
      payload: 'Unable to load members',
    });
  }
};

export const removeMember = async (dispatch: any, memberId: number) => {
  try {
    const token = localStorage.getItem('authToken') ?? '';
    const response = await fetch(`${API_ENDPOINT}/users/${memberId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) {
      throw new Error('Failed to remove member');
    }

    // Dispatch an action to update the state when the removal is successful
    dispatch({ type: 'REMOVE_MEMBER_SUCCESS', payload: memberId });

    return { ok: true };
  } catch (error) {
    console.error('Error removing member:', error);
    // Return an error status if the removal fails
    return { ok: false, error: 'Failed to remove member' };
  }
};
