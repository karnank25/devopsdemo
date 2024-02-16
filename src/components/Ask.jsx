import React from "react";
import Image from 'next/image'
import avatar from '@/assests/image/innerBot.svg'
import userAvatar from '@/assests/image/userBot.svg'

export function Avatar() {
  return (
    <div className="O">
      <Image src={avatar}  alt = "Avatar" className="OO" />
    </div>
  );
}

export function UserAvatar() {
  return (
    <div className="U">
      <Image src={userAvatar} alt = "Avatar" className="UU" />
    </div>
  );
}



