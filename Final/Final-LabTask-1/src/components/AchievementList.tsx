import React from 'react';
import Achievement from './Achievement';

const AchievementList: React.FC = () => {
    const achievements = [
        { position: '11th', competition: 'ICPC Preliminary contest', year: '2023' },
        {  }
    ];

    return (
        <div>
            <h2>Achievements: </h2>
            {
                achievements.map((achievement, index) => (
                    <Achievement
                        key={index}
                        position={achievement.position}
                        competition={achievement.competition}
                        year={achievement.year}
                    />
                ))
            }
        </div>
    );
}

export default AchievementList;
