
import React from 'react';
import Image from 'next/image';

interface ProfileProps {
  name: string;
  profilePicture: string;
  bio: string;
}

export const Profile: React.FC<ProfileProps> = ({ name, profilePicture, bio }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Image
        src={profilePicture}
        alt={`Profile picture of ${name}`}
        width={100}
        height={100}
        className="rounded-full mb-2"
      />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{bio}</p>
    </div>
  );
};
