/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useMembersDispatch } from '../../context/members/context';
import { fetchMembers } from '../../context/members/actions';
import MemberListItems from './MembersListItems';

const MemberList: React.FC = () => {
  const dispatchMembers = useMembersDispatch();

  useEffect(() => {
    fetchMembers(dispatchMembers);
  }, []);

  return (
    <div className="member grid gap-4 grid-cols-4 mt-5">
      <MemberListItems />
    </div>
  );
};

export default MemberList;
