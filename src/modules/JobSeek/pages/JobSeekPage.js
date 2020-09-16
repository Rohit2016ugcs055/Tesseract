import React from 'react';
import styled from 'styled-components';
import HiristContainer from '../components/HiristContainer';
const JobFeedWrapper = styled.div`
`;

const PageContentWrapper = styled.div`
  min-height: 600px;
  padding: 20px;
  float: left;
  background-color: #fff;
`;

const JobSeek = () => (
  <JobFeedWrapper>
    <PageContentWrapper>
      <h1>Welcome to React!</h1>
      <HiristContainer/>
    </PageContentWrapper>
  </JobFeedWrapper>
)

JobSeek.propTypes = {
};

export default JobSeek;
