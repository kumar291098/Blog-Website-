import React from 'react';
import HeaderWithSubheader from '../../ContentPageComponent/HeaderWithSubheader/HeaderWithSubheader';
import ContentPoints from '../../ContentPageComponent/ContentPoints/ContentPoints';

const EducationalPage = ({ headerTitle, headerSubheader, contentPoints }) => {
  return (
    <div>
      <HeaderWithSubheader title={headerTitle} subheader={headerSubheader} />
      <ContentPoints points={contentPoints} />
    </div>
  );
};

export default EducationalPage;