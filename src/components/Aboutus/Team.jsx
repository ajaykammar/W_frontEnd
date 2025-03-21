import React from 'react';
import TeamMember from './TeamMember';

const teamData = [
  {
    profileImg: 'https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8',
    name: 'Alice Johnson',
    skills: ['React', 'JavaScript', 'CSS'],
    rating: 5,
  },
  {
    profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&sa',
    name: 'Bob Smith',
    skills: ['Node.js', 'Express', 'MongoDB'],
    rating: 4,
  },
  {
    profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvw7ZEwprlxaG61kIOgFN95sj3yjYdSfhsDjg8_ibfgBTGcGBIVp2Ej9UBE6Bp_dAp1fY&usqp=CAU',
    name: 'Charlie Brown',
    skills: ['Python', 'Django', 'Data Analysis'],
    rating: 4.5,
  },
];

const Team = () => {
  return (
    <section className="bg-gray-100 py-2 px-4">
      <h1 className="uppercase text-2xl font-bold text-primary text-center mb-8">Meet Our Team</h1>
      
      <div className="flex flex-wrap justify-center gap-8">
        {teamData.map((member, index) => (
          <TeamMember 
            key={index} 
            profileImg={member.profileImg} 
            name={member.name} 
            skills={member.skills} 
            rating={member.rating} 
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
