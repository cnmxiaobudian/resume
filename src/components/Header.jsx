import React from 'react';
import PhoneCall from './PhoneCall';
import Email from './Email';
import Github from './Github';
import Position from './Position';

export default function Header({
  name,
  title,
  mobile,
  email,
  github,
}) {
  return (
    <div className="h-auto pt-5 text-gray-800 text-left text-sm">
      <h1 className="mb-2">
        <span className="text-4xl font-bold align-text-bottom">{name}</span>
      </h1>
      <div>
        <Position className="inline mr-2" />
        {title}
      </div>
      <div>
        <PhoneCall className="inline mr-2" />
        {mobile}
      </div>
      <div>
        <Email className="inline mr-2" />
        <a href={`mailto: ${email}`}>{email}</a>
      </div>
      <a href={`http://${github}`} target="_blank" rel="noreferrer">
        <Github className="inline mr-2" />
        {github}
      </a>
    </div>
  );
}
